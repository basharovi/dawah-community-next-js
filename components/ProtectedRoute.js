import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { Box, Spinner, Center } from '@chakra-ui/react';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="green.500" thickness="4px" />
      </Center>
    );
  }

  if (!user) {
    return <Box h="100vh" />;
  }

  return <>{children}</>;
} 