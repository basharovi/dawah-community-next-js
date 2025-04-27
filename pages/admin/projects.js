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
import Image from 'next/image';
import { getProjects, addDocument, updateDocument, deleteDocument } from '../../utils/firebase-admin';

export default function ProjectsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => { fetchItems(); }, []);
  async function fetchItems() {
    try { const data = await getProjects(); setItems(data);} catch(e){toast.error('Failed');} finally{setLoading(false);} }

  function handleAdd() { setCurrent(null); reset({ title:'', description:'', link:'', date:'', image:'' }); setPreview(''); onOpen(); }
  function handleEdit(item) { setCurrent(item); reset({ title:item.title, description:item.description, link:item.link, date:item.date }); setPreview(item.image); onOpen(); }

  function handleFile(e) { const file=e.target.files[0]; if(file){setUploadedFile(file); const r=new FileReader(); r.onload=()=>setPreview(r.result); r.readAsDataURL(file);} }

  async function handleDelete(id){ if(!confirm('Delete?'))return; try{await deleteDocument('projects',id); toast.success('Deleted'); fetchItems(); }catch(e){toast.error('Failed deleting');}}  

  async function onSubmit(data) {
    try {
      let url = current?.image || '';
      if(uploadedFile){ const fd=new FormData(); fd.append('file',uploadedFile); const res=await fetch('/api/upload-project',{method:'POST',body:fd}); const resJson=await res.json(); if(!res.ok) throw new Error(resJson.error); url=resJson.url; }
      const doc = { ...data, image: url };
      if(current) { await updateDocument('projects', current.id, doc); toast.success('Updated'); } else { await addDocument('projects', doc); toast.success('Added'); }
      onClose(); fetchItems();
    } catch(e) { toast.error('Failed saving'); }
  }

  return (
    <ProtectedRoute>
      <Head><title>Manage Projects | Admin</title></Head>
      <AdminLayout>
        <Box>
          <HStack justify="space-between" mb={6}>
            <Heading size="xl">Manage Projects</Heading>
            <Button leftIcon={<FiPlus />} onClick={handleAdd} colorScheme="green">Add Project</Button>
          </HStack>
          <Box bg={useColorModeValue('white','gray.700')} shadow="md" rounded="lg">
            {loading ? <Box p={4}>Loading...</Box> : (
              <Table variant="simple">
                <Thead><Tr><Th>Title</Th><Th>Date</Th><Th>Image</Th><Th>Actions</Th></Tr></Thead>
                <Tbody>
                  {items.map(item=>(
                    <Tr key={item.id}>
                      <Td>{item.title}</Td>
                      <Td>{item.date}</Td>
                      <Td><Box pos="relative" w="50px" h="50px"><Image src={item.image} alt={item.title} fill style={{objectFit:'cover',borderRadius:'4px'}}/></Box></Td>
                      <Td><HStack spacing={2}><IconButton icon={<FiEdit/>} onClick={()=>handleEdit(item)}/><IconButton icon={<FiTrash2/>} onClick={()=>handleDelete(item.id)}/></HStack></Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay /><ModalContent><form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader>{current?'Edit Project':'Add Project'}</ModalHeader><ModalCloseButton/>
              <ModalBody><VStack spacing={4}>
                <FormControl isInvalid={errors.title}><FormLabel>Title</FormLabel><Input {...register('title',{required:'Required'})}/></FormControl>
                <FormControl isInvalid={errors.description}><FormLabel>Description</FormLabel><Textarea {...register('description',{required:'Required'})}/></FormControl>
                <FormControl isInvalid={errors.link}><FormLabel>Link</FormLabel><Input {...register('link',{required:'Required'})}/></FormControl>
                <FormControl isInvalid={errors.date}><FormLabel>Date</FormLabel><Input {...register('date',{required:'Required'})} type="date"/></FormControl>
                <FormControl><FormLabel>Image</FormLabel><Input type="file" accept="image/*" onChange={handleFile}/></FormControl>
                {preview && <Box pos="relative" w="100px" h="100px"><Image src={preview} alt="Preview" fill style={{objectFit:'cover',borderRadius:'4px'}}/></Box>}
              </VStack></ModalBody>
              <ModalFooter><Button variant="ghost" onClick={onClose}>Cancel</Button><Button colorScheme="green" type="submit">{current?'Update':'Add'}</Button></ModalFooter>
            </form></ModalContent>
          </Modal>
        </Box>
      </AdminLayout>
    </ProtectedRoute>
  );
} 