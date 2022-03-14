import { ArrowDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Grid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
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
  HStack,
} from "@chakra-ui/react";
import { connect } from "frontity";
import React, { useEffect, useState } from "react";
import {
  FaAngleRight,
  FaCheckCircle,
  FaChevronRight,
  FaCircle,
  FaClock,
  FaSlidersH,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import Commonproductdata from "../component/Commonproductdata";
import Breadcrumb from "../component/Breadcrumb";

import ShopBody from "../component/ShopBody";
import SneakersData from "../component/SneakersData";
import Link from "@frontity/components/link";
import RecentNews from "../component/RecentNews";
import { Spinner } from "@chakra-ui/react";

function Subbrand({ state, libraries, actions, slug }) {
  let [isClick, setIsClick] = useState(false);
  const brandList = [
    "Asics",
    "Adidas",
    "Nike jordan",
    "Ultra boost",
    "Asics GEl LYTE 1111",
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [postData, setPostData] = useState([]);
  const [slugUrl, setSlugUrl] = useState("");

  // const slug = state.source.get(state.router.link).id;
  const path = state.router.link;

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchData();
    // retrievData();
  }, [dataLoaded]); //update by santosh

  const fetchData = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/brands/${slug}`,
    });
    console.log("checksubbrand /wl/v1/brands/", slug);
    const result = await response.json();

    actions.brandItems.toggleLoading();
    actions.brandItems.updatePostData(result);
    setPostData(state.brandItems.postData);

    console.log("data from api :", state.brandItems.postData);

    if (state.brandItems.postData.categories != undefined) {
      var categoryInfo = state.brandItems.postData.categories;

      var tempSlug = path.split("/");
      var brandName = tempSlug[tempSlug.length - 2];
      console.log("link url data :", brandName);

      var tempStr = "";
      for (var i = 0; i < categoryInfo.length; i++) {
        tempStr += categoryInfo[i]["slug"] + "/";
        if (brandName == categoryInfo[i]["slug"]) {
          break;
        }
      }

      tempStr = path.replace(brandName + "/", tempStr);

      setSlugUrl(tempStr);
      console.log("temp str data :", tempStr);
    }
  };

  // const postData = state.brandItems.postData;
  // const allItems = postData.post;

  // const brandName = post.releatedItems.post.itemName;
  // const desc = post.releatedItems.post.description;
  let termId;
  let brandName;
  let desc;

  if (postData !== "undefined" || postData !== null || postData !== []) {
    // console.log("subbrand", postData);
    var relatedItems = postData.releatedItems;
    // console.log("subbrand", relatedItems);
    if (relatedItems !== "undefined" || relatedItems !== null) {
      var relatedpost = relatedItems;
      if (relatedpost) {
        // console.log("subbrand", relatedpost);

        // console.log("finaldata", Object.entries(relatedpost.post));

        for (const [key, value] of Object.entries(relatedpost.post)) {
          switch (key) {
            case "itemName":
              brandName = value;
            case "term_taxonomy_id":
              termId = value;
            case "description":
              desc = value;

            default:
              break;
          }
        }
      } else {
        console.log("subbrand", "data is none", relatedpost);
      }
    }
  }
  console.log("finalsubbrand", postData);

  // .releatedItems;
  // .post;
  // .term_taxonomy_id;
  // term_taxonomy_id;

  // // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;

  return postData !== null && postData != undefined && postData != [] ? (
    <Stack
      mx={{ base: "6", md: "16", lg: "40" }}
      mt={{ base: "30px", md: "none" }}
    >
      <Stack mb="30px !important">
        <Heading
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
          {brandName && brandName.toUpperCase()}
        </Heading>

        {slugUrl != "" ? <Breadcrumb breadcrumb={slugUrl} /> : null}
        <img
          id="subbrand-big-img"
          objectFit="contain"
          src={postData.coverImage}
          width="100%"
          height="100%"
          mb="2"
          fit="fill"
        />
      </Stack>

      <Stack></Stack>
      {termId && <SneakersData itemId={termId} />}

      <Stack>
        <Box display="flex" justifyContent="space-between" mt="16" mb="4">
          <Text
            fontSize={{ base: "xl", md: "lg", lg: "2xl" }}
            fontWeight="bold"
            fontFamily="Martel"
            color="#3E485D"
          >
            Recent News
          </Text>
          <Link link="/sneaker-news/">
            <Button
              variant="outline"
              color="#9DA7BE"
              colorScheme="#9DA7BE"
              rounded="3px"
              h="35px"
              w="100px"
              display={{ base: "none", md: "block" }}
            >
              <Text fontWeight="normal" fontSize="14px" color="#525F7A">
                View All
              </Text>
            </Button>
          </Link>
        </Box>
        <RecentNews />
        {/* <Grid
            templateColumns={{
              md: "1fr 1fr 1fr",
              sm: "repeat(3, 1fr)",
            }}
            textColor="white"
            gap={8}
            mb="30px !important"
          >
            {postData.post &&
              postData.post.slice(0, 3).map((item) => {
                console.log("getdata", item);
                return (
                  item && (
                    <Link link={item.slug}>
                      <Box>
                        <Box>
                          <Image
                            rounded="lg"
                            objectFit="contain"
                            src={item.img}
                            w="100%"
                            h="100%"
                            rounded="md"
                            mb="2"
                          />

                          <Box>
                            <Text
                              color="#7887A5"
                              fontSize="sm"
                              display={{ base: "none", md: "contents" }}
                            >
                              {item.release_date}
                            </Text>
                            <Text
                              noOfLines={2}
                              fontSize={{ base: "lg", md: "md", lg: "xl" }}
                              fontWeight="bold"
                              fontStyle="normal"
                              fontFamily="Martel"
                              color={"#3E485D"}
                              lineHeight="normal"
                            >
                              {item.post_title}
                            </Text>
                            <Flex display={{ md: "none" }}>
                              <Box
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Text color="#7887A5" fontSize="md">
                                  {item.release_date}
                                </Text>
                                <Text color="red" fontSize="md">
                                  Read more{" "}
                                  <Icon as={FaAngleRight} boxSize={3} />{" "}
                                </Text>
                              </Box>
                            </Flex>
                          </Box>
                        </Box>
                      </Box>
                    </Link>
                  )
                );
              })}
          </Grid> */}
      </Stack>
      <Box
        border="1px solid #D8DEE7"
        rounded="lg"
        mt="16"
        my="16"
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
            noOfLines={isClick == false && 10}
          >
            {desc && <Html2React html={desc} />}
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
              setIsClick(!isClick);
            }}
          >
            Read {isClick ? "less" : "more"}
          </Text>
          <Text
            color={"#3E485D"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            fontFamily="Open Sans"
            lineHeight="26px"
          >
            {isClick ? (
              <FaChevronUp boxSize={2} color="#525F7A" />
            ) : (
              <FaChevronDown boxSize={2} color="#525F7A" />
            )}
            {/* <Icon as={ArrowDownIcon} boxSize={4} mx={2} /> */}
          </Text>
        </Box>
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
}

export default connect(Subbrand);
