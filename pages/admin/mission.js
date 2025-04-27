import { useState, useEffect } from 'react';
import Head from 'next/head';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  Box,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  VStack,
  HStack,
  IconButton,
  Badge,
  useColorModeValue
} from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { getMissionItems, addDocument, updateDocument, deleteDocument } from '../../utils/firebase-admin';

export default function MissionAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const data = await getMissionItems();
      setItems(data);
    } catch (e) {
      toast.error('Failed to load mission items');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  function onAdd() {
    setCurrent(null);
    setIsEditing(false);
    reset({ title: '', desc: '', color: '' });
    onOpen();
  }

  function onEdit(item) {
    setCurrent(item);
    setIsEditing(true);
    reset({ title: item.title, desc: item.desc, color: item.color });
    onOpen();
  }

  async function onDelete(id) {
    if (!confirm('Delete this item?')) return;
    try {
      await deleteDocument('mission', id);
      toast.success('Deleted successfully');
      fetchItems();
    } catch (e) {
      toast.error('Failed to delete');
    }
  }

  async function onSubmit(data) {
    try {
      if (isEditing && current) {
        await updateDocument('mission', current.id, data);
        toast.success('Updated successfully');
      } else {
        await addDocument('mission', data);
        toast.success('Created successfully');
      }
      onClose();
      fetchItems();
    } catch (e) {
      toast.error('Failed to save');
    }
  }

  return (
    <ProtectedRoute>
      <Head><title>Manage Mission | Admin</title></Head>
      <AdminLayout>
        <Box>
          <HStack justify="space-between" mb={6}>
            <Heading size="xl">Manage Missions</Heading>
            <Button leftIcon={<FiPlus />} colorScheme="green" onClick={onAdd}>Add Mission</Button>
          </HStack>
          <Box bg={useColorModeValue('white','gray.700')} shadow="md" rounded="lg">
            {loading ? <Box p={4}>Loading...</Box> : (
              <Table variant="simple">
                <Thead><Tr>
                  <Th>Title</Th><Th>Description</Th><Th>Color</Th><Th>Actions</Th>
                </Tr></Thead>
                <Tbody>
                  {items.map(item=> (
                    <Tr key={item.id}>
                      <Td>{item.title}</Td>
                      <Td>{item.desc}</Td>
                      <Td><Badge>{item.color}</Badge></Td>
                      <Td>
                        <HStack spacing={2}>
                          <IconButton icon={<FiEdit />} size="sm" onClick={()=>onEdit(item)} />
                          <IconButton icon={<FiTrash2 />} size="sm" onClick={()=>onDelete(item.id)} />
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
                <ModalHeader>{isEditing? 'Edit Mission':'Add Mission'}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={4}>
                    <FormControl isInvalid={errors.title}><FormLabel>Title</FormLabel>
                      <Input {...register('title', { required:'Required' })}/>
                    </FormControl>
                    <FormControl isInvalid={errors.desc}><FormLabel>Description</FormLabel>
                      <Textarea {...register('desc', { required:'Required' })}/>
                    </FormControl>
                    <FormControl isInvalid={errors.color}><FormLabel>Color classes</FormLabel>
                      <Input {...register('color', { required:'Required' })} placeholder="e.g. from-green-500 to-green-600"/>
                    </FormControl>
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" onClick={onClose}>Cancel</Button>
                  <Button colorScheme="green" type="submit">{isEditing? 'Update':'Add'}</Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </Box>
      </AdminLayout>
    </ProtectedRoute>
  );
} 