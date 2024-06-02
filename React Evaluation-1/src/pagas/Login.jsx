import { Button, Container, Heading, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useContext, useRef, useState } from 'react'
import axios from 'axios'

export default function Login() {
    const [show, setShow] = React.useState(false)
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
let value = useContext()
console.log(value);
// let inputref = useRef('inputref')
// console.log(inputref);
console.log(email);
console.log(password);
    const handleClick = () => setShow(!show)

const postUser = async ()=>{
try {
    let res = await axios({
        method:'post',
        url:'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login',
        data:{email:email,password:password}
    })
    if(res.status ==200){
        
    }
} catch (error) {
    console.log(error);
}
}



  return (
    <Container maxW={'xl'} my={10}>
        <Heading align={'center'} my={8}>Login Now</Heading>
    <VStack spacing={10}>
        <Input 
        type='email' placeholder='Enter Your Email'
        onChange={(e)=>setemail(e.target.value)}
        value={email}
        />

        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        onChange={(e)=>setpassword(e.target.value)}
        value={password}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>

    <Button variant={'outline'} colorScheme='red' px={5} onClick={postUser}>Login</Button>
    </VStack>
    </Container>

  )
}
