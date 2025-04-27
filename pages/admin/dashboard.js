import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Flex,
  Icon,
} from '@chakra-ui/react';
import {
  FiUsers,
  FiTarget,
  FiFolder,
  FiImage,
} from 'react-icons/fi';
import { 
  getTeamMembers, 
  getMissionItems, 
  getProjects, 
  getGalleryImages 
} from '../../utils/firebase-admin';

export default function Dashboard() {
  const [stats, setStats] = useState({
    teamCount: 0,
    missionCount: 0,
    projectsCount: 0,
    galleryCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [team, mission, projects, gallery] = await Promise.all([
          getTeamMembers(),
          getMissionItems(),
          getProjects(),
          getGalleryImages(),
        ]);

        setStats({
          teamCount: team.length,
          missionCount: mission.length,
          projectsCount: projects.length,
          galleryCount: gallery.length,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    {
      label: 'Team Members',
      value: stats.teamCount,
      icon: FiUsers,
      link: '/admin/team',
      color: 'green',
    },
    {
      label: 'Mission Items',
      value: stats.missionCount,
      icon: FiTarget,
      link: '/admin/mission',
      color: 'blue',
    },
    {
      label: 'Projects',
      value: stats.projectsCount,
      icon: FiFolder,
      link: '/admin/projects',
      color: 'purple',
    },
    {
      label: 'Gallery Images',
      value: stats.galleryCount,
      icon: FiImage,
      link: '/admin/gallery',
      color: 'orange',
    },
  ];

  return (
    <ProtectedRoute>
      <Head>
        <title>Admin Dashboard | দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</title>
      </Head>
      <AdminLayout>
        <Box>
          <Heading as="h1" size="xl" mb={6}>
            Dashboard
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
            {statCards.map((stat, index) => (
              <Link href={stat.link} key={index}>
                <Stat
                  px={6}
                  py={5}
                  bg={useColorModeValue('white', 'gray.700')}
                  shadow="md"
                  border="1px"
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                  rounded="lg"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
                  cursor="pointer"
                >
                  <Flex justifyContent="space-between">
                    <Box pl={2}>
                      <StatLabel fontWeight="medium" isTruncated>
                        {stat.label}
                      </StatLabel>
                      <StatNumber fontSize="2xl" fontWeight="bold">
                        {loading ? '-' : stat.value}
                      </StatNumber>
                      <StatHelpText>
                        Click to manage
                      </StatHelpText>
                    </Box>
                    <Box
                      my="auto"
                      color={`${stat.color}.400`}
                      alignContent="center"
                    >
                      <Icon as={stat.icon} w={8} h={8} />
                    </Box>
                  </Flex>
                </Stat>
              </Link>
            ))}
          </SimpleGrid>

          <Box
            bg={useColorModeValue('white', 'gray.700')}
            p={6}
            shadow="md"
            border="1px"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
            rounded="lg"
          >
            <Heading as="h2" size="md" mb={4}>
              Welcome to the Admin Dashboard
            </Heading>
            <Text>
              This dashboard allows you to manage all content for your website. Use the sidebar to navigate to different 
              sections, or click on the cards above to quickly access each content area.
            </Text>
            <Text mt={4}>
              All changes you make here will be immediately reflected on the public website.
            </Text>
          </Box>
        </Box>
      </AdminLayout>
    </ProtectedRoute>
  );
} 