import {
    Box,
    Container,
    Stack,
    Button,
    SimpleGrid,
    Text,
    Image,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram, FaTelegram } from 'react-icons/fa';

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return (
        <Box
            mt={'100px'}
            bg={'black'}
            color={'white'}>

{/* 1 */}
            <Box borderBottomWidth={1}
                borderColor="grey"
                borderBottomColor={'grey'}
                borderStyle={'solid'}
                color={'grey'}
                m={2}
                p={5}
            >
                <Container as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{base:"column",sm:"column", md: 'row' }}
                    spacing={4}
                    justify={{ md: 'center' }}
                    align={{ md: 'center' }}>
                <Image src="https://www.masaischool.com/images/footer/arrow-gif.gif" display={{base:"none",sm:"none",md:"block",lg:"block"}} align={'center'} width={'70px'} />
                    <span style={{color:"goldenrod",fontWeight:"700"}}>Join the Program</span>
                <Button bg={'#ED0331'} color="white">
                    Get Your Dream Job
                </Button>
                </Container>

            </Box>

{/* 2 */}
            <Box
                borderBottomWidth={1}
                borderColor="grey"
                borderBottomColor={'grey'}
                borderStyle={'solid'}
                color={'grey'}
                m={2}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Image src="https://www.masaischool.com/images/footer/masai-logo-dark.svg" width={{base:"30%",sm:"350%",md:"12%",lg:"11%"}} />
                    <Stack direction={'row'} spacing={6}>
                    <Text color={'grey'}>Follow us -</Text>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
{/* 3 */}
            <Box m={2}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={1}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                        <Stack direction={{base:"column",sm:"column", md: 'row' }} spacing={{base:2,md:6,lg:6}} >
                        <Button borderRadius={'20px'}>Full Stack Web Development - Full Time</Button>
                        <Button borderRadius={'20px'}>Data Analytics - Full Time</Button>
                    </Stack>
                </Container>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={1}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Stack direction={{base:"column",sm:"column", md: 'row' }} spacing={{base:2,md:6,lg:6}} >
                        <Button borderRadius={'25px'}>Mobile Development - Full Time</Button>
                        <Button borderRadius={'25px'}>Backend Development - Full Time</Button>
                    </Stack>
                </Container>
            </Box>
{/* 4 */}
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader></ListHeader>
                        <Box as="a" href={'#'}>
                            Our Team
                        </Box>
                        <Box as="a" href={'#'}>
                            Success Stories
                        </Box>
                        <Box as="a" href={'#'}>
                            Masai Blog
                        </Box>
                        <Box as="a" href={'#'}>
                            Careers
                        </Box>
                        <Box as="a" href={'#'}>
                            Talent Circle
                        </Box>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader></ListHeader>
                        <Box as="a" href={'#'}>
                            Hire From Us
                        </Box>
                        <Box as="a" href={'#'}>
                            Our Investors
                        </Box>
                        <Box as="a" href={'#'}>
                            Newsrooms
                        </Box>
                        <Box as="a" href={'#'}>
                            Contact Us
                        </Box>
                        <Box as="a" href={'#'}>
                            Become Coach
                        </Box>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader></ListHeader>
                        <Box as="a" href={'#'}>
                            About Us
                        </Box>
                        <Box as="a" href={'#'}>
                            FAQ
                        </Box>
                        <Box as="a" href={'#'}>
                            Referral Programs
                        </Box>
                        <Box as="a" href={'#'}>
                            Masai Learn
                        </Box>
                        <Box as="a" href={'#'}>
                            Industy Mentors
                        </Box>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Connecting with a growing communnity of learners</ListHeader>
                        <a>
                            <Button colorScheme="blue" ml={10} pl={5} pr={5}>
                                <FaTelegram />  <span style={{ paddingLeft: "10x" }}> Join Our Telegram</span>
                            </Button>
                        </a>
                    </Stack>
                </SimpleGrid>
            </Container>
{/* 5 */}
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                p={"5px"}
                m={2}
                color={'grey'}
                borderColor="grey"
            >
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}>
                    <Text>© 2023 by Masai School | A Nolan Edutech Pvt Ltd Venture</Text>
                    <Box as="a">Privacy Policy & Terms and Conditions</Box>
                </Container>
            </Box>
        </Box>
        
    )
}