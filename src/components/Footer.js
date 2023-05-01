import {
    Box,
    Button,
    Heading,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';

  import "../index.css"
  
  const Footer = () => {
    return (
      <Box bgColor={'blackAlpha.700'} minH={'15'} p="8" color={'#fff'}>
        <Stack direction={['column', 'row']}>
          <VStack
            w={'full'}
            borderLeft={['none', 'none ']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              CRYPTO world
            </Heading>
            <Text textTransform={'uppercase'} textDecoration={'underline'} lineHeight={'2'}>All rights reserved</Text>
          </VStack>
  
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <Button variant={'link'} color={'#333'} fontWeight={'700'}  fontSize={'19'}>
              <a target={'black'} href="https://twitter.com/Madhav__28">
                Twitter
              </a>
            </Button>
  
            <Button variant={'link'} color={'#333'} fontWeight={'700'}  fontSize={'19'}>
              <a target={'black'} href="https://github.com/Madhav-Gupta-28">
                Github
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;