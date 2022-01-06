import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text} from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiVim, DiLinux, DiWebplatform } from 'react-icons/di';

function Profile() {

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%">
      <Box alignSelf="center" px="32" pt="32">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          1+
        </Heading>
        <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
      </Box>
      <Box alignSelf="center" align="flex-start" alignItems="center" pr="100px" pl={{base: "100px", md: "0"}} py="32">
        <Text fontWeight="bold" textAlign={{md: "left", base: "center"}} fontSize="2xl">Front End Enthusiast who loves design, Linux, and app development</Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} alignSelf="center" mt={8}>
          <Flex rounded="xl" alignItems="center" direction="column" mt={4} bg="gray" h="35vh" w="35vh" justify="flex-end">
            <Icon color="black" py="7" as={DiLinux} w="40" h="40"/>
            <Text color="white" py="4" fontSize="xl" fontWeight="semibold">
              Linux
            </Text>
          </Flex>
          <Flex rounded="xl" alignItems="center" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.100" h="35vh" w="35vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
            <Icon color="black" py="7" as={DiVim} w="40" h="40" />
            <Text color="black" py="4" fontSize="xl" fontWeight="semibold">Neovim User</Text>
          </Flex>
          <Flex rounded="xl" alignItems="center" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.100" h="35vh" w="35vh" justify="flex-end" _hover={{ bg: "green.400", }}>
            <Icon as={DiWebplatform} py="7" w="40" h="40" color="black" />
            <Text color="black" py="4" fontSize="xl" fontWeight="semibold">App Development</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Profile
