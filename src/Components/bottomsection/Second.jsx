import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Second = () => {
  return (
    <div>
        <SimpleGrid w={['95%','95%','80%']}  margin='auto' columns={[1,1,2]}  mt='3cm' justifyContent='space-between' >
         <Box w='98%'  textAlign='left'>
          <Heading fontSize={{base:"20px",md:"25px",lg:'30px'}}>
           <Heading fontSize={{base:"20px",md:"25px",lg:'30px'}} as='span' color='red.500'> Elvate</Heading> Your Career Possibilities
          </Heading>
          <Text fontWeight='md' fontSize='23px'mt='20px'>It dosen't matter where you come from we know how to get you to your dream career</Text>
          <Text fontStyle='20px' mt='20px'>Our graduates consistently outperform students from top Indian engineering colleges & universities. 70% of companies who have hired 1 masai graduate come back to us with their hiring mandates</Text>
          <Box m={{base:'10px',md:"10px",lg:'15px'}}  textAlign={{base:"center",md:"center",lg:'left'}}> 
          <Button bgColor='red.500' color='white' > 
            Appy Now
          </Button>
          </Box>
         </Box>
         <Box borderRadius='2xl' overflow='hidden' height={{base:"7cm",md:"8cm",lg:"9cm"}} border='1px solid black'>
         <iframe width="100%"   margin='0px auto' height="100%" src="https://www.youtube.com/embed/Ji0ICdxTdqc" title="No Matter Your Background, Get Your Dream Career | Skilled By Masai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </Box>
        </SimpleGrid>
    </div>
  )
}

export default Second