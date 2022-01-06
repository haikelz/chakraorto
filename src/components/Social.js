import React from 'react';
import Icon from '@chakra-ui/icon';
import { HStack } from '@chakra-ui/layout';
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa';

function Social() {
  return (
    <HStack spacing="24" mb="40px">
      <Icon as={FaFacebookF} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaSpotify} boxSize="50" />
      <Icon as={FaShopify} boxSize="50" />
    </HStack>
  )
}

export default Social