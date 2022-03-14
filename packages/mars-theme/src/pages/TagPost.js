import {
  Box,
  Stack,
  Text,
  Grid,
  Circle,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { connect } from "frontity";
import React, { useEffect, useState } from "react";
import ImageViewFeatured from "../Utils/ImageViewFeatured";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import {
  FaAngleDoubleLeft,
  FaChevronRight,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaCheckCircle,
  FaChevronDown,
  FaCircle,
  FaSlidersH,
  FaUndo,
  FaClock,
} from "react-icons/fa";

const TagPost = ({ state, libraries, actions }) => {
  // const { slug } = params;
  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const [currentPage, setCurrentPage] = useState(1);
  // []
  {
    data && console.log("datacheck", data.path);
  }

  // useEffect(() => {
  //   fetchTagId();
  // }, [goToPreviousPage, goToNextPage]);
  //

  const nextSlug = `/sneaker-news/tag/${data.path}/page/${currentPage + 1}/`;
  const previousSlug = `/sneaker-news/tag/${data.path}/page/${
    currentPage - 1
  }/`;
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
    // actions.router.set(`/sneaker-news/tag/${data.path}/page/${page}/`);
  };
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    const slug = data.path;

    // actions.router.set(`/sneaker-news/tag/${slug}/page/${currentPage}/`);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [data.path]);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const tagIdRes = await libraries.source.api.get({
      endpoint: `/wp/v2/tags?search=${data.path}`,
    });

    const tagResult = await tagIdRes.json();
    console.log("calltagapi", tagResult[0]["id"]);

    const response = await libraries.source.api.get({
      endpoint: `/wp/v2/posts?tags=${tagResult[0]["id"]}&per_page=9&page=${currentPage}`,
    });

    const result = await response.json();
    console.log(
      "tagapislug=",
      `/wp/v2/tags?search=${data.path}`,
      `/wp/v2/posts?tags=${tagResult[0]["id"]}&per_page=12&page=${currentPage}`
    );

    // // result.headers["x-wp-totalpages"];

    actions.tagPost.toggleLoading();
    actions.tagPost.updatePostData(result);
    console.log("callapi", state.tagPost.postData);
  };

  // const setSlug = `/sneaker-news/tag/${data.path}/page/${currentPage}/`;

  return !state.tagPost.isLoading ? (
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
        Recent News From {data.path}
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
      >
        {state.tagPost.postData &&
          state.tagPost.postData.map((item) => {
            // const id = items.id;
            // const type = items.type;
            console.log("checkmytag=", item);

            // const item = state.source[type][id];

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
              )
            );
          })}
      </Grid>
      <Box display={"flex"} justifyContent="center" mt={5} pt={3}>
        {currentPage > 1 ? (
          <span>
            <Link link={previousSlug}>
              <Circle
                p="2"
                border="1px solid #9DA7BE"
                _hover={{ bg: "#3E485D !important" }}
                onClick={currentPage <= 1 ? "null" : goToPreviousPage}
              >
                <FaChevronLeft color="#9DA7BE" boxSize="2" />
              </Circle>
            </Link>
          </span>
        ) : (
          <span>
            <Circle
              p="2"
              border="1px solid #9DA7BE"
              _hover={{ bg: "#3E485D !important" }}
            >
              <FaChevronLeft color="#9DA7BE" boxSize="2" />
            </Circle>
          </span>
        )}
        {
          /* show page numbers */
          console.log("current page new:", currentPage)
        }

        <span>
          <Link link={nextSlug}>
            <Circle
              p="2"
              border="1px solid #9DA7BE"
              _hover={{ bg: "#3E485D !important" }}
              ml={2}
              onClick={currentPage < 1 ? "null" : goToNextPage}
            >
              <FaChevronRight color="#9DA7BE" boxSize="2" />
            </Circle>
          </Link>
        </span>
      </Box>
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

export default connect(TagPost);
