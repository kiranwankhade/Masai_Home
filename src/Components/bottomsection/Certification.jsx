import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Certificate = () => {
  return (
    <div>
      <SimpleGrid
        w={['95%','95%','80%']} 
        margin="auto"
        columns={[1,1,2]} 
        mt={{base:"10px",md:"15px",lg:'50px'}}
        p="15px"
        bgColor="#F2F6FF"
      >
        <Box w="100%">
          <Image src="https://www.masaischool.com/images/new-homepage/nsdc/nsdc-cert.jpg"></Image>
        </Box>
        <Box w='100%'>
          <Box m={{base:"10px",md:"15px",lg:'25px'}}>
            <Heading fontSize={{base:"20px",md:"25px",lg:'30px'}}>
              <Heading as="span"  fontSize={{base:"20px",md:"25px",lg:'30px'}} color="red.500">
                Certificate{" "}
              </Heading>
              By The N.S.D.C
            </Heading>
            <Text mt='20px' color='gray' textAlign={{base:"center",md:"center",lg:"left"}} fontSize={{base:"16px",md:'18px',lg:'18px'}}>
              NSDC Certification is a prestigious recognition for students who
              have completed accredited skill-based training programs. It
              validates their expertise, demonstrating their dedication to
              practical skills. This certification provides a competitive edge
              in the job market, showcasing proficiency and adherence to
              industry standards. NSDC certifications are widely accepted,
              unlocking rewarding career opportunities and personal growth.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Certificate;
