import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const DreamJob = () => {

  const dataObjects = [
    {
      id: 1,
      name: "Ramendra Vikram Sign Parihar",
      image:
        "https://www.masaischool.com/images/new-homepage/banner-student-image3.webp",
      description:
        "Going through the 11-11-6 curriculum was a breathtaking experience. Every new unit came with great enthusiasm and a new challenge",
      companyLogo:
        "https://www.masaischool.com/images/new-homepage/company-logo3.svg",
    },
    {
      id: 2,
      name: "Hitesh Tripathi",
      image:
        "https://www.masaischool.com/images/new-homepage/banner-student-image1.webp",
      description:
        "I liked that every thing is taught in a structured manner, and there is no spoon feeding. That helps us learn by ourself when we do.",
      companyLogo:
        "https://www.masaischool.com/images/new-homepage/company-logo1.svg ",
    },
    {
        id: 3,
        name: "Pooja Kumari",
        image:
          "https://www.masaischool.com/images/new-homepage/banner-student-image2.webp",
        description:
          "I developed Communication Skills, People Skills, Mindset, active patience, JAVA, DSA, JavaScript, CSS, and HTML.",
        companyLogo:
          "https://www.masaischool.com/images/new-homepage/company-logo2.svg",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const timer = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % dataObjects.length);
      }, 5000); 

      return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentItem = dataObjects[currentIndex];

  return (
    <Box w={"100%"} mt={"70px"}>
      <Image
        width={"100%"}
        src="https://masai-website-images.s3.ap-south-1.amazonaws.com/desktop_3.webp"
      />
      <br />
      <br />

      <Flex
        w={"85%"}
        margin={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"150px"}
        // textAlign={"justify"}
      >
        <Box w={"100%"} textAlign={"justify"}>
          <Box
            color={"black"}
            fontSize={["20px", "20px", "20px", "35px"]}
            fontWeight={"800"}
            lineHeight={"43px"}
            textAlign={"justify"}
          >
            <h1>Realise Your Potential</h1>

            <Box display={"inline"}>
              With
              <Text as={"span"} color={"#ed0331"} marginLeft={"10px"}>
                Assured Outcomes
                <Image
                  marginLeft={"105px"}
                  marginTop={"-7px"}
                  w={"50%"}
                  src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
                />
              </Text>
            </Box>
            <h1
              style={{
                marginTop: "-8px",
              }}
            >
              Delivered.
            </h1>
          </Box>
          <br />
          <Text
            fontSize={"18px"}
            w={"80%"}
            textAlign={"justify"}
            fontWeight={400}
          >
            India’s only outcome-based career institute. Enter the tech
            workforce industry-ready.
          </Text>
          <br />
          <Button color={"white"} bg={"#ed0331"}>
            GET YOUR DREAM JOB
          </Button>
        </Box>

        <Box w={"100%"}>


        <Box position="relative" w="500px" h="450px">
                <Box
                position="absolute"
                w="400px"
                h="500px"
                border="1px solid #6793ea"
                transform="rotate(-8deg)"
                zIndex="1"
                borderRadius={"15px"}
                />
                <Box
                position="absolute"
                w="400px"
                h="500px"
                zIndex="2"
                borderRadius={"15px"}
                backgroundColor="#d6e2fa"
                >
                <Image
                    src={currentItem.image}
                    objectFit="contain"
                    w="90%"
                    h="75%"
                    margin={"auto"}
                    mt="125px"
                />
                </Box>
    
                <Box
                position="relative"
                display="inline-block"
                w="350px"
                marginTop={"270px"}
                marginLeft={"-110%"}
                zIndex={5}
                textColor={"black"}
                backgroundColor="rgba(255, 255, 255, 0.6)"
                borderRadius={"15px"}
                textAlign={"justify"}
                >
                <Text fontSize={"13px"}  padding='2%' display="inline-block">
                    <span
                    style={{
                        marginLeft: "20px",
                    }}
                    >
                    <Image
                        position={"absolute"}
                        src="https://www.masaischool.com/images/new-homepage/quote-start.svg"
                    />
                    </span>
                   
                    {currentItem.description}
                    <span
                    style={{
                        marginRight: "20px",
                    }}
                    >
                    <Image
                        position={"absolute"}
                        src="https://www.masaischool.com/images/new-homepage/quote-end.svg"
                    />
                    </span>
                </Text>
    
                <br />
                <br />
                <br />
                <br />
                <Box padding={'2%'}>
                    <Text as={"h3"} fontSize={"13px"} textAlign={"justify"} >
                    {currentItem.name}
                    </Text>
    
                    <Image
                    src={currentItem.companyLogo}
                    w={"100px"}
                    mt={"10px"}
                    />
                </Box>
                </Box>
            </Box>

        
        </Box>
      </Flex>
    </Box>
  );
};

export default DreamJob;
