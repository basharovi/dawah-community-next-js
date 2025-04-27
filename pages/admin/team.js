import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
  useDisclosure,
  VStack,
  HStack,
  IconButton,
  useColorModeValue,
  FormErrorMessage,
  Select,
  Text,
  Badge,
} from '@chakra-ui/react';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { getTeamMembers, addDocument, updateDocument, deleteDocument, deleteFile } from '../../utils/firebase-admin';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentMember, setCurrentMember] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  async function fetchTeamMembers() {
    try {
      const members = await getTeamMembers();
      setTeamMembers(members);
    } catch (error) {
      console.error("Error fetching team members:", error);
      toast.error("Failed to load team members");
    } finally {
      setLoading(false);
    }
  }

  function handleAddMember() {
    setIsEditing(false);
    setCurrentMember(null);
    setImagePreview('');
    setUploadedFile(null);
    reset({
      name: '',
      role: '',
      bio: '',
      social: ''
    });
    onOpen();
  }

  function handleEditMember(member) {
    setIsEditing(true);
    setCurrentMember(member);
    setImagePreview(getSafeImageUrl(member.img));
    setUploadedFile(null);
    reset({
      name: member.name,
      role: member.role,
      bio: member.bio || '',
      social: member.social && member.social.length > 0 ? member.social[0].url : ''
    });
    onOpen();
  }

  async function handleDeleteMember(id, imagePath) {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      try {
        await deleteDocument('team', id);
        
        // Delete the image if it's not a default image
        if (imagePath && !imagePath.includes('no_image.jpg')) {
          // Extract the path from the full URL
          const path = imagePath.split('team/')[1];
          if (path) {
            await deleteFile(`team/${path}`);
          }
        }
        
        toast.success('Team member deleted successfully');
        fetchTeamMembers();
      } catch (error) {
        console.error('Error deleting team member:', error);
        toast.error('Failed to delete team member');
      }
    }
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async function onSubmit(data) {
    try {
      let imageUrl = currentMember?.img || '/images/team/no_image.jpg';
      
      // Upload new image via local API
      if (uploadedFile) {
        const formData = new FormData();
        formData.append('file', uploadedFile);
        const response = await fetch('/api/upload-local', { method: 'POST', body: formData });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Upload failed');
        imageUrl = result.url;
      }
      
      // Format social media links
      const socialLinks = [];
      if (data.social) {
        socialLinks.push({
          type: 'facebook',
          url: data.social
        });
      }
      
      const memberData = {
        name: data.name,
        role: data.role,
        bio: data.bio,
        img: imageUrl,
        social: socialLinks
      };
      
      if (isEditing && currentMember) {
        await updateDocument('team', currentMember.id, memberData);
        toast.success('Team member updated successfully');
      } else {
        await addDocument('team', memberData);
        toast.success('Team member added successfully');
      }
      
      onClose();
      fetchTeamMembers();
    } catch (error) {
      console.error('Error saving team member:', error);
      toast.error('Failed to save team member');
    }
  }

  // Safe image URL handler for CORS issues
  const getSafeImageUrl = (url) => {
    if (!url) return "/images/team/no_image.jpg";
    return url;
  };

  return (
    <ProtectedRoute>
      <Head>
        <title>Manage Team | দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</title>
      </Head>
      <AdminLayout>
        <Box>
          <HStack justify="space-between" mb={6}>
            <Heading as="h1" size="xl">
              Manage Team Members
            </Heading>
            <Button 
              leftIcon={<FiPlus />} 
              colorScheme="green"
              onClick={handleAddMember}
            >
              Add Member
            </Button>
          </HStack>
          
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            shadow="md"
            rounded="lg"
            overflow="hidden"
          >
            {loading ? (
              <Text p={4}>Loading team members...</Text>
            ) : teamMembers.length === 0 ? (
              <Text p={4}>No team members found. Add your first team member.</Text>
            ) : (
              <Table variant="simple">
                <Thead bg={useColorModeValue('gray.50', 'gray.800')}>
                  <Tr>
                    <Th>Photo</Th>
                    <Th>Name</Th>
                    <Th>Role</Th>
                    <Th>Bio</Th>
                    <Th>Social</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {teamMembers.map((member) => (
                    <Tr key={member.id}>
                      <Td>
                        <Box position="relative" width="50px" height="50px">
                          <Image 
                            src={getSafeImageUrl(member.img)} 
                            alt={member.name} 
                            width={50}
                            height={50}
                            style={{
                              objectFit: 'cover',
                              borderRadius: '6px'
                            }}
                            onError={(e) => {
                              e.target.src = "/images/team/no_image.jpg";
                            }}
                          />
                        </Box>
                      </Td>
                      <Td fontWeight="medium">{member.name}</Td>
                      <Td>
                        <Badge colorScheme="green">
                          {member.role}
                        </Badge>
                      </Td>
                      <Td>
                        <Text noOfLines={1} maxW="200px">
                          {member.bio || '-'}
                        </Text>
                      </Td>
                      <Td>
                        {member.social && member.social.length > 0 ? (
                          <Text noOfLines={1} maxW="150px">
                            {member.social[0].url}
                          </Text>
                        ) : (
                          '-'
                        )}
                      </Td>
                      <Td>
                        <HStack spacing={2}>
                          <IconButton
                            icon={<FiEdit />}
                            aria-label="Edit"
                            colorScheme="blue"
                            variant="ghost"
                            onClick={() => handleEditMember(member)}
                          />
                          <IconButton
                            icon={<FiTrash2 />}
                            aria-label="Delete"
                            colorScheme="red"
                            variant="ghost"
                            onClick={() => handleDeleteMember(member.id, member.img)}
                          />
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Box>
          
          {/* Add/Edit Modal */}
          <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader>
                  {isEditing ? 'Edit Team Member' : 'Add Team Member'}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing={4}>
                    <FormControl isInvalid={errors.name}>
                      <FormLabel>Name</FormLabel>
                      <Input 
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Enter name"
                      />
                      <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                    </FormControl>
                    
                    <FormControl isInvalid={errors.role}>
                      <FormLabel>Role</FormLabel>
                      <Select 
                        {...register('role', { required: 'Role is required' })}
                        placeholder="Select role"
                      >
                        <option value="আহবায়ক">আহবায়ক</option>
                        <option value="যুগ্ম আহবায়ক">যুগ্ম আহবায়ক</option>
                        <option value="কার্যকরী সদস্য">কার্যকরী সদস্য</option>
                      </Select>
                      <FormErrorMessage>{errors.role?.message}</FormErrorMessage>
                    </FormControl>
                    
                    <FormControl>
                      <FormLabel>Bio</FormLabel>
                      <Input 
                        {...register('bio')}
                        placeholder="Enter bio"
                      />
                    </FormControl>
                    
                    <FormControl>
                      <FormLabel>Facebook URL</FormLabel>
                      <Input 
                        {...register('social')}
                        placeholder="https://facebook.com/profile"
                      />
                    </FormControl>
                    
                    <FormControl>
                      <FormLabel>Photo</FormLabel>
                      <Input 
                        type="file" 
                        accept="image/*"
                        onChange={handleImageChange}
                        p={1}
                      />
                      {imagePreview && (
                        <Box mt={2} position="relative" width="100px" height="100px">
                          {imagePreview.startsWith('data:') ? (
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              style={{
                                maxHeight: "100px",
                                borderRadius: "6px",
                                objectFit: "cover"
                              }}
                            />
                          ) : (
                            <Image 
                              src={imagePreview} 
                              alt="Preview" 
                              width={100}
                              height={100}
                              style={{
                                borderRadius: "6px",
                                objectFit: "cover"
                              }}
                              onError={(e) => {
                                e.target.src = "/images/team/no_image.jpg";
                              }}
                            />
                          )}
                        </Box>
                      )}
                    </FormControl>
                  </VStack>
                </ModalBody>
                <ModalFooter>
                  <Button variant="ghost" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" colorScheme="green">
                    {isEditing ? 'Update' : 'Add'}
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </Box>
      </AdminLayout>
    </ProtectedRoute>
  );
} 