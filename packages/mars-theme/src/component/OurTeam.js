import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Grid,
    Box,
} from '@chakra-ui/react';
import { Image } from "@chakra-ui/image";

export default function OurTeam() {
    return (
        <>

            <Grid templateColumns={{ md: "1fr 1fr 1fr", sm: "repeat(3, 1fr)" }} textColor="white" gap={2}>
                <Box   >

                    <Flex
                        w={'full'}
                        h={'350px'}
                        backgroundImage={
                            'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                        }
                        backgroundSize={'cover'}
                        backgroundPosition={'center center'}>
                        <VStack
                            w={'full'}
                            justify={'center'}
                            p={useBreakpointValue({ base: 4, md: 8 })}
                            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                            <Stack align={'flex-start'} spacing={6}>

                                <Flex justifyContent="space-around">
                                    <Box id="hoverhide"
                                        boxShadow="md"
                                        rounded="sm"
                                        bg="white"
                                        mt="400px"
                                        // top={"10"}
                                        // position="absolute"
                                        px={{ base: "20", md: "6", lg: "12" }}
                                        py={{ base: "4", md: "2", lg: "4" }}
                                    >
                                        <Text
                                            as="h3"
                                            textAlign="center"
                                            fontWeight="bold"
                                            fontSize={{ base: "md", md: "md", lg: "md" }}
                                            color="#3E485D"
                                        >
                                            Saurav Roy
                                        </Text>
                                        <Text as="h4" textAlign="center" fontSize="xs" color="#666666">
                                            Co-founder
                                        </Text>
                                    </Box>
                                </Flex>

                                <Flex justifyContent="space-around">
                                    <Box
                                        display={"none"}
                                        color={'black'}
                                        p="4"
                                        fontWeight={700}
                                        lineHeight={1.2}
                                        boxShadow="md"
                                        rounded="sm"
                                        bg="white" id="hovershow"
                                    >
                                        <Text
                                            textAlign="center"
                                            fontWeight="bold"
                                            fontSize={{ base: "lg", md: "lg", lg: "xl" }}
                                            color="#3E485D"
                                        >
                                            Saurav Roy
                                        </Text>
                                        <Text textAlign="center" fontSize="sm" color="#666666">
                                            Co-founder
                                        </Text>
                                        <Text textAlign="center" fontSize="sm" py="2" lineHeight={"normal"}>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                            do eiusmod tempor
                                        </Text>
                                    </Box>
                                </Flex>

                            </Stack>
                        </VStack>
                    </Flex>

                </Box>


                <Box  >
                    <Box mb="20">
                        <Box>

                            <Image
                                rounded="lg"
                                // border="1px solid lightgrey"
                                objectFit="contain"
                                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/36.png"
                                w="100%"
                                h="100%"
                                rounded="sm"
                            />
                            <Flex justifyContent="space-around">
                                <Box
                                    display="none"
                                    boxShadow="md"
                                    rounded="sm"
                                    bg="white"
                                    marginTop="-10"
                                    position="absolute"
                                    px={{ base: "20", md: "6", lg: "12" }}
                                    py={{ base: "4", md: "2", lg: "4" }}
                                >
                                    <Text
                                        as="h3"
                                        textAlign="center"
                                        fontWeight="bold"
                                        fontSize={{ base: "md", md: "md", lg: "md" }}
                                        color="#3E485D"
                                    >
                                        Saurav Roy
                                    </Text>
                                    <Text as="h4" textAlign="center" fontSize="xs" color="#666666">
                                        Co-founder
                                    </Text>
                                </Box>
                            </Flex>
                            {/* hover content display none kiya hai*/}

                            <Flex justifyContent="space-around">
                                <Box
                                    // display="none"
                                    boxShadow="md"
                                    rounded="sm"
                                    bg="white"

                                    px={{ base: "20", md: "6", lg: "12" }}
                                    py={{ base: "4", md: "2", lg: "4" }}
                                >
                                    <Text
                                        textAlign="center"
                                        fontWeight="bold"
                                        fontSize={{ base: "lg", md: "lg", lg: "xl" }}
                                        color="#3E485D"
                                    >
                                        Saurav Roy
                                    </Text>
                                    <Text textAlign="center" fontSize="sm" color="#666666">
                                        Co-founder
                                    </Text>
                                    <Text textAlign="center" fontSize="sm">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                        do eiusmod tempor
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Box h="10" bg="orange.500">
                    Sidebar Right
                </Box>
            </Grid>


        </>
    );
}