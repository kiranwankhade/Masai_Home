import { Box, Button, Card, CardBody, CardHeader, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Curriculum = () => {
    return (
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div>
                <Heading>
                    <Heading> Best-In-Class<span style={{ color: "#ED0331" }}> Curriculum</span>  &<span style={{ color: "#ED0331" }}> Pedagogy</span> </Heading>
                    <HStack margin={'auto'} border={"0px solid black"} width={'15%'}><Image src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg" alt="" /><Image src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg" alt="" /></HStack>
                </Heading>
            </div>

            <Flex justifyContent={'space-between'} gap={10} padding={10}>

                {/* first div of scroller */}
                <Box width={'65%'} maxHeight={'400px'} textAlign={'left'} overflow={'auto'}>
                    {/* 1 */}
                    <Card p={7} m={10}>
                        <CardHeader>
                            <Text fontWeight={700} fontSize={'25px'}>
                                <Text display={'flex'} gap={3}> <img src="https://www.masaischool.com/images/new-homepage/curriculum-style/laptop.svg" alt="" /> 100%  <span style={{ color: "#ED0331" }}> Live </span> Distance Learning</Text>
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text fontWeight={600} fontSize={'15px'}>
                                India’s Only Live Tech-Learning Course With Tier 1 Instructors. Get Real-Time Feedback, Interactive Sessions & A Personalised Learning Experience.
                            </Text>
                        </CardBody>
                    </Card>

                    {/* 2 */}
                    <Card p={7} m={10}>
                        <CardHeader>
                            <Text fontWeight={700} fontSize={'25px'}>
                                <Text display={'flex'} gap={3}>
                                    <img src="https://www.masaischool.com/images/new-homepage/curriculum-style/star.svg" alt="" />
                                    Generative   <span style={{ color: "#ED0331" }}> AI integrated </span> Program</Text>
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text fontWeight={600} fontSize={'15px'}>
                                Harness & implement the power of AI in coding & data analytics. What’s more? Use custom AI tools to enhance placement preparation.
                            </Text>
                        </CardBody>
                    </Card>

                    {/* 3 */}
                    <Card p={7} m={10}>
                        <CardHeader>
                            <Text fontWeight={700} fontSize={'25px'}>
                                <Text display={'flex'} gap={3}>
                                    <img src="https://www.masaischool.com/images/new-homepage/curriculum-style/bulb.svg" alt="" />
                                    <span style={{ color: "#ED0331" }}> Industry Ready </span> Curriculum</Text>
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text fontWeight={600} fontSize={'15px'}>
                                Our curriculum is regularly updated through industry feedback. In-demand specialisations are added to aid our students launch sustainable careers.
                            </Text>
                        </CardBody>
                    </Card>

                    {/* 4 */}
                    <Card p={7} m={10}>
                        <CardHeader>
                            <Text fontWeight={700} fontSize={'25px'}>
                                <Text display={'flex'} gap={3}>
                                    <img src="https://www.masaischool.com/images/new-homepage/curriculum-style/check.svg" alt="" />
                                    Focus On Learning <span style={{ color: "#ED0331" }}>  Agility </span> </Text>
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text fontWeight={600} fontSize={'15px'}>

                                We prioritise flexible thinking & continuous skill development. Stay nimble in an ever-changing world by embracing adaptability, curiosity & rapid learning.
                            </Text>
                        </CardBody>
                    </Card>

                    {/* 5 */}
                    <Card p={7} m={10}>
                        <CardHeader>
                            <Text fontWeight={700} fontSize={'25px'}>
                                <Text display={'flex'} gap={3}>
                                    <img src="https://www.masaischool.com/images/new-homepage/curriculum-style/certificate.svg" alt="" />
                                    Industry Ready In Just <span style={{ color: "#ED0331" }}>25-35 weeks</span></Text>
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Text fontWeight={600} fontSize={'15px'}>Curriculum at Masai is designed to be intensive & extensive. With our unique pedagogy learn right in less time. All we ask is your dedication!
                            </Text>
                        </CardBody>
                    </Card>

                </Box>

                {/* second div of scroller */}
                <Box >
                    <Image src="https://www.masaischool.com/images/new-homepage/curriculum-style/course-image1.webp" borderRadius={'10px'} />
                </Box>
            </Flex>


            <div style={{ margin: "20px" }}>
                <Button bg='#ED0331' color={'white'} p={6}>GET YOUR DREAM JOB</Button>
            </div>

        </div>
    )
}

export default Curriculum