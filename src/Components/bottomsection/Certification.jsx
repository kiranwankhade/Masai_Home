import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Certificate = () => {
  return (
    <div>
      <Box
        w="80%"
        margin="auto"
        display="flex"
        mt="3cm"
        p="15px"
        bgColor="#F2F6FF"
      >
        <Box w="50%">
          <Image src="https://www.masaischool.com/images/new-homepage/nsdc/nsdc-cert.jpg"></Image>
        </Box>
        <Box w='50%'>
          <Box m="30px 30px">
            <Heading>
              <Heading as="span" color="red.500">
                Certificate{" "}
              </Heading>
              By The N.S.D.C
            </Heading>
            <Text mt='20px' textAlign='left' fontSize='18px'>
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
      </Box>
    </div>
  );
};

export default Certificate;
