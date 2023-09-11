import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const DrivenOutComes = () => {
  return (
    <Box w={"80%"} margin={"auto"} marginTop={"10%"}>
      <div>
        <Text fontSize={"30px"} fontWeight={700}>
          <Text>
            {" "}
            Driven By <span style={{ color: "#ED0331" }}> Outcomes</span>{" "}
            <span> To Launch Your Career In Tech</span>{" "}
          </Text>
          <HStack
            margin={"auto"}
            border={"0px solid black"}
            width={"14%"}
            mt={"-5px"}
            marginLeft={"30%"}
          >
            <Image
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt=""
            />
          </HStack>
        </Text>
      </div>
      <Flex w="80%">
        <Box>
          <Button>
            <Text>
              <span>1</span> Career Launchpad{" "}
            </Text>
          </Button>

          <Flex align="center" marginLeft={'12px'}>
            <Box borderLeft="2px dashed black" height="50px" mx={2} />
          </Flex>

          <Button>
            <Text>
              <span>1</span> Career Launchpad{" "}
            </Text>
          </Button>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default DrivenOutComes;
