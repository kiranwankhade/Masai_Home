import { Avatar, Box, Button, Heading, Icon, Image, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "./data";
import Second from "./Second";
import Certificate from "./Certification";
import News from "./News";
import {ArrowForwardIcon,ArrowBackIcon} from '@chakra-ui/icons'

const Impact = () => {
    const slideRef = useRef(null)
  
  const settings = {
    infinite: false,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const moveRight=()=>{
    if (slideRef.current) {
        slideRef.current.slickNext();
      }
  }
  const moveLeft=()=>{
    if (slideRef.current) {
        slideRef.current.slickPrev();
      }
  }
  return (
    <div>
      <Box w="full">
        <Heading>
          Our Students Are{" "}
          <Heading as="span" color="red.500">
            Creating Impact
          </Heading>
        </Heading>
        <Box
          display="flex"
          w="80%"
          margin="auto"
          justifyContent="space-between"
          mt="1cm"
        >
          <Box rounded="md" overflow="hidden" w='50%'>
            <iframe
              width="606"
              height="342"
              src="https://www.youtube.com/embed/tSlit0vgB20"
              title='"Masai Is Building A Great Solution" - Ankush Sachdeva, CEO - ShareChat'
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Box>
          <Box  w="50%">
            <Slider {...settings} ref={slideRef}>
              {reviews.map((e, index) => (
                <Box
                  key={index}
                  border="1px solid gray"
                  height="7cm"
                  borderRadius="2xl"
                  p="10px"
                 
                >
                  <Box marginRight="0px">
                    <Image src="https://www.masaischool.com/images/linkedin.svg"></Image>
                  </Box>
                  <Box mt='10px'>
                    <Text textAlign="left">{e.review}</Text>
                  </Box>
                  <Box display="flex">
                    <Box mt="10px">
                      <Avatar size="sm" src={e.image}></Avatar>
                    </Box>
                    <Box ml="10px" mt="10px">
                      <Text fontWeight="bold" textAlign="left">
                        {e.name}
                      </Text>
                      <Text textAlign="left">{e.position}</Text>
                    </Box>
                  </Box>
                  <Box m='10px 0px 0px 10px' h='50px' w='50px' >
                  <Image src={e.company_logo} objectFit='contain'></Image>
                  </Box>
                </Box>
              ))}
            </Slider>
            <Box float='right' display='flex' mt='10px' p='10px'>
            <ArrowBackIcon onClick={moveLeft}></ArrowBackIcon>
            <ArrowForwardIcon ml='20px' onClick={moveRight} ></ArrowForwardIcon>
            </Box>
          </Box>
        </Box>
      </Box>
      <Second/>
      <Certificate/>
      <News/>
    </div>
  );
};

export default Impact;
