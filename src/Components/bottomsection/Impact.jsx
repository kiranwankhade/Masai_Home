import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "./data";
import Second from "./Second";
import Certificate from "./Certification";
import News from "./News";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

const Impact = () => {
  const slideRef = useRef(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive:[
    {
      breakpoint: 760,
      settings:{
      slidesToShow:2
      }
    },
    {
      breakpoint: 450,
      settings:{
      slidesToShow:1,
      centerMode:true,
      }
    }
    ]
  };
  const moveRight = () => {
    if (slideRef.current) {
      slideRef.current.slickNext();
    }
  };
  const moveLeft = () => {
    if (slideRef.current) {
      slideRef.current.slickPrev();
    }
  };
  return (
    <div>
      <Box w="full">
        <Heading fontSize={{base:"20px",md:"25px",lg:'30px'}}>
          <Heading fontSize={{base:"20px",md:"25px",lg:'30px'}}>
            {" "}
            Our Students are
            <span style={{ color: "#ED0331" }}> Creating Impact</span>
          </Heading>
          <HStack margin={"auto"} border={"0px solid black"} width={"20%"}>
            <Image
              src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
              alt=""
            />
          </HStack>
        </Heading>
        <SimpleGrid
          columns={[1, 1, 2]}
          w="80%"
          margin="auto"
          justifyContent="space-between"
          mt="1cm"
      
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "95%" }}
            rounded="md"
            overflow="hidden"
         
            mx="auto" // Center the box horizontally
            height={{base:"7cm",md:'8cm',lg:'9cm'}}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tSlit0vgB20"
              title='"Masai Is Building A Great Solution" - Ankush Sachdeva, CEO - ShareChat'
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Box>
          <Box w="100%" >
            <Slider {...settings} ref={slideRef}>
              {reviews.map((e, index) => (
                <Box
                  key={index}
                  border="1px solid gray"
                  height={{base:"6cm",md:'6cm',lg:"7cm"}}
                  borderRadius="2xl"
                  p={{base:"5px",md:"5px",lg:"10px"}}
                  m='10px'
                >
                  <Box marginRight="0px">
                    <Image src="https://www.masaischool.com/images/linkedin.svg"></Image>
                  </Box>
                  <Box m={{base:"5px",md:"5px",lg:"10px"}}>
                    <Text textAlign="left">{e.review}</Text>
                  </Box>
                  <Box display="flex">
                    <Box mt={{base:"5px",md:"5px",lg:"10px"}}>
                      <Avatar size="sm" src={e.image}></Avatar>
                    </Box>
                    <Box ml={{base:"5px",md:"5px",lg:"10px"}} mt={{base:"5px",md:"5px",lg:"10px"}}>
                      <Text fontWeight="bold" textAlign="left">
                        {e.name}
                      </Text>
                      <Text textAlign="left">{e.position}</Text>
                    </Box>
                  </Box>
                  <Box m="5px 0px 0px 20px" >
                    <Image src={e.company_logo}h="20px" w="50px" objectFit='contain'></Image>
                  </Box>
                </Box>
              ))}
            </Slider>
            <Box float="right" display="flex" mt="10px" p="10px">
              <ArrowBackIcon onClick={moveLeft}></ArrowBackIcon>
              <ArrowForwardIcon
                ml="20px"
                onClick={moveRight}
              ></ArrowForwardIcon>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Second />
      <Certificate />
      <News />
    </div>
  );
};

export default Impact;
