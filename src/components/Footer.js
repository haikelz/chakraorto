import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { FaFacebook, FaGithub, FaEnvelope} from 'react-icons/fa';
import { Flex } from '@chakra-ui/layout';

function Footer() {

  return (
  <footer>
    <ul>
      <Flex mt="5rem">
     <a href="/"><IconButton icon={<FaEnvelope/>} isRound='true' ></IconButton></a>
        <a href="/"><IconButton ml={2} icon={<FaFacebook />} isRound='true' ></IconButton></a>
        <a href="/"><IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton></a>
        </Flex>
    </ul>
  </footer>
  )
}

export default Footer;
