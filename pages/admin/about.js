import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  Box, Heading, Button, Table, Thead, Tbody, Tr, Th, Td,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
  FormControl, FormLabel, Input, Textarea, useDisclosure, VStack, HStack, IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { getAboutContent, addDocument, updateDocument, deleteDocument } from '../../utils/firebase-admin';

export default function AboutAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => { fetchItems(); }, []);
  async function fetchItems() {
    try {
      const data = await getAboutContent();
      setItems(data);
    } catch (e) {
      toast.error('Failed to load about items');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function handleAdd() {
    setCurrent(null);
    reset({ title:'', desc:'', color:'' });
    onOpen();
  }
  function handleEdit(item) {
    setCurrent(item);
    reset({ title:item.title, desc:item.desc, color:item.color });
    onOpen();
  }

  async function handleDelete(id) {
    if (!confirm('Delete this item?')) return;
    try {
      await deleteDocument('about', id);
      toast.success('Deleted');
      fetchItems();
    } catch (e) {
      toast.error('Failed deleting');
    }
  }

  async function onSubmit(data) {
    try {
      if (current) {
        await updateDocument('about', current.id, data);
        toast.success('Updated');
      } else {
        await addDocument('about', data);
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
      <Head><title>Manage About | Admin</title></Head>
      <AdminLayout>
        <Box>
          <HStack justify="space-between" mb={6}>
            <Heading size="xl">Manage About</Heading>
            <Button leftIcon={<FiPlus />} colorScheme="green" onClick={handleAdd}>Add Section</Button>
          </HStack>
          <Box bg={useColorModeValue('white','gray.700')} shadow="md" rounded="lg">
            {loading ? (
              <Box p={4}>Loading...</Box>
            ) : (
              <Table variant="simple">
                <Thead><Tr><Th>Title</Th><Th>Description</Th><Th>Color</Th><Th>Actions</Th></Tr></Thead>
                <Tbody>
                  {items.map(item => (
                    <Tr key={item.id}>
                      <Td>{item.title}</Td>
                      <Td>{item.desc}</Td>
                      <Td>{item.color}</Td>
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
                <ModalHeader>{current?'Edit Section':'Add Section'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={4}>
                    <FormControl><FormLabel>Title</FormLabel><Input {...register('title')} /></FormControl>
                    <FormControl><FormLabel>Description</FormLabel><Textarea {...register('desc')} /></FormControl>
                    <FormControl><FormLabel>Color classes</FormLabel><Input {...register('color')} placeholder="gradient classes" /></FormControl>
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" onClick={onClose}>Cancel</Button>
                  <Button colorScheme="green" type="submit">{current?'Update':'Add'}</Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </Box>
      </AdminLayout>
    </ProtectedRoute>
  );
} 