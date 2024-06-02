import React from 'react'
import Products from './Products'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container maxW={'container.lg'}>
        <Products/>
    </Container>
  )
}
