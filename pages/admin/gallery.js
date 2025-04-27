import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  Box, Heading, Button, Table, Thead, Tbody, Tr, Th, Td,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, Input, useDisclosure, VStack, HStack, IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import Image from 'next/image';
import { getGalleryImages, addDocument, updateDocument, deleteDocument } from '../../utils/firebase-admin';

export default function GalleryAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => { fetchItems(); }, []);
  async function fetchItems() {
    try { const data = await getGalleryImages(); setItems(data); }
    catch(e){ toast.error('Failed to load gallery'); console.error(e); }
    finally{ setLoading(false); }
  }

  function handleAdd() {
    setCurrent(null);
    reset({ caption: '' });
    setPreview('');
    setUploadedFile(null);
    onOpen();
  }
  function handleEdit(item) {
    setCurrent(item);
    reset({ caption: item.caption || '' });
    setPreview(item.img);
    setUploadedFile(null);
    onOpen();
  }

  function handleFile(e) {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this image?')) return;
    try {
      await deleteDocument('gallery', id);
      toast.success('Deleted');
      fetchItems();
    } catch (e) {
      toast.error('Failed deleting');
    }
  }

  async function onSubmit(data) {
    try {
      let url = current?.img || '';
      if (uploadedFile) {
        const fd = new FormData();
        fd.append('file', uploadedFile);
        const res = await fetch('/api/upload-gallery', { method: 'POST', body: fd });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || 'Upload failed');
        url = json.url;
      }
      const doc = { img: url, caption: data.caption };
      if (current) {
        await updateDocument('gallery', current.id, doc);
        toast.success('Updated');
      } else {
        await addDocument('gallery', doc);
        toast.success('Added');
      }
      onClose();
      fetchItems();
    } catch (e) {
      toast.error('Save failed');
      console.error(e);
    }
  }

  return (
    <ProtectedRoute>
      <Head><title>Manage Gallery | Admin</title></Head>
      <AdminLayout>
        <Box>
          <HStack justify="space-between" mb={6}>
            <Heading size="xl">Manage Gallery</Heading>
            <Button leftIcon={<FiPlus />} colorScheme="green" onClick={handleAdd}>Add Image</Button>
          </HStack>
          <Box bg={useColorModeValue('white','gray.700')} shadow="md" rounded="lg">
            {loading ? (
              <Box p={4}>Loading...</Box>
            ) : (
              <Table variant="simple">
                <Thead>
                  <Tr><Th>Preview</Th><Th>Caption</Th><Th>Actions</Th></Tr>
                </Thead>
                <Tbody>
                  {items.map(item => (
                    <Tr key={item.id}>
                      <Td>
                        <Box position="relative" width="50px" height="50px">
                          <Image src={item.img} alt={item.caption} fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
                        </Box>
                      </Td>
                      <Td>{item.caption}</Td>
                      <Td>
                        <HStack spacing={2}>
                          <IconButton icon={<FiEdit />} onClick={() => handleEdit(item)} />
                          <IconButton icon={<FiTrash2 />} onClick={() => handleDelete(item.id)} />
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Box>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader>{current ? 'Edit Image' : 'Add Image'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={4}>
                    <FormControl>
                      <FormLabel>Caption</FormLabel>
                      <Input {...register('caption')} placeholder="Optional caption" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Image File</FormLabel>
                      <Input type="file" accept="image/*" onChange={handleFile} />
                    </FormControl>
                    {preview && (
                      <Box position="relative" width="100px" height="100px">
                        <Image src={preview} alt="Preview" fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
                      </Box>
                    )}
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" onClick={onClose}>Cancel</Button>
                  <Button colorScheme="green" type="submit">{current ? 'Update' : 'Add'}</Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </Box>
      </AdminLayout>
    </ProtectedRoute>
  );
} 