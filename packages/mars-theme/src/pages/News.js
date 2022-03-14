import React, { useState, useEffect } from "react";
import { Icon } from "@chakra-ui/react";

import {
  Stack,
  Circle,
  Box,
  Heading,
  Grid,
  Text,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import {
  FaArrowDown,
  FaChevronDown,
  FaAngleDoubleLeft,
  FaChevronLeft,
  FaAngleDoubleRight,
  FaHeart,
  FaAngleRight,
  FaDotCircle,
  FaChevronRight,
  FaTimesCircle,
  FaCheckCircle,
} from "react-icons/fa";

import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";
import Phoneslider from "../component/Phoneslider";
import Link from "@frontity/components/link";
import connect from "@frontity/connect";
import ImageViewFeatured from "../../src/Utils/ImageViewFeatured";
import Breadcrumb from "../component/Breadcrumb";

import Moment from "moment";
import dayjs from "dayjs";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

const News = ({ state, actions, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);

  let breadCumbData = data.route;

  var totaPages = data.totalPages;
  var currentPageClick = data.page;

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
    actions.router.set(`/sneaker-news/page/${pages}`);
  };
  const doubleLeft = () => {
    setCurrentPage(1);
    actions.router.set(`/sneaker-news`);
  };

  const goToNextPage = () => {
    setCurrentPage((page) => currentPageClick + 1);
    actions.router.set(`/sneaker-news/page/${currentPageClick + 1}`);
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => currentPageClick - 1);
    actions.router.set(`/sneaker-news/page/${currentPageClick - 1}`);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);

    if (pageNumber === 1) {
      actions.router.set(`/sneaker-news`);
    } else {
      actions.router.set(`/sneaker-news/page/${pageNumber}`);
    }
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  const clickedLoadMore = () => {
    var tempTotal = stockValue.totalProduct + 12;

    const tempArr = {
      brandId: stockValue.brandId,
      totalProduct: tempTotal,
      priceMin: stockValue.priceMin,
      priceMax: stockValue.priceMax,
      status: stockValue.status,
      date: stockValue.date,
      sortBy: stockValue.sortBy,
      color: stockValue.color,
    };
    // setStockValue(tempArr);

    setDataLength({ min: 0, max: tempTotal });
  };

  const pageData = state.source.get(state.router.link);
  // const schemaData = pageData.schemaData && pageData.schemaData;

  console.log("schemadataa", state.router.link);
  const [readMore, setreadMore] = useState(false);
  const [schemaData, setschemaData] = useState(false);

  // state.newsSchema.postData;

  const fetchData = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/schema-news-all/`,
    });

    const result = await response.json();

    actions.newsSchema.toggleLoading();
    actions.newsSchema.updatePostData(result);
    setschemaData(state.newsSchema.postData);
    // setprodData(state.newsSchema.postData);
  };

  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    fetchData();
  }, [dataLoaded]); //update by santosh

  console.log("checkschema", state.newsSchema.postData);

  return (
    <>
      {/* {schemaData !== undefined && schemaData !== null ? (
        <Head>
          {schemaData.meta && <title>{schemaData.meta.title}</title>}
          <meta
            data-rh="true"
            name="thumbnail"
            content={schemaData.meta.favicon}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="viewport"
            content="width=device-width, initial-scale=1"
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="apple-itunes-app"
            content="app-id=1436712793"
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="fb:app_id"
            content={schemaData.meta.fbAppId}
            data-reactroot=""
          />
          <meta data-rh="true" charSet="utf-8" data-reactroot="" />
          <meta
            data-rh="true"
            property="og:locale"
            content="en_GB"
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:type"
            content="website"
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:site_name"
            content={schemaData.meta.sitename}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:card"
            content="summary"
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:site"
            content={schemaData.meta.twitter}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:creator"
            content={schemaData.meta.twitter}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:title"
            content={schemaData.meta.title}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:url"
            content={schemaData.meta.sitename}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:title"
            content={schemaData.meta.titleTwitter}
            data-reactroot=""
          />{" "}
          {schemaData.breadCrumb && (
            <script type="application/ld+json">
              {`
             ${schemaData.breadCrumb}
             `}
            </script>
          )}
        </Head>
      ) : null} */}

      {data && (
        <>
          <Stack
            mx={{ base: "6", md: "20", lg: "40" }}
            mt={{ base: "30px", md: "none" }}
            mb="30px !important"
          >
            <Stack mb="30px !important">
              <Heading
                as="h1"
                _hover={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
                fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
                lineHeight="25px"
                fontWeight="bold"
                color="#3E485D"
                textAlign="center"
              >
                Sneaker News
              </Heading>
              <Breadcrumb breadcrumb={breadCumbData} />
            </Stack>

            <Stack pb={6}>
              {data.items && <Phoneslider props={data.items} />}
            </Stack>
            {/* first main grid */}
            <Grid
              px={2}
              display={{ md: "none", base: "none", lg: "Grid" }}
              templateColumns={{ md: "3fr 3fr  ", sm: "repeat(2, 1fr)" }}
              textColor="white"
              gap={6}
              pb={6}
            >
              {data.items.slice(0, 1).map(({ type, id }) => {
                const item = state.source[type][id];

                return (
                  item && (
                    <Box>
                      <Link link={item.link}>
                        {item.featured_media && (
                          <ImageViewFeatured id={item.featured_media} />
                        )}
                      </Link>

                      <Link link={item.link}>
                        <Heading
                          as="h3"
                          mt={6}
                          _hover={{ textDecoration: "none" }}
                          _focus={{ boxShadow: "none" }}
                          fontSize={{
                            base: "md",
                            md: "md",
                            lg: "xl",
                            xl: "2xl",
                          }}
                          fontWeight="bold"
                          color="#3E485D"
                          lineHeight="normal"
                          mb="10px"
                        >
                          {<Html2React html={item.title.rendered} />}
                        </Heading>
                      </Link>
                      <Text
                        color={"#3E485D"}
                        display="flex"
                        alignItems="flex-end"
                        fontSize={{ base: "md", md: "md", lg: "sm", xl: "md" }}
                      >
                        <Html2React
                          html={`${item.excerpt.rendered.substring(
                            0,
                            100
                          )}  ...`}
                        />
                      </Text>
                      <Box w="max-content">
                        <Link link={item.link}>
                          <Text color="red">
                            Read more{" "}
                            <Icon
                              as={FaChevronRight}
                              boxSize="2"
                              color={"red"}
                            />
                          </Text>
                        </Link>
                      </Box>
                    </Box>
                  )
                );
              })}
              <Box display="flex">
                <VStack alignItems="normal" justifyContent={"space-between"}>
                  {data.items.slice(2, 5).map(({ type, id }) => {
                    const item = state.source[type][id];
                    console.log("myhomepage", item);

                    if (item.status == "instock") {
                      var status = (
                        <Text
                          color="#3EB75E"
                          fontSize="xs"
                          mr="2"
                          lineHeight="22px"
                        >
                          <Icon
                            as={FaCheckCircle}
                            boxSize="3"
                            mr={1}
                            color={"#3EB75E"}
                          />
                          In Stock
                        </Text>
                      );
                    } else if (item.status == "coming_soon") {
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
                    } else if (item.status == "publish") {
                      var status = (
                        <Text
                          color="#3EB75E"
                          fontSize="xs"
                          mr="2"
                          lineHeight="22px"
                        >
                          <Icon
                            as={FaCheckCircle}
                            boxSize="3"
                            mr={1}
                            color={"#3EB75E"}
                          />
                          Publish
                        </Text>
                      );
                    } else if (item.status == "restock") {
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
                    } else if (item.status == "delayed") {
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
                    } else if (item.status == "sold_out") {
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
                    } else if (item.status == "stockist_sold_out") {
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
                      <Box
                        display={{ md: "flex" }}
                        // mb="5px "
                        alignItems="center"
                        h={"100%"}
                      >
                        <Box
                          flexShrink={0}
                          width={{
                            base: "100%",
                            md: "50%",
                            lg: "50%",
                            xl: "47%",
                          }}
                          height={"95%"}
                          borderRadius={"5px"}
                          border={"1px solid #C2C8D6"}
                        >
                          <Link link={item.link} id="img-div2nd-height">
                            {" "}
                            {item.featured_media && (
                              <ImageViewFeatured id={item.featured_media} />
                            )}
                          </Link>
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 4 }}>
                          <Link link={item.link}>
                            <Heading
                              as="h3"
                              display="block"
                              fontSize={{
                                base: "md",
                                md: "md",
                                lg: "sm",
                                xl: "lg",
                              }}
                              color="#3E485D"
                              lineHeight="normal"
                              noOfLines={2}
                            >
                              {<Html2React html={item.title.rendered} />}
                            </Heading>
                          </Link>
                          <Box>
                            {" "}
                            <Text
                              as="span"
                              color="#3E485D"
                              fontSize={{
                                base: "md",
                                md: "md",
                                lg: "sm",
                                xl: "md",
                              }}
                              lineHeight="normal"
                              mt="2px"
                              noOfLines={2}
                            >
                              {
                                <Html2React
                                  html={`${item.excerpt.rendered.substring(
                                    0,
                                    50
                                  )}  ...`}
                                />
                              }
                            </Text>
                          </Box>

                          <Flex mt="2px" alignItems="center">
                            <Box w="max-content">
                              <Link link={item.link}>
                                <Text color="red">
                                  Read more{" "}
                                  <Icon
                                    as={FaChevronRight}
                                    boxSize="2"
                                    color={"red"}
                                  />
                                </Text>
                              </Link>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    );
                  })}
                </VStack>
              </Box>
            </Grid>

            <Box mt={{ base: "20px !important", md: "61px !important" }} px={2}>
              <Heading
                pb="6"
                fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                fontWeight="bold"
                fontStyle="normal"
                color={"#3E485D"}
                lineHeight="normal"
              >
                Popular Sneaker News
              </Heading>
              <Grid
                templateColumns={{
                  md: "1fr 1fr 1fr",
                  sm: "repeat(3, 1fr)",
                }}
                textColor="white"
                gap={8}
                mb="12"
              >
                {data.items.slice(4).map((items) => {
                  const id = items.id;
                  const type = items.type;

                  const item = state.source[type][id];
                  return (
                    <Link link={item.link}>
                      <Box>
                        <Box>
                          {item.featured_media && (
                            <ImageViewFeatured id={item.featured_media} />
                          )}

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
                  );
                })}
              </Grid>
              {/* <Stack
                mb="6"
                textAlign="center"
                display={{ base: "block", md: "none" }}
              >
                <Text color="#525F7A" fontSize="xs" fontWeight="semibold">
                  Load mores
                </Text>
                <Icon as={FaChevronDown} boxSize={3} color="#525F7A" />
              </Stack> */}

              {/* <Box
                display={{ base: "flex", md: "none" }}
                justifyContent="center"
              >
                <Text
                  color="#525F7A"
                  _hover={{ bg: "#3E485D !important" }}
                  fontSize="xs"
                  fontWeight="semibold"
                >
                  Prev
                </Text>
                <Circle
                  p="2"
                  border="1px solid #9DA7BE"
                  _hover={{ bg: "#3E485D !important" }}
                  onClick={currentPage === 1 ? "null" : goToPreviousPage}
                >
                  <FaChevronLeft color="#9DA7BE" boxSize="2" />
                </Circle>

                <Box width={20}></Box>
                <Circle
                  p="2"
                  border="1px solid #9DA7BE"
                  _hover={{ bg: "#3E485D !important" }}
                  onClick={currentPage === 1 ? "null" : goToPreviousPage}
                >
                  <FaChevronRight color="#9DA7BE" boxSize="2" />
                </Circle>
                <Text color="#525F7A" fontSize="xs" fontWeight="semibold">
                  Next
                </Text>
              </Box> */}

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
            </Box>
            <Stack border="1px solid #D8DEE7" rounded="lg" mt="30px !important">
              <Box mx={8} my={8}>
                <Text
                  color={"#666666"}
                  textAlign="center"
                  fontSize="sm"
                  fontStyle="normal"
                  fontWeight="normal"
                  lineHeight="26px"
                  noOfLines={readMore ? 10 : 3}
                >
                  Looking for the best Nike trainers in the UK and Europe? Then
                  FastSoleUK is at your service! The Swoosh brand is always on
                  its top-game and updating the sneaker culture with every
                  release. The innovative designs and all the season-friendly
                  colour palettes make sure you have the highest score in your
                  sneaker game all year long. Similarly, the highly engineered
                  and foot-friendly features, for example, the AIR unit,
                  VaporFly material, team-up between React and Air Max, have
                  been the fuel for the brand's skyrocketing success. We all
                  admire a Nike classic sneaker as well as we love to take away
                  the attention with a contemporary one
                </Text>
                <Text
                  color={"#3E485D"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="sm"
                  lineHeight="26px"
                  fontWeight="bold"
                  onClick={() => {
                    setreadMore(!readMore);
                  }}
                >
                  Read {readMore ? "less" : "more"}
                </Text>
                <Text
                  color={"#3E485D"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="sm"
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
            </Stack>
            {/* test front banner  */}
            {/* <FaTimesCircle /> */}
          </Stack>
        </>
      )}
    </>
  );
};

export default connect(News);
