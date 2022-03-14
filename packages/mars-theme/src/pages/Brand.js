import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import Link from "@frontity/components/link";
import { useState, useEffect } from "react";
import {
  Box,
  WrapItem,
  Wrap,
  Flex,
  HStack,
  Grid,
  Stack,
  Text,
  VStack,
  Center,
} from "@chakra-ui/layout";
import {
  Heading,
  Button,
  Select,
  Image,
  Icon,
  Input,
  RadioGroup,
  Radio,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  FaAngleRight,
  FaCheckCircle,
  FaChevronRight,
  FaCircle,
  FaSlidersH,
} from "react-icons/fa";
import Bannerslider from "../component/Bannerslider";
import connect from "@frontity/connect";
import { css } from "frontity";
// import SneakersData from "../component/SneakersData";
import SneakerDataForBrand from "../component/SneakerDataForBrand";
import Breadcrumb from "../component/Breadcrumb";
import RecentNews from "../component/RecentNews";
import { Spinner } from "@chakra-ui/react";

const Brand = ({ state, libraries, actions }) => {
  const linkurl = state.router.link;

  const postData = state.source.get(state.router.link);
  var slugName = postData.id;

  // const [slugName, setSlug] = useState(postData.id);
  const [children, setChildren] = useState([]);
  const [posts, setPostData] = useState([]);
  const [itemId, setItemId] = useState();
  const [slugUrl, setSlugUrl] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  useEffect(() => {
    fetchData(slugName);
    // recentNewsData();
  }, [slugName]);

  // const recentNewsData = async () => {
  //   const response = await libraries.source.api.get({
  //     endpoint: `/wl/v1/recent-news/`,
  //   });
  //   // console.log("category post", `/wl/v1/sneaker-news/page/${slug}/`);
  //   const newsPost = await response.json();
  //   actions.recentNews.toggleLoading();
  //   actions.recentNews.updatePostData(newsPost);
  // };
  // const recentNews = state.recentNews.postData;

  // const slug = `/brands/le-coq-sportif`
  const fetchData = async (slugName) => {
    const slug = `/brands/${slugName}`;
    console.log("slug name new :", slugName);
    console.log("objectsss", slug);
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1${slug}`,
    });

    const result = await response.json();

    console.log("result data :", result);

    actions.brandItems.toggleLoading();
    actions.brandItems.updatePostData(result);

    var termId =
      state.brandItems.postData.releatedItems &&
      state.brandItems.postData.releatedItems.post.term_taxonomy_id;
    setItemId(termId);

    // if (state.brandItems.postData.releatedItems.children != undefined) {

    setChildren([]);
    state.brandItems.postData.releatedItems.children &&
      setChildren(state.brandItems.postData.releatedItems.children);
    // }

    if (state.brandItems.postData.post != undefined) {
      var posts = state.brandItems.postData.post;
      posts.sort(function (b, a) {
        return b.release_date_int - a.release_date_int;
      });
      setPostData(posts);
    }

    // result data for finding the subchild
    if (state.brandItems.postData.categories != undefined) {
      var categoryInfo = state.brandItems.postData.categories;

      var tempSlug = linkurl.split("/");
      var brandName = tempSlug[tempSlug.length - 2];
      console.log("link url data :", brandName);

      var tempStr = "";
      for (var i = 0; i < categoryInfo.length; i++) {
        tempStr += categoryInfo[i]["slug"] + "/";
        if (brandName == categoryInfo[i]["slug"]) {
          break;
        }
      }

      tempStr = linkurl.replace(brandName + "/", tempStr);

      setSlugUrl(tempStr);
      console.log("temp str data :", tempStr);
    }

    // var tempItemId = termId
  };

  // var itemId = state.brandItems.postData.releatedItems.post && state.brandItems.postData.releatedItems.post.term_taxonomy_id;

  // console.log("item id ", children);

  const [readMore, setreadMore] = useState(false);
  {
    console.log("mydata", state.brandItems.postData);
  }

  return !state.brandItems.isLoading ? (
    <Stack
      mx={{ base: "6", md: "16", lg: "40" }}
      mt={{ base: "30px", md: "none" }}
      mb="30px !important"
    >
      <Stack mb="30px !important">
        <Box display="flex" justifyContent="Center">
          <img
            id="brand-big-img"
            mb="2"
            width="100px"
            height="60px"
            src={state.brandItems.postData.brandImage}
            lineHeight="22px"
          />
          {/* <Icon
            as={FaSlidersH}
            boxSize="6"
            display={{ base: "block", md: "block", lg: "none" }}
            onClick={onOpen}
          />

          <Filtermobile2 isOpen={isOpen} placement="right" onClose={onClose} /> */}
        </Box>

        <Heading
          as="h1"
          mt={6}
          _hover={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
          fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
          lineHeight="25px"
          fontWeight="bold"
          color="#3E485D"
          fontFamily="Martel"
          textAlign="center"
        >
          {/* {postData.id} Sneakers */}
        </Heading>
        {slugUrl != "" ? <Breadcrumb breadcrumb={slugUrl} /> : null}
      </Stack>
      {children && (
        <Bannerslider
          children={children}
          coverImage={state.brandItems.postData.coverImage}
        />
      )}

      <HStack
        my="30px !important"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent="center"
        display={{ base: "none", md: "flex" }}
      >
        <Text
          as="span"
          color="#666666"
          fontSize="13px"
          fontFamily="inherit"
          mr={5}
          my={1}
        >
          {
            // console.log("childitem", children)
            children.length != 0 ? "Filter" : ""
          }
        </Text>
        <Wrap direction="row" ml="0px !important">
          {children &&
            children.map((item) => {
              return (
                <WrapItem>
                  <Link link={`/sneaker-release-dates/brands/${item.termSlug}`}>
                    <Center
                      bg="#F3F4F7"
                      px={2}
                      py={1}
                      borderRadius="md"
                      borderRadius="md"
                      fontSize="13px"
                    >
                      {item.termName}
                    </Center>
                  </Link>
                </WrapItem>
              );
            })}
        </Wrap>
      </HStack>
      {/* for mobile all sneaker */}
      <Heading
        mt="30px !important"
        mb="10px !important"
        display={{ base: "block", md: "none" }}
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        // fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
        fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
        lineHeight="25px"
        fontWeight="bold"
        color="#3E485D"
      >
        All {postData.id.toUpperCase()} Sneakers
      </Heading>

      {itemId && <SneakerDataForBrand itemId={itemId} subBrands={children} />}

      <Stack>
        <Box
          mt="30px !important"
          display="flex"
          justifyContent="space-between"
          mb="4"
        >
          <Heading
            // mb={4}
            fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
            color={"#3E485D"}
            fontWeight="bold"
            fontStyle="normal"
          >
            {/* Recent {postData.id.toUpperCase()} News */}
            Recent News
          </Heading>
          <Box
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
            display={{ md: "block", base: "none" }}
          >
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

        <RecentNews />
        {/* <Grid
            templateColumns={{
              md: "1fr 1fr 1fr",
              sm: "repeat(3, 1fr)",
            }}
            textColor="white"
            gap={8}
            mb="4"
          >
            {recentNews &&
              recentNews.slice(0, 3).map((item) => {
                const postslug =
                  item.post_name && `/sneaker-news/${item.post_name}`;
                return (
                  item && (
                    <Link link={postslug}>
                      {" "}
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
                            <Text
                              color="#7887A5"
                              mb="2"
                              fontSize="sm"
                              fontSize="sm"
                              display={{ base: "none", md: "block" }}
                            >
                              {item.post_date_gmt}
                            </Text>

                            <Text
                              as="h3"
                              fontSize={{ base: "md", md: "md", lg: "lg" }}
                              fontWeight="bold"
                              fontStyle="normal"
                              fontFamily="Martel"
                              color={"#3E485D"}
                              lineHeight="normal"
                            >
                              {item.post_title}
                            </Text>

                            <Box
                              display={{ base: "flex", md: "none" }}
                              justifyContent="space-between"
                            >
                              <Text mb="6px" color="#9DA7BE" fontSize="sm">
                                item release date
                              </Text>

                              <Text color="red" fontSize="sm">
                                Read More{" "}
                                <Icon
                                  as={FaAngleRight}
                                  boxSize="4"
                                  color={"#F12026"}
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
          </Grid> */}
        {/* view for mobile */}
        <Stack alignItems="center">
          <Box
            mt="4"
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
            display={{ md: "none", base: "block" }}
          >
            {" "}
            <Link
              link="/brand/viewall"
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
      </Stack>
      <Box
        border="1px solid #D8DEE7"
        rounded="lg"
        mt="40px !important"
        mb="30px !important"
      >
        <Box mx={8} my={8}>
          <Text
            color={"#666666"}
            textAlign="center"
            fontSize="sm"
            fontFamily="Open Sans"
            fontStyle="normal"
            fontWeight="normal"
            lineHeight="26px"
            noOfLines={readMore ? 6 : 3}
          >
            Looking for the best Nike trainers in the UK and Europe? Then
            FastSoleUK is at your service! The Swoosh brand is always on its
            top-game and updating the sneaker culture with every release. The
            innovative designs and all the season-friendly colour palettes make
            sure you have the highest score in your sneaker game all year long.
            Similarly, the highly engineered and foot-friendly features, for
            example, the AIR unit, VaporFly material, team-up between React and
            Air Max, have been the fuel for the brand's skyrocketing success. We
            all admire a Nike classic sneaker as well as we love to take away
            the attention with a contemporary one!
          </Text>
          <Text
            color={"#3E485D"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            fontFamily="Open Sans"
            lineHeight="26px"
            onClick={() => {
              setreadMore(!readMore);
            }}
          >
            {readMore ? "Read less" : "Read more"}
          </Text>
          <Text
            color={"#3E485D"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            fontFamily="Open Sans"
            lineHeight="26px"
            onClick={() => {
              setreadMore(!readMore);
            }}
          >
            <Icon
              as={readMore ? ArrowUpIcon : ArrowDownIcon}
              boxSize={4}
              mx={2}
            />
          </Text>
        </Box>
      </Box>
      {/* <FocusOnSlider /> */}
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

export default connect(Brand);
