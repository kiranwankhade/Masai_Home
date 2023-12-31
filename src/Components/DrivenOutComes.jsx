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
import React, { useEffect, useState } from "react";

const DrivenOutComes = () => {
  return (
    <Box w={"80%"} margin={"auto"} marginTop={"8%"}>
      <br/>
      <Box>
        <Text fontSize={["25px","38px","38px","35px"]} fontWeight={750} mb={["10px"]}>
          <Text>
            {" "}
            Driven By <span style={{ color: "#ED0331" }}> Outcomes</span>{" "}
            <span> To Launch Your Career In Tech</span>{" "}
          </Text>
          <HStack
            margin={"auto"}
            border={"0px solid black"}
            width={["38%","25%","27%","12%"]}
            mt={["-80px","-5px","-65px","-5px"]}
            marginLeft={["46%","32%","36%","32%"]}
          >
            <Image
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt=""
            />
          </HStack>
        </Text>
        <br />
      </Box>
      <br />
      <Flex w="100%" gap={"50px"} flexDirection={["column","row","row","row"]}>
        <Box marginTop={"20px"} flex={2.2}>
          <Box
            color={"#ED0331"}
            border={"1px solid #f79daf"}
            p={"3%"}
            borderRadius={"15px"}
          >
            <Box
              fontSize={["20px","15px","15px","20px"]}
              display={"flex"}
              flexDirection={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={["5px","5px","20px","5px"]}
              fontWeight={"700"}
            >
              <Box
                style={{
                  display: "flex",
                  color: "black",
                  backgroundColor: "#fedfe5",
                  width: "90px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                1
              </Box>

              <Text marginRight={["50px","50px","2px","50px"]}>
                Career {" "}
                <Text as={"span"}>
                  Launchpad
                  <Image
                    marginLeft={["100px","100px","55px","100px"]}
                    marginTop={["-5px","-5px","-1px","-5px"]}
                    w={["45%","55%","55%","45%"]}
                    src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
                  />
                </Text>
              </Text>
            </Box>
          </Box>

          <Flex align="center"  marginLeft={["25px","25px","20px","30px"]}>
            <Box borderLeft="3px dashed black" height="50px" mx={2} />
          </Flex>

          <Box
            color={"#6c676e"}
            border={"1px solid #e9e8e8"}
            p={"3%"}
            borderRadius={"15px"}
          >
            <Box
              fontSize={["20px","15px","15px","20px"]}
              display={"flex"}
              flexDirection={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={["5px","5px","3px","40px"]}
              fontWeight={"700"}
            >
              <Box
                style={{
                  display: "flex",
                  color: "black",
                  backgroundColor: "#f3f2f2",
                  width: "50px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                2
              </Box>
              <Text w={'100%'} marginRight={["50px","50px","10px","60px"]}>Nurture Ambition</Text>
            </Box>
          </Box>

          <Flex align="center"  marginLeft={["25px","25px","20px","30px"]}>
            <Box borderLeft="3px dashed black" height="50px" mx={2} />
          </Flex>

          <Box
            color={"#6c676e"}
            border={"1px solid #e9e8e8"}
            p={"3%"}
            borderRadius={"15px"}
          >
            <Box
              fontSize={["20px","15px","15px","20px"]}
              display={"flex"}
              flexDirection={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={["40px","40px","2px","20px"]}
              fontWeight={"700"}
            >
              <Box
                style={{
                  display: "flex",
                  color: "black",
                  backgroundColor: "#f3f2f2",
                  width: "50px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                3
              </Box>

              <Text w={'100%'} marginRight={["50px","50px","10px","110px"]}>Practice Based</Text>
            </Box>
          </Box>

          <Flex align="center"  marginLeft={["25px","25px","20px","30px"]}>
            <Box borderLeft="3px dashed black" height="50px" mx={2} />
          </Flex>

          <Box
            color={"#6c676e"}
            border={"1px solid #e9e8e8"}
            p={"3%"}
            borderRadius={"15px"}
          >
            <Box
              fontSize={["20px","15px","15px","20px"]}
              display={"flex"}
              flexDirection={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={["40px","40px","2px","20px"]}
              fontWeight={"700"}
            >
              <Box
                style={{
                  display: "flex",
                  color: "black",
                  backgroundColor: "#f3f2f2",
                  width: "50px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                4
              </Box>

              <Text w={'100%'} marginRight={["50px","50px","1px","70px"]}>Industry Readiness</Text>
            </Box>
          </Box>

          <Flex align="center" marginLeft={["25px","25px","20px","25px"]}>
            <Box borderLeft="3px dashed black" height="50px" mx={2} />
          </Flex>

          <Box
            color={"#6c676e"}
            border={"1px solid #e9e8e8"}
            p={"3%"}
            borderRadius={"15px"}
          >
            <Box
              fontSize={["20px","15px","15px","20px"]}
              display={"flex"}
              flexDirection={"row"}
              justifyContent="center"
              alignItems={"center"}
              gap={["40px","40px","1px","25px"]}
              fontWeight={"700"}
            >
              <Box
                style={{
                  display: "flex",
                  color: "black",
                  backgroundColor: "#f3f2f2",
                  width: "50px",
                  height: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                5
              </Box>

              <Text w={'100%'} marginRight={["50px","50px","1px","40px"]}>Holistic Development</Text>
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={"20px"}
          flex={5}
          borderRadius={"10px"}
          bgColor={"#f7f7ff"}
          padding={"15px"}
        >
          <Heading color={"#686365"} p={"5px"} fontSize={["25px","25px","20px","25px"]}>
            Launch a sustainable career
          </Heading>
          <br />
          <Flex
            flexDirection={["column","column","column","row"]}
            p={"5px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"50px"}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <video
                width="100%"
                height="100%"
                controls
                poster="https://i.ytimg.com/vi/0867JeIfyLY/mqdefault.jpg"
              >
                <source
                  src="https://www.youtube.com/watch?v=0867JeIfyLY&t=7s"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <Flex
              w={"100%"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              gap={"15px"}
            >
              <Flex
                w={"100%"}
                fontWeight={"700"}
                fontSize={"25px"}
                padding={"2%"}
                bgColor={"#1a9fbd"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                gap={"10px"}
                borderRadius={"10px"}
              >
                <Text color={"#ffdb66"}>₹6.9 LPA</Text>
                <Text color={"white"}>
                  Average <br />
                  CTC
                </Text>
              </Flex>

              <Flex
                w={"100%"}
                fontWeight={"700"}
                fontSize={"25px"}
                padding={"2%"}
                bgColor={"#1a9fbd"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                gap={"10px"}
                borderRadius={"10px"}
              >
                <Text color={"#ffdb66"}>3500+</Text>
                <Text color={"white"}>
                  Careers <br />
                  Launched
                </Text>
              </Flex>

              <Flex
                w={"100%"}
                fontWeight={"700"}
                fontSize={"25px"}
                padding={"2%"}
                bgColor={"#1a9fbd"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                gap={"10px"}
                borderRadius={"10px"}
              >
                <Text color={"#ffdb66"}>4000+</Text>
                <Text color={"white"}>
                  Hiring <br />
                  Partners
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <br />
          <br />
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Box bgColor={"white"} borderRadius={"10px"}>
              <Image src="https://www.masaischool.com/images/new-homepage/outcome/dream11.png" />
            </Box>

            <Box bgColor={"white"} borderRadius={"10px"}>
              <Image src="https://www.masaischool.com/images/new-homepage/outcome/global-logic.png" />
            </Box>

            <Box bgColor={"white"} borderRadius={"10px"}>
              <Image src="https://www.masaischool.com/images/new-homepage/outcome/uber.png" />
            </Box>

            <Box bgColor={"white"} borderRadius={"10px"}>
              <Image src="https://www.masaischool.com/images/new-homepage/outcome/paytm.png" />
            </Box>

            <Box bgColor={"white"} borderRadius={"10px"}>
              <Image src="https://www.masaischool.com/images/new-homepage/outcome/coin-switch.png" />
            </Box>

            <Box bgColor={"white"} borderRadius={"10px"}>
              <Image src="https://www.masaischool.com/images/new-homepage/outcome/share-chat.png" />
            </Box>

            <Box bgColor={"white"} borderRadius={"10px"}>
              <Image src="https://www.masaischool.com/images/new-homepage/outcome/ola.png" />
            </Box>

            <Box bgColor={"white"} borderRadius={"10px"}>
              <Image src="https://www.masaischool.com/images/new-homepage/outcome/jp-morgan.png" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default DrivenOutComes;
