import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import Head from 'next/head';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      router.push('/admin/dashboard');
      toast.success('Login successful!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login | দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</title>
      </Head>
      <Container maxW="md" py={12}>
        <Box
          p={8}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          rounded="lg"
        >
          <VStack spacing={4} align="flex-start">
            <Heading as="h1" size="lg">Admin Login</Heading>
            <Text>Sign in to access the admin dashboard</Text>
            
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack spacing={4} w="full">
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormControl>
                
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormControl>
                
                <Button
                  colorScheme="green"
                  type="submit"
                  w="full"
                  isLoading={loading}
                  mt={4}
                >
                  Sign In
                </Button>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Container>
    </>
  );
} 