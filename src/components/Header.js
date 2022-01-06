import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  /* <Circle position="absolute" ml="20px" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />*/

  return (
  <Stack>
    <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} textAlign={{base: "center", md: "left"}} alignSelf="flex-start">
      <Box mt={isNotSmallerScreen ? "0" : "16"} ml={{base: "0", md: "50px"}} align="flex-start">
        <Text fontSize="5xl" fontWeight="semibold">Hi, I'm</Text>
        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Yuuki</Text>
        <Text fontSize="2xl" textAlign="" color={isDark ? "gray.200" : "gray.500"}>Front-End Stuff, automotive, design, music, coffee, and Anime.</Text>
        <Button mt={8} colorScheme="blue" onClick={() => window.open("https://haikelz.me")}>My Blog</Button>
        </Box>
        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="350px" src='https://avatars.githubusercontent.com/u/77146709?v=4' />
      </Flex>
   </Stack>
  )
}

export default Header
