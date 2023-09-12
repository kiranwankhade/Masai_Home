import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const News = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
  
    responsive:[
      {
        breakpoint: 760,
        settings:{
        slidesToShow:2,
        centerMode:true
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
  return (
    <div>
      <Box w='80%' margin='auto' mt='2cm'>
         <Heading> <Heading as='span' color='red.500'>Masai</Heading> in News</Heading>
         <Box  w='100%' mt={{base:"10px",md:'10px',lg:"20px"}}>
          <Slider {...settings}>
           <Box w='30%' h='7cm'>
            <Image h={{base:"5cm",md:'6cm',lg:"7cm"}} src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg'></Image>
            <Text fontWeight='bold' fontSize='20px' mt='20px'>
                Empowering Education Through Gen AI
            </Text>
           </Box>
           <Box w='32%' h='auto' textAlign='center'>
            <Image  w='full' h={{base:"5cm",md:'6cm',lg:"7cm"}}  src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp'></Image>
            <Text  fontWeight='bold' fontSize={{base:"14px",md:"16px",lg:"18px"}} mt='20px'>
                Empowering Education Through Gen AI
            </Text>
           </Box> 
           <Box w='32%' h='7cm'>
            <Image w='full' h={{base:"5cm",md:'6cm',lg:"7cm"}}  src='https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp'></Image>
            <Text  fontWeight='bold' fontSize={{base:"14px",md:"16px",lg:"18px"}} mt='20px'>
                Empowering Education Through Gen AI
            </Text>
           </Box>
           </Slider>
         </Box>
      </Box>
    </div>
  )
}

export default News