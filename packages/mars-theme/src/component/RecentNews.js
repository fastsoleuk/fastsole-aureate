import { Box, Image, Text, Grid, Flex } from "@chakra-ui/react";
import { connect } from "frontity";
import React, { useState, useEffect } from "react";
import Link from "@frontity/components/link";
import { FaArrowDown, FaChevronRight } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const RecentNews = ({ state, libraries, actions }) => {

  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    fetchData();
  }, [dataLoaded]); //update by santosh

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
  return (
    <>
      <Grid
        templateColumns={{
          md: "1fr 1fr 1fr",
          sm: "repeat(3, 1fr)",
        }}
        textColor="white"
        gap={8}
        mb="8"
      >
        {recentNews &&
          recentNews.slice(0, 3).map((item) => {
            const slug = item.post_name && `/sneaker-news/${item.post_name}`;
            console.log("omgdata", item);
            return (
              item && (
                <Link link={slug}>
                  <Box>
                    <Box>
                      <img
                        id="brand-big-img"
                        width="100%"
                        height="100%"
                        objectFit="contain"
                        src={item.featured_image.medium}
                        mb="2"
                      />

                      <Box>
                        <Text as="span" color="#7887A5" fontSize="sm">
                          {item.post_date_gmt}
                        </Text>

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
                        <Box w="max-content">
                          <Text pb="6" color="red">
                            Read more
                            <Icon
                              as={FaChevronRight}
                              boxSize="2"
                              color={"red"}
                            />
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              )
            );
          })}
      </Grid>
    </>
  );
};

export default connect(RecentNews);
