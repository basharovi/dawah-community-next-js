import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import {
  Box,
  Flex,
  Text,
  Icon,
  HStack,
  VStack,
  useColorModeValue,
  Heading,
  Button,
  IconButton,
  CloseButton,
  useDisclosure,
  Drawer,
  DrawerContent,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiHome,
  FiUsers,
  FiTarget,
  FiFolder,
  FiImage,
  FiLogOut,
  FiSettings,
  FiPhone,
} from 'react-icons/fi';

const LinkItems = [
  { name: 'Dashboard', icon: FiHome, href: '/admin/dashboard' },
  { name: 'Team', icon: FiUsers, href: '/admin/team' },
  { name: 'About', icon: FiSettings, href: '/admin/about' },
  { name: 'Mission', icon: FiTarget, href: '/admin/mission' },
  { name: 'Projects', icon: FiFolder, href: '/admin/projects' },
  { name: 'Gallery', icon: FiImage, href: '/admin/gallery' },
  { name: 'Contact', icon: FiPhone, href: '/admin/contact' },
];

export default function AdminLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" color="green.600">
          Admin Dashboard
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, href, children, ...rest }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? 'green.100' : 'transparent'}
        color={isActive ? 'green.700' : 'inherit'}
        _hover={{
          bg: 'green.50',
          color: 'green.700',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/admin/login');
      toast.success('Logged out successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to log out');
    }
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="xl"
        fontWeight="bold"
        color="green.600">
        Admin
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Button
          variant="ghost"
          leftIcon={<FiLogOut />}
          size="sm"
          onClick={handleLogout}
          colorScheme="red">
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}; 