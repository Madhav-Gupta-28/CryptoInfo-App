import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

function Header() {
  return (
    <HStack p='3' shadow={"base"} bgColor={'blackAlpha.700'}>
      <Button variant={'outline'} color={'#fff'} className='btn-header'>
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant={'outline'} color={'#fff'} className='btn-header'>
        <Link to={'/exchanges'} >Exchanges</Link>
      </Button>
    </HStack>
  )
}

export default Header