import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Second = () => {
  return (
    <div>
        <Box w='80%'  margin='auto' display='flex'  mt='3cm' justifyContent='space-between' >
         <Box w='45%' brorder='1px solid black' textAlign='left'>
          <Heading>
           <Heading as='span' color='red.500'> Elvate</Heading> Your Career Possibilities
          </Heading>
          <Text fontWeight='md' fontSize='23px'mt='20px'>It dosen't matter where you come from we know how to get you to your dream career</Text>
          <Text fontStyle='18px' mt='20px'>Our graduates consistently outperform students from top Indian engineering colleges & universities. 70% of companies who have hired 1 masai graduate come back to us with their hiring mandates</Text>
          <Button bgColor='red.500' color='white' mt='20px'>
            Appy Now
          </Button>
         </Box>
         <Box borderRadius='2xl' overflow='hidden'>
         <iframe width="614" height="346" src="https://www.youtube.com/embed/Ji0ICdxTdqc" title="No Matter Your Background, Get Your Dream Career | Skilled By Masai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </Box>
        </Box>
    </div>
  )
}

export default Second