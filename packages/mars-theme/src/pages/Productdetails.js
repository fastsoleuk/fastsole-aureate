import { connect, Head, loadable } from "frontity";
import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/image";
import Link from "@frontity/components/link";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import LazyLoad from "react-lazyload";
import $ from "jquery";
const Productslider = loadable(() =>
  import("../component/slider/Productslider")
);
const CanBuy = loadable(() => import("../component/CanBuy"));
const TopBrandSlider = loadable(() => import("../component/TopBrandSlider"));
const FocusOnSlider = loadable(() => import("../component/FocusOnSlider"));
const ViewAllbtn = loadable(() => import("../component/ViewAllbtn"));
const ViewAllMobile = loadable(() => import("../component/ViewAllMobile"));
const CardDetails = loadable(() => import("../component/CardDetails"));
// const Breadcrumb = loadable(() => import("../component/Breadcrumb"));
import Breadcrumb from "../component/Breadcrumb";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";

const Productdetails = ({ state, libraries, actions }) => {
  const Html2React = libraries.html2react.Component;
  const [isMobile] = useMediaQuery("(max-width: 400px)");
  const pageData = state.source.get(state.router.link);
  const seoData = pageData.schemaData && pageData.schemaData;
  console.log("chekcec", pageData);

  // all custom state

  const [isLoad, setisLoad] = useState(false);
  const [show, setShow] = React.useState(false);
  //const handleToggle = () => setShow(!show);
  const [sliderImage, setSliderImage] = useState({
    src: "",
    srcSet: "",
  });

  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (isLoad) {
      //console.log("Javascript Testing ", "page loaded");

      giveSapcing(".product-details > p", "tag_type");
    }
  }, [show]);
  // initialize things

  const initialize = () => {
    setTimeout(() => {
      // console.log("Hello, World!");
      setisLoad(true);
    }, 100);
  };

  // jquery part

  if (isLoad) {
    console.log("Javascript Testing ", "page loaded");

    const arr_products_tags = Array();
    const arr_products_this = Array();

    $(".product-details")
      .children()
      .each(function () {
        var element = $(this).prop("tagName");

        arr_products_tags.push(element);
        arr_products_this.push($(this));
      });

    for (var i = arr_products_tags.length - 1; i > 0; i--) {
      //console.log("Javascript Testing Tag Name = ", arr_products_this[i]);

      if (i > 0 && i < arr_products_tags.length) {
        if (
          arr_products_tags[i - 1] !== "A" &&
          arr_products_tags[i + 1] !== "A" &&
          arr_products_tags[i] !== "A" &&
          arr_products_tags[i] !== "STRONG"
        ) {
          arr_products_this[i].css({ display: "block" });
        }
      }
    }
  }

  if (isLoad) {
    // console.log("Javascript Testing ", "page loaded");
    // giveSapcing(".product-details > p", "tag_type");
  }

  function giveSapcing(data, type) {
    // console.log("fdsfjdkljfksdklfds = ", type);

    const arr_products_tags = Array();
    const arr_products_this = Array();

    //if (type == 'tag_type') {
    $(data)
      .children()
      .each(function () {
        var element = $(this).prop("tagName");

        arr_products_tags.push(element);
        arr_products_this.push($(this));
      });

    for (var i = arr_products_tags.length - 1; i > 0; i--) {
      if (i > 0 && i < arr_products_tags.length) {
        if (
          arr_products_tags[i - 1] !== "A" &&
          arr_products_tags[i + 1] !== "A" &&
          arr_products_tags[i] !== "A" &&
          arr_products_tags[i] !== "STRONG"
        ) {
          arr_products_this[i].css({ display: "block", "margin-top": "10px" });
        }

        if (arr_products_tags[i] == "P") {
          giveSapcing(arr_products_this[i], "this_type");
        }
      }
    }
  }

  // end of jquery part

  // breadcrumb slug

  const [tmpFinalSlg, setTmpFinalSlg] = useState("");

  const slug = state.router.link;
  var tempSlug = slug.split("/");

  var strFirst = "";
  var strLast = "";

  for (var i = 0; i < tempSlug.length; i++) {
    if (i <= 2) {
      strFirst = strFirst + tempSlug[i] + "/";
    }

    if (i >= tempSlug.length - 2) {
      if (i >= tempSlug.length - 1) {
        strLast = strLast + tempSlug[i];
      } else {
        strLast = strLast + tempSlug[i] + "/";
      }
    }
  }

  var middleStr = "";
  var i = 0;
  seoData.main.categoryData.map((item) => {
    var tempSlg = item.slug;
    if (tempSlg != null) {
      middleStr = middleStr + tempSlg + "/";
    }
    // console.log("data with step :", tempSlg);
    i++;
  });

  // console.log("middle str ", middleStr);

  var tmpFinalSlug = strFirst + middleStr + strLast;

  // console.log("final slug data temp", tmpFinalSlug);

  // console.log("myfirst", isMobile);

  // var assign for featured image

  var featuredImage =
    seoData.main.featured_image && seoData.main.featured_image.large;
  var featuredImageSrcSet =
    seoData.main.featured_image && seoData.main.featured_image.srcset;
  // setSliderImage({ src: featuredImage, srcSet: featuredImageSrcSet });

  useEffect(() => {
    initialize();
  }, [""]);

  // create stock status

  const prodStatus = seoData.main.releaseTimeDate.stock;
  if (prodStatus !== undefined && prodStatus !== null) {
    if (prodStatus == "instock") {
      var status = (
        <Text color="#3EB75E" fontSize="md" lineHeight="22px">
          <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
          In Stock
        </Text>
      );
    } else if (prodStatus == "coming_soon") {
      var status = (
        <Text color="#FF6600" fontSize="md" lineHeight="22px">
          <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
          Coming Soon
        </Text>
      );
    } else if (prodStatus == "stockist_in_stock") {
      var status = (
        <Text color="#FF6600" fontSize="md" lineHeight="22px">
          <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
          Stocklist In Stock
        </Text>
      );
    } else if (prodStatus == "restock") {
      var status = (
        <Text color="#FF6600" fontSize="md" lineHeight="22px">
          <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
          Re Stock
        </Text>
      );
    } else if (prodStatus == "delayed") {
      var status = (
        <Text color="#FF6600" fontSize="md" lineHeight="22px">
          <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
          Delayed
        </Text>
      );
    } else if (prodStatus == "sold_out") {
      var status = (
        <Text color="#FF6600" fontSize="md" lineHeight="22px">
          <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
          Sold Out
        </Text>
      );
    } else if (prodStatus == "stockist_sold_out") {
      var status = (
        <Text color="#FF6600" fontSize="md" lineHeight="22px">
          <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
          Stocklist Sold Out
        </Text>
      );
    } else {
      var status = (
        <Text color="#FF6600" fontSize="md" lineHeight="22px">
          <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
          Nothing
        </Text>
      );
    }
  }

  // end of stock status

  return (
    <>
      {seoData !== undefined && seoData !== null ? (
        <Head>
          {seoData.meta && <title>{seoData.meta.title}</title>}
          <meta
            data-rh="true"
            name="viewport"
            content="width=device-width, initial-scale=1"
            data-reactroot=""
          />
          {seoData.meta && (
            <meta
              data-rh="true"
              property="fb:app_id"
              content={seoData.meta.fbAppId}
              data-reactroot=""
            />
          )}
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
          {seoData.meta && (
            <meta
              data-rh="true"
              property="og:site_name"
              content={seoData.meta.sitename}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              name="twitter:site"
              content={seoData.meta.twitter}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              name="twitter:creator"
              content={seoData.meta.twitter}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              name="description"
              content={seoData.meta.description}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              name="thumbnail"
              content={seoData.thumbnail}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              property="og:title"
              content={seoData.meta.title}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              property="og:description"
              content={seoData.meta.description}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              property="og:image"
              content={seoData.meta.favicon}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              property="og:url"
              content={seoData.meta.ogurl}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              name="twitter:title"
              content={seoData.meta.title}
              data-reactroot=""
            />
          )}
          {seoData.meta && (
            <meta
              data-rh="true"
              name="twitter:description"
              content={seoData.meta.description}
              data-reactroot=""
            />
          )}
          <meta
            data-rh="true"
            name="twitter:card"
            content="summary"
            data-reactroot=""
          />
          {seoData.meta && (
            <meta
              data-rh="true"
              name="twitter:image"
              content={seoData.meta.favicon}
              data-reactroot=""
            />
          )}
          <script type="application/ld+json">
            {`
             ${seoData.schema}
             `}
          </script>
          <script type="application/ld+json">
            {`
             ${seoData.breadCrumb}
             `}
          </script>
        </Head>
      ) : (
        <div></div>
      )}

      {seoData.main && (
        <Box mx={{ base: "6", md: "16", lg: "40" }}>
          {/* product image slider for mobile */}
          <Box textAlign="center" mt="5" mb="5">
            {tmpFinalSlug && <Breadcrumb breadcrumb={tmpFinalSlug} />}
          </Box>

          <Box display={{ md: "none", base: "block", lg: "none" }}>
            {isLoad ? (
              <Productslider prodData={seoData.main} />
            ) : (
              <img
                borderRadius="lg"
                mb="4"
                width="700px"
                height="450px"
                src={featuredImage}
                srcSet={featuredImageSrcSet}
              />
            )}
          </Box>
          {/* end of product slider for mobile */}

          <Grid
            templateColumns={{
              md: "1fr",
              lg: "1fr .7fr",
              sm: "repete(3, 1fr)",
            }}
            gap="6"
            mx={2}
          >
            {/* image section for desktop */}
            <Box>
              <>
                <Box
                  display={{ sm: "none", base: "none", md: "contents" }}
                  className="container-img-div"
                >
                  {
                    <img
                      className="img-div"
                      borderRadius="lg"
                      width="700px"
                      height="450px"
                      src={
                        sliderImage.src == "" ? featuredImage : sliderImage.src
                      }
                      alt={seoData.main.title}
                      srcSet={
                        sliderImage.srcSet == ""
                          ? featuredImageSrcSet
                          : sliderImage.srcSet
                      }
                      loading="lazy"
                    />
                  }
                </Box>
                <Box display={{ base: "none", lg: "flex" }} mt="4">
                  <Grid templateColumns={{ md: "1fr 1fr 1fr 1fr 1fr" }} gap="2">
                    {seoData.main.productImagesMain &&
                      seoData.main.productImagesMain
                        .slice(0, 5)
                        .map((image, index) => {
                          // console.log("product image = ", image);
                          return (
                            image && (
                              <Box
                                className="container-img-div"
                                key={"ProductDetails1-" + index}
                              >
                                <img
                                  className="img-div"
                                  width="700px"
                                  height="450px"
                                  borderRadius="lg"
                                  src={image[0].src}
                                  onClick={() => {
                                    setSliderImage({
                                      src: image[0].src,
                                      srcSet: image[0].srcset,
                                    });
                                  }}
                                  alt={seoData.main.title}
                                  srcset={image[0].srcset}
                                  loading="lazy"
                                />
                              </Box>
                            )
                          );
                        })}
                  </Grid>
                </Box>
              </>

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
                {seoData.main.title}
              </Heading>

              <Box display={{ base: "block", md: "none" }}>
                <>
                  <Box display={{ base: "block", md: "none" }}>
                    <Grid
                      templateColumns={{
                        md: "1fr 1fr 1fr 1fr",
                        base: ".5fr 1fr",
                      }}
                      gap={1}
                    >
                      <Box display="flex">{status}</Box>

                      <Box>
                        {seoData.main.releaseTimeDate != null &&
                        seoData.main.releaseTimeDate != undefined ? (
                          <Text color="#7887A5" fontSize="sm" mb="2">
                            Release Date:
                            {seoData.main.releaseTimeDate.date}
                          </Text>
                        ) : (
                          <Text
                            color="#7887A5"
                            fontSize="sm"
                            mb="2"
                            fontWeight="bold"
                          >
                            TBC
                          </Text>
                        )}
                      </Box>
                      <Box h="fit-content">
                        {seoData.main.releaseTimeDate && (
                          <Text color="#7887A5" fontSize="sm" mb="2" as="span">
                            {seoData.main.releaseTimeDate.time} GMT
                          </Text>
                        )}
                      </Box>
                      <Box h="fit-content">
                        {seoData.main.releaseTimeDate.styleCode != null &&
                        seoData.main.releaseTimeDate.styleCode != undefined ? (
                          <Text color="#7887A5" fontSize="sm">
                            Style Code:
                            {seoData.main.releaseTimeDate.styleCode}
                          </Text>
                        ) : (
                          <Text color="#7887A5" fontSize="sm">
                            Style Code: TBC
                          </Text>
                        )}
                      </Box>
                    </Grid>
                  </Box>
                </>
              </Box>
              <Box display={{ base: "none", md: "block" }}>
                <>
                  <Box display={{ base: "none", md: "block" }}>
                    <Flex
                      mt="11px"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      {status}
                      {seoData.main.releaseTimeDate != null &&
                      seoData.main.releaseTimeDate != undefined ? (
                        <Text
                          color="#7887A5"
                          fontSize="sm"
                          mb="2"
                          mr="2"
                          ml="2"
                        >
                          {seoData.main.releaseTimeDate.date}
                        </Text>
                      ) : (
                        <Text
                          color="#7887A5"
                          fontSize="sm"
                          mb="2"
                          mr="2"
                          ml="2"
                        >
                          TBC
                        </Text>
                      )}
                      {/* {
                        <Text
                          color="#7887A5"
                          mr="2"
                          ml="2"
                          fontSize="sm"
                          mb="2"
                        >
                          {seoData.main.releaseTimeDate &&
                            seoData.main.releaseTimeDate.date}
                        </Text>
                      } */}
                      {seoData.main.releaseTimeDate.styleCode != null &&
                      seoData.main.releaseTimeDate.styleCode != undefined ? (
                        <Text color="#7887A5" mr="2" fontSize="sm" mb="2">
                          Style Code:
                          {seoData.main.releaseTimeDate.styleCode}
                        </Text>
                      ) : (
                        <Text
                          color="#7887A5"
                          fontSize="sm"
                          mb="2"
                          mr="2"
                          ml="2"
                        >
                          Style Code: TBC
                        </Text>
                      )}
                    </Flex>
                  </Box>
                </>
              </Box>

              {seoData.main.releaseTimeDate && (
                <Text
                  color="#3E485D"
                  fontSize="lg"
                  fontWeight="600"
                  fontWeight="bold"
                  mt={2}
                >
                  £{seoData.main.releaseTimeDate.price}
                </Text>
              )}

              {/* end */}

              {/* for mobile  */}
              <Box display={{ base: "block", md: "none" }}>
                {seoData.main.content && (
                  <Text color="#666666" className="product-details">
                    <Html2React
                      html={
                        show
                          ? seoData.main.content
                          : seoData.main.content.substring(0, 400)
                      }
                    />
                  </Text>
                )}

                {seoData.main.content && seoData.main.content.length > 400 && (
                  <Stack
                    textAlign="center"
                    // display={{ base: "block", md: "none" }}
                    onClick={handleToggle}
                    mt="2"
                  >
                    <Text
                      color="#525F7A"
                      fontSize="sm"
                      // fontWeight="semibold"
                    >
                      Load {show ? "Less" : "More"}
                    </Text>
                    {/* <Icon as={FaChevronDown} boxSize={3} color="#525F7A" /> */}
                    <Stack alignItems="center" mt="0">
                      {show ? (
                        <FaChevronUp boxSize={2} color="#525F7A" />
                      ) : (
                        <FaChevronDown boxSize={2} color="#525F7A" />
                      )}
                    </Stack>
                  </Stack>
                )}
              </Box>
              {/* for large devices */}
              <Box display={{ base: "none", md: "block" }}>
                {seoData.main.content && (
                  <Text
                    color="#666666"
                    lineHeight={"26px"}
                    className="product-details"
                  >
                    <Html2React html={seoData.main.content} />
                  </Text>
                )}
              </Box>
              {/* add card componenet here */}
              {seoData.main.releseInfo && (
                <CardDetails
                  props={seoData.main.releseInfo}
                  title={seoData.main.title}
                />
              )}
              {/* end */}
            </Box>

            <Box>
              <Box mb="10">
                <Box
                  border="1px solid #C2C8D6"
                  p={{ base: "2", md: "6" }}
                  rounded="10px"
                >
                  {/* recent news */}
                  <Text
                    fontSize={{ base: "lg", md: "md", lg: "xl" }}
                    fontWeight="bold"
                    fontStyle="normal"
                    fontFamily="Martel"
                    color={"#3E485D"}
                    lineHeight="normal"
                    mb="4"
                  >
                    You can buy from here
                  </Text>
                  {/* main stock box */}
                  {/* Can buy section called by loadable  */}
                  {/* Can buy section called by loadable  */}
                  {/* <LazyLoad> */}
                  <LazyLoad>
                    <CanBuy prodData={seoData.main} />
                  </LazyLoad>

                  {/* </LazyLoad> */}

                  {/* end of Can buy section called by loadable  */}
                  {/* end of Can buy section called by loadable  */}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Box mb="6">
            <Box display="flex" justifyContent="space-between" mx={2}>
              <Heading
                mb="4"
                fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                fontWeight="bold"
                fontStyle="normal"
                color={"#3E485D"}
                lineHeight="normal"
              >
                You may also like{" "}
              </Heading>
              {/* view  */}

              <Stack alignItems="center">
                <ViewAllbtn link="sneaker-release-dates/status/on-focus/" />
              </Stack>
            </Box>
            <LazyLoad>
              <FocusOnSlider />
            </LazyLoad>
            <Stack
              alignItems="center"
              mt="20px !important"
              display={{ base: "block", md: "none" }}
            >
              <ViewAllMobile link="sneaker-release-dates/status/on-focus/" />
            </Stack>

            {/* view for mobile */}
            <Box mt="2" display="flex" justifyContent="space-around"></Box>
          </Box>

          <Box display={"block"}>
            <Box mb="15">
              <Heading
                // mb="2"
                fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                fontWeight="bold"
                fontStyle="normal"
                color={"#3E485D"}
                lineHeight="normal"
                mx={2}
              >
                Top Brands
              </Heading>
              <LazyLoad>
                <TopBrandSlider />
              </LazyLoad>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default connect(Productdetails);
