import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const News = () => {
    
  return (
    <div>
      <Box w='80%' margin='auto' mt='2cm'>
         <Heading> <Heading as='span' color='red.500'>Masai</Heading> in News</Heading>
         <Box display='flex' w='full' justifyContent='space-between' mt='20px'>
           <Box w='32%' h='7cm'>
            <Image  src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg'></Image>
            <Text fontWeight='bold' fontSize='20px' mt='20px'>
                Empowering Education Through Gen AI
            </Text>
           </Box>
           <Box w='32%' h='7cm'>
            <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp'></Image>
            <Text  fontWeight='bold' fontSize='20px' mt='20px'>
                Empowering Education Through Gen AI
            </Text>
           </Box> 
           <Box w='32%' h='7cm'>
            <Image src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp'></Image>
            <Text  fontWeight='bold' fontSize='20px' mt='20px'>
                Empowering Education Through Gen AI
            </Text>
           </Box>
         </Box>
      </Box>
    </div>
  )
}

export default News