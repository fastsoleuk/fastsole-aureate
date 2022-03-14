import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { css } from "frontity";
import { FaClock, FaTimesCircle } from "react-icons/fa";

import { Button } from "@chakra-ui/button";
import TopBrandSlider from "../component/TopBrandSlider";
import Icon from "@chakra-ui/icon";
import {
  FaAngleRight,
  FaCheckCircle,
  FaChevronRight,
  FaCircle,
  FaFacebook,
  FaFacebookF,
  FaLinkedin,
  FaLinkedinIn,
  FaPinterestP,
  FaPrint,
  FaShoePrints,
  FaTwitter,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import connect from "@frontity/connect";
import ImageViewFeatured from "../../src/Utils/ImageViewFeatured";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import Breadcrumb from "../component/Breadcrumb";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  TumblrShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  EmailShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
  PinterestIcon,
} from "react-share";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { BsFillTagsFill } from "react-icons/bs";

const Singlenews = ({ state, actions, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);

  const id = data.id;
  const type = data.type;
  const newsData = state.source[type][id];
  const post_link = state.frontity.url + "/" + newsData.link.slice(1);
  const media = newsData && state.source.attachment[newsData.featured_media];
  console.log("checkmedia", newsData.featured_media);

  const slug = newsData.slug;

  const author = newsData && state.source.author[newsData.author];
  // console.log("postlink", newsData.author);

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchData();
    fetchDataRelatedCategory();
  }, [dataLoaded]); //update by santosh

  const fetchData = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/sneaker-news/page/${slug}/`,
    });
    console.log("category post", `/wl/v1/sneaker-news/page/${slug}/`);
    const newsPost = await response.json();
    actions.sneakerNewsRecent.toggleLoading();
    actions.sneakerNewsRecent.updatePostData(newsPost);
  };
  const fetchDataRelatedCategory = async () => {
    const response = await libraries.source.api.get({
      endpoint: "/wl/v1/on-focus",
    });

    const categoryTabPostData = await response.json();

    // console.log("category tab post = ", categoryTabPostData);

    actions.onFocus.toggleLoading();
    actions.onFocus.updatePostData(categoryTabPostData);
  };
  // console.log("onfocus ", state.onFocus.postData);
  const relatedCategory = state.onFocus.postData;

  const relatedData =
    relatedCategory &&
    relatedCategory.sort(function (a, b) {
      return b.release_date_int - a.release_date_int;
    });
  // console.log("datahigh", relatedData);

  const sneakerNewsRecent = state.sneakerNewsRecent.postData;
  // const data = state.source.get(state.router.link);
  let breadCrumData = data.link;

  // news tage and categories

  const postId = data.id;
  const postDetails = state.source.post[postId];
  const categoryId = postDetails.categories;
  const category = categoryId && state.source.category[categoryId];
  const tagId = postDetails.tags;
  const tag = tagId && state.source.tag[tagId];

  // console.log("tempcate", category);

  // author details api

  const fetchDataForAuthor = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/author/${newsData.author}`,
    });

    const result = await response.json();

    actions.authorDetail.toggleLoading();
    actions.authorDetail.updatePostData(result);
  };
  useEffect(() => {
    fetchDataForAuthor();
  }, []);

  // end of author details api
  return (
    <>
      <Box mx={{ base: "6", md: "16", lg: "40" }}>
        {/* menu bradecrum */}
        <Box textAlign="center" mt="10" mb="6">
          {/* <Breadcrumb beadcrumb={breadCrumData} /> */}
        </Box>

        <Grid
          templateColumns={{ md: "1fr", lg: "1fr .5fr", sm: "repete(3, 1fr)" }}
          gap="6"
        >
          {/* Grid first main section */}
          <Box>
            <Box mb="10">
              {/* <ImageViewFeatured id={newsData.featured_media} /> */}

              <Heading
                as="h1"
                mt={6}
                _hover={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
                fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
                lineHeight="normal"
                fontWeight="bold"
                color="#3E485D"
                fontFamily="Martel"
                mb="10px"
              >
                <Html2React html={newsData.title.rendered} />
              </Heading>
              {/* <Box mb="8" display={"flex"}>
                <Text color="#3E485D" fontSize="xs" lineHeight="22px" mx={3}>
                  <Icon
                    as={FaCircle}
                    boxSize="2"
                    mr={1}
                    color={"#3E485D"}
                    mx={3}
                  />
                  {author.name}
                </Text>
              </Box> */}

              <Box
                border="1px"
                borderColor="gray.500"
                py={1}
                px={2}
                my={2}
                display="flex"
                // flexShrink={0}
                width="fit-content"
              >
                <Text
                  color="#888"
                  fontSize="xs"
                  lineHeight="22px"
                  mx={3}
                  fontWeight="semibold"
                  display={{ base: "grid", md: "block" }}
                  justifyItems={{ base: "center" }}
                >
                  <Icon as={FiCalendar} boxSize="3" color={"#888"} mx={3} />
                  {dayjs(newsData.date).format("DD MMMM YYYY")}
                </Text>
                {category && (
                  <Link link={category.link}>
                    <Text
                      color="#888"
                      fontSize="xs"
                      lineHeight="22px"
                      mx={3}
                      fontWeight="semibold"
                      display={{ base: "grid", md: "block" }}
                      justifyItems={{ base: "center" }}
                    >
                      <Icon
                        as={AiTwotoneFolderOpen}
                        boxSize="3"
                        mr={1}
                        color={"#888"}
                        mx={3}
                      />
                      {category && category.name}
                    </Text>
                  </Link>
                )}

                {tag && (
                  <Link link={tag.link}>
                    <Text
                      color="#888"
                      fontSize="xs"
                      lineHeight="22px"
                      mx={3}
                      fontWeight="semibold"
                      display={{ base: "grid", md: "block" }}
                      justifyItems={{ base: "center" }}
                    >
                      <Icon
                        as={BsFillTagsFill}
                        boxSize="3"
                        mr={1}
                        color={"#888"}
                        mx={3}
                      />
                      {tag && tag.name}
                    </Text>
                  </Link>
                )}
              </Box>

              <Text
                color="#3E485D"
                fontFamily="Open Sans"
                className="product-details"
              >
                {<Html2React html={newsData.content.rendered} />}
              </Text>
            </Box>
            {state.authorDetail.postData && (
              <Box
                display={{ sm: "block", md: "flex" }}
                alignItems="center"
                mb={5}
              >
                {/* <Link link={author.link}> */}
                <img
                  id="author-img"
                  height="100px"
                  width="100px"
                  src={state.authorDetail.postData.profil}
                  alt={state.authorDetail.postData.name}
                />
                {/* </Link> */}

                <VStack alignItems="start" alignContent="start">
                  <Text
                    mt="4"
                    color="#6e1a1a"
                    fontFamily="Open Sans"
                    fontWeight="bold"
                    fontSize="16px"
                  >
                    {state.authorDetail.postData.name}
                  </Text>
                  {/* <Text
                    mt="4"
                    color="#666666"
                    fontFamily="Open Sans"
                    fontSize="14px"
                  >
                    {author.yoast_head_json.title}
                  </Text> */}

                  <Text fontSize="12px" color="#666666">
                    {state.authorDetail.postData.description}
                  </Text>
                </VStack>
              </Box>
            )}
            {/* social share */}
            <Box
              // display={{ base: "Block ", lg: "flex" }}
              justifyContent="space-between"
              my="4"
            >
              {media !== undefined && media !== null ? (
                <Text
                  as="h2"
                  fontSize={{ base: "lg", md: "md", lg: "lg" }}
                  // lineHeight="short"
                  fontWeight="bold"
                  fontStyle="normal"
                  fontFamily="Martel"
                  color={"#3E485D"}
                  lineHeight="normal"
                >
                  Share this post
                </Text>
              ) : (
                <div></div>
              )}

              <Box width="fit-content" mt="4">
                {media !== undefined && media !== null ? (
                  <Grid
                    templateColumns={{ md: "1fr 1fr 1fr 1fr", base: "1fr 1fr" }}
                    gap="3"
                  >
                    {/* facebook */}
                    <FacebookShareButton url={post_link} display="flex">
                      {/* <FacebookIcon size={32} round={true} /> */}
                      <Box
                        display="flex"
                        bg="#f2f2f2"
                        width="fit-content !important"
                        px="3"
                        py="6px"
                        borderRadius="3px"
                        // url={post_link}
                        // onClick={() => {
                        //   actions.router.set(post_link);
                        // }}
                      >
                        <Box display="flex" alignItems="center" mr="2">
                          <FaFacebookF size={14} color="#3b5998" />
                        </Box>
                        <Text color="#525F7A" fontSize="14px">
                          Share
                        </Text>
                      </Box>
                    </FacebookShareButton>
                    {/* tweet */}
                    {media.source_url && (
                      <TwitterShareButton
                        url={post_link}
                        media={media.source_url}
                      >
                        <Box
                          display="flex"
                          bg="#f2f2f2"
                          width="fit-content !important"
                          px="3"
                          py="6px"
                          borderRadius="3px"
                        >
                          <Box display="flex" alignItems="center" mr="2">
                            {" "}
                            <FaTwitter size={14} color="#1DA1F2" />
                          </Box>

                          <Text color="#525F7A" fontSize="14px">
                            Tweet
                          </Text>
                        </Box>
                      </TwitterShareButton>
                    )}

                    {media.source_url && (
                      <LinkedinShareButton
                        url={post_link}
                        media={media.source_url}
                      >
                        <Box
                          display="flex"
                          bg="#f2f2f2"
                          width="fit-content !important"
                          px="3"
                          py="6px"
                          borderRadius="3px"
                        >
                          <Box display="flex" alignItems="center" mr="2">
                            {" "}
                            <FaLinkedinIn size={14} color="#0A66C2" />
                          </Box>

                          <Text color="#525F7A" fontSize="14px">
                            Share
                          </Text>
                        </Box>
                      </LinkedinShareButton>
                    )}
                    {/* printest */}
                    {media.source_url && (
                      <PinterestShareButton
                        url={post_link}
                        media={media.source_url}
                      >
                        <Box
                          display="flex"
                          bg="#f2f2f2"
                          width="fit-content !important"
                          px="3"
                          py="6px"
                          borderRadius="3px"
                        >
                          <Box display="flex" alignItems="center" mr="2">
                            <FaPinterestP size={14} color="#BD081C" />
                          </Box>

                          <Text color="#525F7A" fontSize="14px">
                            Share
                          </Text>
                        </Box>
                        {/* <PinterestIcon size={32} round={true} /> */}
                      </PinterestShareButton>
                    )}
                  </Grid>
                ) : (
                  <div></div>
                )}
              </Box>
            </Box>
          </Box>
          {/* Grid Second  main section */}
          <Box>
            {/* recent news */}
            <Box mb="10">
              <Text
                as="h2"
                fontSize={{ base: "lg", md: "md", lg: "lg" }}
                fontWeight="bold"
                fontStyle="normal"
                fontFamily="Martel"
                color={"#3E485D"}
                lineHeight="normal"
                mb="4"
              >
                Recent News
              </Text>

              {sneakerNewsRecent.map((item) => {
                return (
                  <Box>
                    <Box display={{ md: "flex", base: "flex" }} mb="3">
                      <Box
                        flexShrink={0}
                        width={{ base: "35%", md: "50%", xl: "35%" }}
                      >
                        <Link link={`/sneaker-news/${item.slug}/`}>
                          <img
                            id="contact-img"
                            width="100%"
                            height="100%"
                            src={item.featured_image.medium}
                            alt={item.title}
                          />
                        </Link>
                      </Box>

                      <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
                        <Link
                          link={`/sneaker-news/${item.slug}/`}
                          // mt={1}
                          display="block"
                          mb="1"
                          // onClick={() => clickFunc(item.slug)}
                          // pb="1"
                        >
                          <Text
                            as="h3"
                            fontSize={{ base: "md", md: "md", lg: "sm" }}
                            lineHeight="normal"
                            fontStyle="normal"
                            fontFamily="Martel"
                            color={"#3E485D"}
                            noOfLines={2}
                          >
                            {item.title}
                          </Text>
                        </Link>
                        <Text as="span" mb="2" color="#7887A5" fontSize="xs">
                          {item.postDate}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            {/* Related Product */}
            <Box mb="10">
              <Text
                as="h2"
                fontSize={{ base: "lg", md: "md", lg: "lg" }}
                // lineHeight="short"
                fontWeight="bold"
                fontStyle="normal"
                fontFamily="Martel"
                color={"#3E485D"}
                lineHeight="normal"
                mb="4"
              >
                Related Product
              </Text>

              <Box>
                {relatedData &&
                  relatedData.map((item) => {
                    if (item.sneaker_status === "instock") {
                      var status = (
                        <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
                          <Icon
                            as={FaCheckCircle}
                            boxSize="3"
                            mr={1}
                            color={"#3EB75E"}
                          />
                          In Stock
                        </Text>
                      );
                    } else if (item.sneaker_status == "coming_soon") {
                      var status = (
                        <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                          <Icon
                            as={FaClock}
                            boxSize="3"
                            mr={1}
                            color={"#FF6600"}
                          />
                          Coming Soon
                        </Text>
                      );
                    } else if (item.sneaker_status == "stockist_in_stock") {
                      var status = (
                        <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                          <Icon
                            as={FaClock}
                            boxSize="3"
                            mr={1}
                            color={"#FF6600"}
                          />
                          Stocklist In Stock
                        </Text>
                      );
                    } else if (item.sneaker_status == "restock") {
                      var status = (
                        <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                          <Icon
                            as={FaClock}
                            boxSize="3"
                            mr={1}
                            color={"#FF6600"}
                          />
                          Re Stock
                        </Text>
                      );
                    } else if (item.sneaker_status == "delayed") {
                      var status = (
                        <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                          <Icon
                            as={FaClock}
                            boxSize="3"
                            mr={1}
                            color={"#FF6600"}
                          />
                          Delayed
                        </Text>
                      );
                    } else if (item.sneaker_status == "sold_out") {
                      var status = (
                        <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                          <Icon
                            as={FaClock}
                            boxSize="3"
                            mr={1}
                            color={"#FF6600"}
                          />
                          Sold Out
                        </Text>
                      );
                    } else if (item.sneaker_status == "stockist_sold_out") {
                      var status = (
                        <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                          <Icon
                            as={FaClock}
                            boxSize="3"
                            mr={1}
                            color={"#FF6600"}
                          />
                          Stocklist Sold Out
                        </Text>
                      );
                    } else {
                      var status = (
                        <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                          <Icon
                            as={FaClock}
                            boxSize="3"
                            mr={1}
                            color={"#FF6600"}
                          />
                          Nothing
                        </Text>
                      );
                    }
                    return (
                      item && (
                        <Link link={item.slug}>
                          <Box display={{ md: "flex", base: "flex" }} mb="3">
                            <Box
                              flexShrink={0}
                              width={{ base: "35%", md: "50%", xl: "35%" }}
                            >
                              <img
                                id="contact-img"
                                width="100%"
                                height="100%"
                                src={item.featured_image.medium}
                                alt="Woman paying for a purchase"
                              />
                            </Box>
                            <Box
                              mt={{ base: 0, md: 0 }}
                              ml={{ base: 2, md: 3 }}
                            >
                              <Text
                                // mt={1}
                                display="block"
                                fontSize={{ base: "md", md: "md", lg: "sm" }}
                                lineHeight="normal"
                                href="#"
                                fontStyle="normal"
                                fontFamily="Martel"
                                color={"#3E485D"}
                                mb="1"
                                noOfLines={2}
                                // pb="1"
                              >
                                {item.post_title}
                              </Text>
                              <Box display="flex">
                                {status}
                                <Text
                                  fontSize="xs"
                                  color="#F12026"
                                  fontWeight="semibold"
                                  ml={3}
                                >
                                  £{item.price}
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                        </Link>
                      )
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Grid>
        <Box mb="24">
          <Box display="flex" justifyContent="space-between" my="4">
            <Text
              as="h2"
              fontSize={{ base: "lg", md: "md", lg: "lg" }}
              // lineHeight="short"
              fontWeight="bold"
              fontStyle="normal"
              fontFamily="Martel"
              color={"#3E485D"}
              lineHeight="normal"
            >
              Top Brands
            </Text>
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
                link="/brands"
                css={css`
                  font-size: 14px;
                  vertical-align: middle;
                `}
                fontWeight="100"
              >
                View All
              </Link>
            </Box>
            {/* <Button
              display={{ base: "none" }}
              size="sm"
              color="#525F7A"
              bg="white"
              fontFamily="Open Sans"
              border="1px solid #525F7A"
              rounded="sm"
              px="6"
              fontSize="sm"
            >
              View all
            </Button> */}
          </Box>
          <TopBrandSlider />
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
                link="/brands"
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
          {/* <Box textAlign="center" mt="6">
            <Button
              display={{ md: "none", lg: "none" }}
              size="sm"
              color="#525F7A"
              bg="white"
              fontFamily="Open Sans"
              border="1px solid #525F7A"
              rounded="sm"
              px="6"
              fontSize="sm"
            >
              View all
            </Button>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default connect(Singlenews);
