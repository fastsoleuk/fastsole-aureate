// import { Box, Grid, Text } from "@chakra-ui/layout";
// import { connect } from "frontity";
// import React from "react";
// import FirstGrid from "../pages/Category";
import { Image } from "@chakra-ui/image";
import { Box, Grid, Heading, Stack, Text, Circle } from "@chakra-ui/layout";
import { connect } from "frontity";
import React, { useEffect, useState } from "react";
import { Icon, Spinner, Center } from "@chakra-ui/react";
// import { ChevronRightIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import ImageViewFeatured from "../Utils/ImageViewFeatured";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import {
  FaArrowDown,
  FaChevronDown,
  FaAngleDoubleLeft,
  FaChevronLeft,
  FaAngleDoubleRight,
  ChevronRightIcon,
  ArrowForwardIcon,
  FaHeart,
  FaAngleRight,
  FaDotCircle,
  FaChevronRight,
  FaTimesCircle,
} from "react-icons/fa";

const TagArchivePost = ({ state, libraries, actions }) => {
  const Html2React = libraries.html2react.Component;
  const categoryId = state.source.get(state.router.link).id;
  const data = state.source.get(state.router.link).items;
  const categoryName = state.source.category[categoryId].name;
  const path = state.source.get(state.router.link);

  console.log("getDataFrom", path.link);
  var totaPages = path.totalPages;
  var currentPageClick = path.page;

  var dataLimit = 10;
  var pageLimit = 3;
  const [dataLength, setDataLength] = useState({ min: 0, max: 12 });
  const [pages] = useState(totaPages);

  const [currentPage, setCurrentPage] = useState(currentPageClick);
  useEffect(() => {
    getPaginationGroup();
  }, [currentPage]);

  const doubleRight = () => {
    setCurrentPage(pages);
    actions.router.set(`${path.route}page/${pages}`);
  };
  const doubleLeft = () => {
    setCurrentPage(1);
    actions.router.set(path.route);
  };

  const goToNextPage = () => {
    setCurrentPage((page) => currentPageClick + 1);
    actions.router.set(`${path.route}page/${currentPageClick + 1}`);
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => currentPageClick - 1);
    actions.router.set(`${path.route}page/${currentPageClick - 1}`);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);

    if (pageNumber === 1) {
      actions.router.set(path.route);
    } else {
      actions.router.set(`${path.route}page/${pageNumber}`);
    }
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return data != null && data !== undefined ? (
    <Stack
      mx={{ base: "6", md: "20", lg: "40" }}
      mt={{ base: "30px", md: "none" }}
      mb="30px !important"
    >
      <Text
        fontSize={{ base: "lg", md: "lg", lg: "lg" }}
        fontWeight="bold"
        fontStyle="normal"
        fontFamily="Martel"
        color={"#3E485D"}
        noOfLines={2}
        my="2"
        // lineHeight="normal"
      >
        Recent News From {categoryName}
      </Text>
      <Grid
        my={5}
        templateColumns={{
          md: "1fr 1fr 1fr",
          sm: "repeat(3, 1fr)",
        }}
        textColor="white"
        gap={8}
        mb="12"
        //   justifyContent="center"
        //   templateColumns={
        //     data.length < 2
        //       ? { md: "0.6fr ", sm: "repeat(2, 1fr)" }
        //       : data.length < 3
        //       ? { md: "0.8fr 0.8fr ", sm: "repeat( 1fr)" }
        //       : {
        //           md: "1fr 1fr 1fr 1fr",
        //           sm: "repeat(4, 1fr)",
        //         }
        //     //  { md: "3fr 3fr 3fr", sm: "repeat(3, 1fr)" }
        //   }
        //   pt={4}
        //   textColor="white"
        //   gap={5}
        //   px={10}
      >
        {data &&
          data.slice(0, 9).map(({ type, id }) => {
            const item = state.source[type][id];
            const author = item && state.source.author[item.author];
            //   return (
            //     <Text color="black">ok{type}</Text>
            //     // <FirstGrid
            //     //   id={id}
            //     //   type={type}
            //     //   state={state}
            //     //   Html2React={Html2React}
            //     // />
            //   );
            console.log("checkitem", item);
            return (
              item && (
                <Link link={item.link}>
                  <Box>
                    <Box>
                      <ImageViewFeatured id={item.featured_media} />

                      <Box mt="2">
                        <Text as="span" color="#7887A5" fontSize="sm">
                          {dayjs(item.date).format("DD MMMM YYYY")}
                        </Text>
                        <Text
                          fontSize={{ base: "lg", md: "md", lg: "lg" }}
                          fontWeight="bold"
                          fontStyle="normal"
                          fontFamily="Martel"
                          color={"#3E485D"}
                          noOfLines={2}
                          mt="2"
                          // lineHeight="normal"
                        >
                          {<Html2React html={item.title.rendered} />}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Link>
                //   <Box pb={2} bg="white">
                //     <Link link={item.link}>
                //       <Box flexShrink={0} mb={2}>
                //         {/* <Image
                //                   w="100%"
                //                   src="https://bit.ly/2jYM25F"
                //                   alt="Woman paying for a purchase"
                //                 /> */}

                //         <motion.div
                //           whileHover={{ scale: 1.1 }}
                //           whileTap={{ scale: 0.9 }}
                //         >
                //           <ImageViewFeatured id={item.featured_media} />
                //         </motion.div>
                //       </Box>
                //     </Link>
                //     <Box>
                //       {/* <Text mt={2} color="gray.400" fontSize="md">
                //               Home Trands
                //             </Text> */}

                //       <Link link={item.link}>
                //         <Text
                //           display="block"
                //           fontSize={{ base: "xl", md: "lg", lg: "2xl" }}
                //           lineHeight="normal"
                //           // fontWeight="semibold"
                //           _focus={{ boxShadow: "none" }}
                //           color="black"
                //           href="#"
                //           fontFamily="serif"
                //         >
                //           {item.title && <Html2React html={item.title.rendered} />}
                //         </Text>
                //       </Link>
                //       {author && (
                //         <Text color="gray.400" fontSize="md">
                //           by {author.name}
                //         </Text>
                //       )}
                //     </Box>
                //   </Box>
              )
            );
          })}
      </Grid>
      {/* pagination start */}

      <Box
        display={{ base: "flex", md: "flex" }}
        justifyContent="center"
        mb={5}
      >
        <span>
          <Circle
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            mr={2}
            onClick={() => doubleLeft()}
          >
            <FaAngleDoubleLeft color="#9DA7BE" boxSize="2" />
          </Circle>
        </span>
        <span>
          <Circle
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            onClick={currentPage === 1 ? "null" : goToPreviousPage}
          >
            <FaChevronLeft color="#9DA7BE" boxSize="2" />
          </Circle>
        </span>
        {
          /* show page numbers */
          console.log("current page new:", currentPageClick)
        }
        {getPaginationGroup().map((item, index) => (
          <Circle
            h="35px"
            w="35px"
            bg={currentPageClick === item ? "#3E485D" : null}
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            color={currentPageClick === item ? "white" : "#9DA7BE"}
            cursor="default"
            ml={2}
            onClick={changePage}
          >
            <span key={index}>{item}</span>
            {/* <Link link={`/sneaker-news/page/${item}`} key={index} > */}
            {/* {item}
                </Link> */}
          </Circle>
        ))}

        <span>
          <Circle
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            ml={2}
            onClick={currentPage === pages ? "null" : goToNextPage}
          >
            <FaChevronRight color="#9DA7BE" boxSize="2" />
          </Circle>
        </span>
        <span>
          <Circle
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            ml={2}
            onClick={() => doubleRight()}
          >
            <FaAngleDoubleRight color="#9DA7BE" boxSize="2" />
          </Circle>
        </span>
      </Box>

      {/* pagination end */}
    </Stack>
  ) : (
    <Center spacing={4} my={20}>
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#718096"
      />
    </Center>
  );
};

export default connect(TagArchivePost);
