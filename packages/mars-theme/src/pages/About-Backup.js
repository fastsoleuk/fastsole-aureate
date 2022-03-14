import React, { useState, useEffect } from "react";
import {
    Stack,
    Box,
    Heading,
    Grid,
    Text,
    Flex,
    Button,
    HStack,
    VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Icon } from "@chakra-ui/react";
import { css } from "frontity";
import {
    FaArrowDown,
    FaMapMarkerAlt,
    FaVoicemail,
    FaPhone,
    FaPhoneAlt,
    FaAngleRight,
    FaChevronRight,
} from "react-icons/fa";
import Link from "@frontity/components/link";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Circle,
} from "@chakra-ui/react";
import Breadcrumb from "../component/Breadcrumb";

import {
    Paginator,
    Container,
    Previous,
    Next,
    PageGroup,
    usePaginator,
} from "chakra-paginator";
import { AddIcon, EmailIcon, MinusIcon } from "@chakra-ui/icons";
import { connect } from "frontity";
const AboutBackup = ({ state, libraries, actions }) => {
    const Html2React = libraries.html2react.Component;
    const stateData = state.router.link;
    const aboutData = state.source.page[2254];
    const authorData = state.source.author;
    console.log("myaboutdata", aboutData.content);
    const pagesQuantity = 10;
    const { currentPage, setCurrentPage } = usePaginator({
        initialState: { currentPage: 1 },
    });

    const [style, setStyle] = useState({ display: "none" });
    const [styletow, setStyleTow] = useState({ display: "block" });

    const path = state.router.link;

    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        fetchData();
    }, [dataLoaded]); //update by Santosh

    const fetchData = async () => {
        const response = await libraries.source.api.get({
            endpoint: `/wl/v1/recent-news/`,
        });
        // console.log("category post", `/wl/v1/sneaker-news/page/${slug}/`);
        const newsPost = await response.json();
        actions.recentNews.toggleLoading();
        actions.recentNews.updatePostData(newsPost);
    };
    const recentNews = state.recentNews.postData;
    // sneakerNewsRecent;
    // console.log("recentnewsabout", sneakerNewsRecent);
    // var recentNews =
    //   sneakerNewsRecent &&
    //   sneakerNewsRecent.sort(function (a, b) {
    //     return a.price - b.price;
    //   });
    return (
        <>
            <Box
                mx={{ base: "6", md: "16", lg: "40" }}
                mt={{ base: "30px", md: "none" }}
                mb="30px !important"
            >
                {/* about */}
                <Stack>
                    {path && <Breadcrumb breadcrumb={path} />}

                    <Box bg="white" textColor="white" gap={6}>
                        <Flex justifyContent="space-around" rounded="15">
                            <Image
                                rounded="md"
                                // boxSize="50px"
                                objectFit="contain"
                                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/34.png"
                                alt={state.frontity.company_name + "About Us"}
                            //   height="md"
                            />
                        </Flex>
                    </Box>
                </Stack>
                {/* about us */}
                <Stack justifyContent="space-around">
                    <Box mt="10">
                        <Heading
                            as="h1"
                            mb={4}
                            fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                            color={"#3E485D"}
                            fontWeight="bold"
                            fontStyle="normal"
                            color={"#3E485D"}
                            lineHeight="normal"
                        >
                            <Html2React html={aboutData.title.rendered} />
                        </Heading>
                        <Text fontSize="sm">
                            {<Html2React html={aboutData.content.rendered} />}
                        </Text>
                    </Box>
                </Stack>
                {/* location and faq section */}
                <Grid
                    templateColumns={{ md: "1fr 1.4fr", sm: "repete(3, 1fr)" }}
                    gap={{ base: "10", md: "10", lg: "16" }}
                    mb="20"
                    mt="20"
                >
                    <Box>
                        <Heading
                            fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                            pb="6"
                            color="#3E485D"
                        >
                            Location
                        </Heading>
                        <Box p="6" bg="#F5F5F5" rounded="md">
                            <Heading
                                fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                                pb="6"
                                color="#3E485D"
                            >
                                Address
                            </Heading>
                            <Flex mb="4">
                                <Icon
                                    as={FaMapMarkerAlt}
                                    boxSize="4"
                                    marginTop={1}
                                    color={"#3E485D"}
                                />
                                <Stack>
                                    <Text
                                        pl="1"
                                        color={"#3E485D"}
                                        fontSize="sm"
                                        fontWeight="bold"
                                    >
                                        Fastsole Private Ltd
                                    </Text>
                                    <Text pl="1" color={"#3E485D"} fontSize="sm">
                                        16 Windermere Court 22 Trinity Trees, Eastbourne United
                                        Kingdom BN21 3LE
                                    </Text>
                                </Stack>
                            </Flex>
                            <Flex mb="4">
                                <Icon
                                    as={EmailIcon}
                                    marginTop={1}
                                    boxSize="4"
                                    color={"#3E485D"}
                                />

                                <Text pl="1" color={"#3E485D"} fontSize="sm">
                                    fastsole@gmail.com
                                </Text>
                            </Flex>
                            <Flex mb="4">
                                <Icon
                                    as={FaPhoneAlt}
                                    boxSize="3"
                                    marginTop={1}
                                    color={"#3E485D"}
                                />
                                <Text pl="1" color={"#3E485D"} fontSize="sm">
                                    +91000098989
                                </Text>
                            </Flex>
                        </Box>

                        <Text color="#3E485D" fontSize="sm" mt="4">
                            * Fastsole Private Ltd is registered in England & Wales with
                            company number 10812528
                        </Text>
                    </Box>
                    <Box>
                        <Heading
                            fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                            pb="6"
                            color="#3E485D"
                        >
                            Faq
                        </Heading>

                        <Accordion allowToggle>
                            <AccordionItem
                                border="1px solid #E2E8F0"
                                rounded="md"
                                borderBottomWidth="inherit !important"
                                mb="4"
                            >
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton
                                                border="none"
                                                _expanded={{ bg: "#e3e3e3", color: "gray" }}
                                            >
                                                <Box
                                                    flex="1"
                                                    textAlign="left"
                                                    color="#3E485D"
                                                    fontSize="sm"
                                                    fontWeight="bold"
                                                >
                                                    What can I expect from FastSole?{" "}
                                                </Box>
                                                {isExpanded ? (
                                                    <Circle
                                                        border="2px solid #3E485D"
                                                        w="30px"
                                                        h="30px"
                                                        bg="#3E485D"
                                                    >
                                                        <MinusIcon boxSize={3} color="#FFFFFF" />
                                                    </Circle>
                                                ) : (
                                                    <Circle
                                                        border="2px solid #3E485D"
                                                        w="30px"
                                                        h="30px"
                                                        bg="#3E485D"
                                                    >
                                                        <AddIcon boxSize={3} color="#FFFFFF" />
                                                    </Circle>
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} color="#666666" fontSize="sm">
                                            You can expect updated confirmed release time, stockists
                                            and direct links to all the upcoming and hot sneaker
                                            releases.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem
                                border="1px solid #E2E8F0"
                                rounded="md"
                                borderBottomWidth="inherit !important"
                                mb="4"
                            >
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton
                                                border="none"
                                                _expanded={{ bg: "#e3e3e3", color: "gray" }}
                                            >
                                                <Box
                                                    flex="1"
                                                    textAlign="left"
                                                    color="#3E485D"
                                                    fontSize="sm"
                                                    fontWeight="bold"
                                                >
                                                    What can I expect from FastSole?{" "}
                                                </Box>
                                                {isExpanded ? (
                                                    <Circle
                                                        border="2px solid #3E485D"
                                                        w="30px"
                                                        h="30px"
                                                        bg="#3E485D"
                                                    >
                                                        <MinusIcon boxSize={3} color="#FFFFFF" />
                                                    </Circle>
                                                ) : (
                                                    <Circle
                                                        border="2px solid #3E485D"
                                                        w="30px"
                                                        h="30px"
                                                        bg="#3E485D"
                                                    >
                                                        <AddIcon boxSize={3} color="#FFFFFF" />
                                                    </Circle>
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} color="#666666" fontSize="sm">
                                            You can expect updated confirmed release time, stockists
                                            and direct links to all the upcoming and hot sneaker
                                            releases.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>

                            <AccordionItem
                                border="1px solid #E2E8F0"
                                rounded="md"
                                borderBottomWidth="inherit !important"
                                mb="4"
                            >
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton
                                                border="none"
                                                _expanded={{ bg: "#e3e3e3", color: "gray" }}
                                            >
                                                <Box
                                                    flex="1"
                                                    textAlign="left"
                                                    color="#3E485D"
                                                    fontSize="sm"
                                                    fontWeight="bold"
                                                >
                                                    What can I expect from FastSole?{" "}
                                                </Box>
                                                {isExpanded ? (
                                                    <Circle
                                                        border="2px solid #3E485D"
                                                        w="30px"
                                                        h="30px"
                                                        bg="#3E485D"
                                                    >
                                                        <MinusIcon boxSize={3} color="#FFFFFF" />
                                                    </Circle>
                                                ) : (
                                                    <Circle
                                                        border="2px solid #3E485D"
                                                        w="30px"
                                                        h="30px"
                                                        bg="#3E485D"
                                                    >
                                                        <AddIcon boxSize={3} color="#FFFFFF" />
                                                    </Circle>
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} color="#666666" fontSize="sm">
                                            You can expect updated confirmed release time, stockists
                                            and direct links to all the upcoming and hot sneaker
                                            releases.
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Grid>
                {/* our tem heading */}
                <Box>
                    <Heading
                        fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                        pb="6"
                        color="#3E485D"
                    >
                        Our Team
                    </Heading>
                </Box>
                {/* profile grid section */}
                <Box mb="10">
                    <Grid
                        templateColumns={{
                            md: "1fr 1fr 1fr",
                            sm: "(3, 1fr 1fr)",
                        }}
                        textColor="white"
                        gap={8}
                    >
                        <Box mb="20">
                            <Box
                                onMouseEnter={(e) => {
                                    setStyle({ display: "block" });
                                    setStyleTow({ display: "none" });
                                }}
                                onMouseLeave={(e) => {
                                    setStyle({ display: "none" });
                                    setStyleTow({ display: "block" });
                                }}
                            >
                                <Image
                                    rounded="lg"
                                    // border="1px solid lightgrey"
                                    objectFit="contain"
                                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/36.png"
                                    w="100%"
                                    h="100%"
                                    rounded="sm"
                                />
                                {/* hover content display none kiya hai*/}

                                <Flex justifyContent="space-around">
                                    <Box
                                        style={style}
                                        // display="none"
                                        height="fit-content"
                                        boxShadow="md"
                                        width="80%"
                                        position="relative"
                                        rounded="sm"
                                        bg="white"
                                        marginTop="-70%"
                                        // position="absolute"
                                        px={{ base: "6", md: "6", lg: "8" }}
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
                                        <Text
                                            textAlign="center"
                                            fontSize="sm"
                                            color="#666666"
                                            noOfLines={3}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                            do eiusmod tempor
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent="space-around">
                                    <Box
                                        style={styletow}
                                        // display="none"
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
                                        <Text
                                            as="h4"
                                            textAlign="center"
                                            fontSize="xs"
                                            color="#666666"
                                        >
                                            Co-founder
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Box mb="20">
                            <Box
                                onMouseEnter={(e) => {
                                    setStyle({ display: "block" });
                                    setStyleTow({ display: "none" });
                                }}
                                onMouseLeave={(e) => {
                                    setStyle({ display: "none" });
                                    setStyleTow({ display: "block" });
                                }}
                            >
                                <Image
                                    rounded="lg"
                                    // border="1px solid lightgrey"
                                    objectFit="contain"
                                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/36.png"
                                    w="100%"
                                    h="100%"
                                    rounded="sm"
                                />
                                {/* hover content display none kiya hai*/}

                                <Flex justifyContent="space-around">
                                    <Box
                                        style={style}
                                        // display="none"
                                        height="fit-content"
                                        boxShadow="md"
                                        width="80%"
                                        position="relative"
                                        rounded="sm"
                                        bg="white"
                                        marginTop="-70%"
                                        // position="absolute"
                                        px={{ base: "6", md: "6", lg: "8" }}
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
                                        <Text
                                            textAlign="center"
                                            fontSize="sm"
                                            color="#666666"
                                            noOfLines={3}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                            do eiusmod tempor
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent="space-around">
                                    <Box
                                        style={styletow}
                                        // display="none"
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
                                        <Text
                                            as="h4"
                                            textAlign="center"
                                            fontSize="xs"
                                            color="#666666"
                                        >
                                            Co-founder
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Box mb="20">
                            <Box
                                onMouseEnter={(e) => {
                                    setStyle({ display: "block" });
                                    setStyleTow({ display: "none" });
                                }}
                                onMouseLeave={(e) => {
                                    setStyle({ display: "none" });
                                    setStyleTow({ display: "block" });
                                }}
                            >
                                <Image
                                    rounded="lg"
                                    // border="1px solid lightgrey"
                                    objectFit="contain"
                                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/36.png"
                                    w="100%"
                                    h="100%"
                                    rounded="sm"
                                />
                                {/* hover content display none kiya hai*/}

                                <Flex justifyContent="space-around">
                                    <Box
                                        style={style}
                                        // display="none"
                                        height="fit-content"
                                        boxShadow="md"
                                        width="80%"
                                        position="relative"
                                        rounded="sm"
                                        bg="white"
                                        marginTop="-70%"
                                        // position="absolute"
                                        px={{ base: "6", md: "6", lg: "8" }}
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
                                        <Text
                                            textAlign="center"
                                            fontSize="sm"
                                            color="#666666"
                                            noOfLines={3}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                            do eiusmod tempor
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent="space-around">
                                    <Box
                                        style={styletow}
                                        // display="none"
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
                                        <Text
                                            as="h4"
                                            textAlign="center"
                                            fontSize="xs"
                                            color="#666666"
                                        >
                                            Co-founder
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Box mb="20">
                            <Box
                                className="suraj"
                                onMouseEnter={(a) => {
                                    setStyle({ display: "block" });
                                    setStyleTow({ display: "none" });
                                }}
                                onMouseLeave={(a) => {
                                    setStyle({ display: "none" });
                                    setStyleTow({ display: "block" });
                                }}
                            >
                                <Image
                                    rounded="lg"
                                    // border="1px solid lightgrey"
                                    objectFit="contain"
                                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/36.png"
                                    w="100%"
                                    h="100%"
                                    rounded="sm"
                                />
                                {/* hover content display none kiya hai*/}

                                <Flex justifyContent="space-around">
                                    <Box
                                        style={style}
                                        // display="none"
                                        height="fit-content"
                                        boxShadow="md"
                                        width="80%"
                                        position="relative"
                                        rounded="sm"
                                        bg="white"
                                        marginTop="-70%"
                                        // position="absolute"
                                        px={{ base: "6", md: "6", lg: "8" }}
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
                                        <Text
                                            textAlign="center"
                                            fontSize="sm"
                                            color="#666666"
                                            noOfLines={3}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                            do eiusmod tempor
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent="space-around">
                                    <Box
                                        style={styletow}
                                        // display="none"
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
                                        <Text
                                            as="h4"
                                            textAlign="center"
                                            fontSize="xs"
                                            color="#666666"
                                        >
                                            Co-founder
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Box mb="20">
                            <Box
                                onMouseEnter={(e) => {
                                    setStyle({ display: "block" });
                                    setStyleTow({ display: "none" });
                                }}
                                onMouseLeave={(e) => {
                                    setStyle({ display: "none" });
                                    setStyleTow({ display: "block" });
                                }}
                            >
                                <Image
                                    rounded="lg"
                                    // border="1px solid lightgrey"
                                    objectFit="contain"
                                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/36.png"
                                    w="100%"
                                    h="100%"
                                    rounded="sm"
                                />
                                {/* hover content display none kiya hai*/}

                                <Flex justifyContent="space-around">
                                    <Box
                                        style={style}
                                        // display="none"
                                        height="fit-content"
                                        boxShadow="md"
                                        width="80%"
                                        position="relative"
                                        rounded="sm"
                                        bg="white"
                                        marginTop="-70%"
                                        // position="absolute"
                                        px={{ base: "6", md: "6", lg: "8" }}
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
                                        <Text
                                            textAlign="center"
                                            fontSize="sm"
                                            color="#666666"
                                            noOfLines={3}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                            do eiusmod tempor
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent="space-around">
                                    <Box
                                        style={styletow}
                                        // display="none"
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
                                        <Text
                                            as="h4"
                                            textAlign="center"
                                            fontSize="xs"
                                            color="#666666"
                                        >
                                            Co-founder
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Box mb="20">
                            <Box
                                onMouseEnter={(e) => {
                                    setStyle({ display: "block" });
                                    setStyleTow({ display: "none" });
                                }}
                                onMouseLeave={(e) => {
                                    setStyle({ display: "none" });
                                    setStyleTow({ display: "block" });
                                }}
                            >
                                <Image
                                    rounded="lg"
                                    // border="1px solid lightgrey"
                                    objectFit="contain"
                                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/36.png"
                                    w="100%"
                                    h="100%"
                                    rounded="sm"
                                />
                                {/* hover content display none kiya hai*/}

                                <Flex justifyContent="space-around">
                                    <Box
                                        style={style}
                                        // display="none"
                                        height="fit-content"
                                        boxShadow="md"
                                        width="80%"
                                        position="relative"
                                        rounded="sm"
                                        bg="white"
                                        marginTop="-70%"
                                        // position="absolute"
                                        px={{ base: "6", md: "6", lg: "8" }}
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
                                        <Text
                                            textAlign="center"
                                            fontSize="sm"
                                            color="#666666"
                                            noOfLines={3}
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                                            do eiusmod tempor
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent="space-around">
                                    <Box
                                        style={styletow}
                                        // display="none"
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
                                        <Text
                                            as="h4"
                                            textAlign="center"
                                            fontSize="xs"
                                            color="#666666"
                                        >
                                            Co-founder
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
                {/* Recent Nike News  */}
                <Box>
                    <Box display="flex" justifyContent="space-between" mb="4">
                        <Heading as="h2" size="md" pb="6" color="#3E485D">
                            Recent Nike News
                        </Heading>
                        {/* <Text
              fontSize={{ base: "xl", md: "lg", lg: "2xl" }}
              fontWeight="bold"
              fontFamily="Martel"
              color="#3E485D"
            >
              Recent Nike News
            </Text> */}
                        {/* view */}{" "}
                        <Box
                            display={{ base: "none", md: "block" }}
                            border="1px solid #525F7A"
                            h="32px"
                            w="95px"
                            rounded="3px"
                            variant="outline"
                            color="#525F7A"
                            colorScheme="#9DA7BE"
                            textAlign="center"
                            py="auto"
                            verticalAlign="sub"
                        // display={{ md: "block", base: "none" }}
                        >
                            {" "}
                            <Link
                                link="/sneaker-news/"
                                css={css`
                  font-size: 14px;
                  vertical-align: middle;
                `}
                                fontWeight="100"
                            >
                                View All
                            </Link>
                        </Box>
                    </Box>
                    <Grid
                        templateColumns={{
                            md: "1fr 1fr 1fr",
                            sm: "repeat(3, 1fr)",
                        }}
                        textColor="white"
                        gap={8}
                        mb="10"
                    >
                        {recentNews &&
                            recentNews.slice(0, 3).map((item) => {
                                return (
                                    item && (
                                        <Box>
                                            <Box>
                                                <Image
                                                    rounded="lg"
                                                    objectFit="contain"
                                                    src={item.featured_image.medium}
                                                    w="100%"
                                                    h="100%"
                                                    rounded="md"
                                                    mb="2"
                                                />

                                                <Box>
                                                    <Text as="span" color="#7887A5" fontSize="sm">
                                                        {item.post_date_gmt}
                                                    </Text>
                                                    <Link>
                                                        {/* <Heading
                      as="h3"
                      fontSize={{ base: "lg", md: "md", lg: "xl" }}
                      fontWeight="bold"
                      fontStyle="normal"
                      color={"#3E485D"}
                      lineHeight="normal"
                      noOfLines={2}
                    > */}
                                                        <Text
                                                            fontSize={{ base: "lg", md: "md", lg: "lg" }}
                                                            fontWeight="bold"
                                                            fontStyle="normal"
                                                            fontFamily="Martel"
                                                            color={"#3E485D"}
                                                            noOfLines={2}
                                                            mt="2"
                                                        >
                                                            {item.post_title}
                                                        </Text>
                                                        {/* </Heading> */}
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                );
                            })}
                    </Grid>
                    {/* view for mobile */}
                    <Stack alignItems="center">
                        <Box
                            display={{ base: "block", md: "none" }}
                            border="1px solid #525F7A"
                            h="32px"
                            w="95px"
                            rounded="3px"
                            variant="outline"
                            color="#525F7A"
                            colorScheme="#9DA7BE"
                            textAlign="center"
                            py="auto"
                            verticalAlign="sub"
                        // display={{ md: "block", base: "none" }}
                        >
                            {" "}
                            <Link
                                link="/"
                                css={css`
                  font-size: 14px;
                  vertical-align: middle;
                `}
                                fontWeight="100"
                            >
                                View All
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
};
export default connect(AboutBackup);
