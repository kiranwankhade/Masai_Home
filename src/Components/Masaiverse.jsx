import { Button, Heading, Image } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Masaiverse = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }
  const images = [
    'https://www.masaischool.com/images/new-homepage/community/community5.webp',
    'https://www.masaischool.com/images/new-homepage/community/community1.webp',
    'https://www.masaischool.com/images/new-homepage/community/community3.webp',
    'https://www.masaischool.com/images/new-homepage/community/community4.webp',
    'https://www.masaischool.com/images/new-homepage/community/community5.webp',
    'https://www.masaischool.com/images/new-homepage/community/community6.webp',
    'https://www.masaischool.com/images/new-homepage/community/community7.webp',
    'https://www.masaischool.com/images/new-homepage/community/community8.webp',
    'https://www.masaischool.com/images/new-homepage/community/community9.webp',
    'https://www.masaischool.com/images/new-homepage/community/community10.webp',

  ]

  return (
    <div style={{ marginTop: "50px",backgroundColor:"rgba(0, 0, 0, 0.04)" ,paddingTop:"50px",paddingBottom:"20px"}}>
      <div>
        <Heading fontWeight={'bold'}>Be A Part of Our Thriving</Heading>
        <Heading>
          <Heading color={'#ED0331'}>Tech Community</Heading>
        <Heading margin={'auto'} border={"0px solid black"} width={'28%'}><Image src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg" alt="" /></Heading>
        </Heading>
      </div>
      <div style={{marginTop:"50px", transform: 'scale(1)'}} >
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        partialVisible={true}
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {images.map((e, i) => {
          return <div style={{ margin: "6px" }}>
            <img src={e} alt={i} />
          </div>
        })}
      </Carousel>
      </div>
      <div style={{ margin: "20px" }}>
        <Button bg='#ED0331' color={'white'} p={6}>JOIN OUR COMMUNITY</Button>
      </div>
    </div>
  )
}

export default Masaiverse;