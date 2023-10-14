import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
export const Profile = () => {
    const {userEmail, userName} = useSelector(store=> store.authReducer);
    const {orders} = useSelector(store=> store.productReducer)
  return (
    <Flex justifyContent={'center'} m={"2rem 0"}  gap={"2rem"}>
    <Box
        
      maxW={'270px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}>
      <Image
        h={'120px'}
        w={'full'}
        src={
          'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        }
        objectFit="cover"
        alt="#"
      />
      <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
           {userName}
          </Heading>
          <Text color={'gray.500'}>{userEmail}</Text>
        </Stack>

       
          <Stack spacing={0} align={'center'}>
            <Text fontWeight={600}>Total Orders</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              {orders.length}
            </Text>
          </Stack>
         
        <Button
          w={'full'}
          mt={8}
          bg={useColorModeValue('brand.600', 'gray.900')}
          color={'white'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}>
          Shop Now
        </Button>
      </Box>
    </Box>
    <Box></Box>
    </Flex>
  )
}
