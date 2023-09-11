import { Card, Heading, Image } from '@chakra-ui/react'
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HiringPartners = () => {

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

    const images = ['https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_23a9923a34.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_15b5ee2b82.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/eatfit_9dc276a187.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/homelane_e9cadd0c3c.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/leapfinance_0d785d05eb.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_23a9923a34.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_15b5ee2b82.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/eatfit_9dc276a187.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/homelane_e9cadd0c3c.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/leapfinance_0d785d05eb.svg',
        'https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg'
    ]
    return (
        <div  style={{marginTop:"30px",marginBottom:"30px"}}>
            <div>
                <Heading>
                    <Heading>Meet Our <span style={{color:"#ED0331"}}> 4000+</span> Hiring Partners</Heading>
                    <Heading margin={'auto'} border={"0px solid black"} width={'18%'}><Image src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg" alt="" /></Heading>
                </Heading>
            </div>
            <div>

                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    // partialVisible={true}
                    responsive={responsive}
                    autoPlay={true}
                    arrows={false}
                    infinite={true}
                    autoPlaySpeed={700}
                    centerMode={true}
                    keyBoardControl={true}
                    customTransition="all 0.5s"
                    transitionDuration={100}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {images.map((e, i) => {
                        return < Card align={'center'} borderRadius={"15px"} m={'20px'} padding={0} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
                            <Image src={e} alt={i} width={'50%'} />
                        </Card>
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default HiringPartners