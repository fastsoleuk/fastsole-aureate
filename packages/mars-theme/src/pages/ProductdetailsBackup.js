import { Image } from "@chakra-ui/image";
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
import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaTimesCircle,
} from "react-icons/fa";
import Link from "@frontity/components/link";
import { connect, Head, loadable } from "frontity";
import $ from "jquery";

const TopBrandSlider = loadable(() => import("../component/TopBrandSlider"));
const FocusOnSlider = loadable(() => import("../component/FocusOnSlider"));
const Productslider = loadable(() =>
  import("../component/slider/Productslider")
);
const CanBuy = loadable(() => import("../component/CanBuy"));
const Breadcrumb = loadable(() => import("../component/Breadcrumb"));
const CardDetails = loadable(() => import("../component/CardDetails"));
const ViewAllMobile = loadable(() => import("../component/ViewAllMobile"));
const ViewAllbtn = loadable(() => import("../component/ViewAllbtn"));
const SkProductDetails = loadable(() =>
  import("../component/Skeleton/SkProductDetails")
);
import LazyLoad from "react-lazyload";
// import CanBuy from "../component/CanBuy";

const Productdetails = ({ state, libraries, actions }) => {
  const [isMobile] = useMediaQuery("(max-width: 400px)");

  const Html2React = libraries.html2react.Component;
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const [prodData, setprodData] = useState([]);

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

  console.log("str data from loop", strFirst, strLast);

  console.log("slug temp ", tempSlug);

  const finalSlug = slug.split("/");
  const slugLength = finalSlug.length - 2;
  console.log("answer_array", slug);
  const [sliderImage, setSliderImage] = useState({
    src: "",
    srcSet: "",
  });
  const [tmpFinalSlg, setTmpFinalSlg] = useState("");

  useEffect(() => {
    fetchData();
  }, [finalSlug[slugLength]]);

  const fetchData = async () => {
    const response =
      finalSlug &&
      (await libraries.source.api.get({
        endpoint: `/wl/v1/posts/${finalSlug[slugLength]}`,
      }));
    const postData = await response.json();

    actions.postWithCategory.updatePostData(postData);
    actions.postWithCategory.toggleLoading();

    setprodData(state.postWithCategory.postData);
    var featuredImage =
      state.postWithCategory.postData.featured_image &&
      state.postWithCategory.postData.featured_image.large;

    setSliderImage({
      src: featuredImage,
      srcSet: state.postWithCategory.postData.featured_image.srcset,
    });

    if (state.postWithCategory.postData != undefined) {
      var middleStr = "";
      var i = 0;
      state.postWithCategory.postData.categoryData.map((item) => {
        var tempSlg = item.slug;
        if (tempSlg != null) {
          middleStr = middleStr + tempSlg + "/";
        }
        console.log("data with step :", tempSlg);
        i++;
      });

      // console.log("middle str ", middleStr);
    }

    var tmpFinalSlg = strFirst + middleStr + strLast;

    console.log("final slug data temp", middleStr);
    setTmpFinalSlg(tmpFinalSlg);
  };
  prodData;

  // console.log("data from state", stmpFinalSlg);

  const prodStatus = prodData.releaseTimeDate && prodData.releaseTimeDate.stock;

  console.log(
    "datafromproduct",
    state.postWithCategory.postData.featured_image &&
      state.postWithCategory.postData.featured_image.srcset
  );

  const buyProdData = state.whereToBuy.postData;

  console.log("mydataget", prodData);

  if (prodStatus == "instock") {
    var status = (
      <Text color="#3EB75E" fontSize="sm" lineHeight="22px">
        <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
        In Stock
      </Text>
    );
  } else if (prodStatus == "coming_soon") {
    var status = (
      <Text color="#FF6600" fontSize="sm" lineHeight="22px">
        <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
        Coming Soon
      </Text>
    );
  } else if (prodStatus == "stockist_in_stock") {
    var status = (
      <Text color="#FF6600" fontSize="sm" lineHeight="22px">
        <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
        Stocklist In Stock
      </Text>
    );
  } else if (prodStatus == "restock") {
    var status = (
      <Text color="#FF6600" fontSize="sm" lineHeight="22px">
        <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
        Re Stock
      </Text>
    );
  } else if (prodStatus == "delayed") {
    var status = (
      <Text color="#FF6600" fontSize="sm" lineHeight="22px">
        <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
        Delayed
      </Text>
    );
  } else if (prodStatus == "sold_out") {
    var status = (
      <Text color="#FF6600" fontSize="sm" lineHeight="22px">
        <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
        Sold Out
      </Text>
    );
  } else if (prodStatus == "stockist_sold_out") {
    var status = (
      <Text color="#FF6600" fontSize="sm" lineHeight="22px">
        <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
        Stocklist Sold Out
      </Text>
    );
  } else {
    var status = (
      <Text color="#FF6600" fontSize="sm" lineHeight="22px">
        <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
        Nothing
      </Text>
    );
  }

  // const [seoTag, setseoTag] = useState([]);

  useEffect(() => {
    // seoSection();
  }, []);

  // console.log("finaldataforseo");

  // const seoSection = async () => {
  //   var response = await libraries.source.api.get({
  //     endpoint: `/wl/v1/schema-brands/${slug}`,
  //   });

  //   // setseoTag([]);

  //   const postData = await response.json();
  //   actions.schemaBrands.toggleLoading();
  //   // actions.schemaBrands.updatePostData(postData);
  //   // setseoTag(state.schemaBrands.postData);
  //   console.log(`/wl/v1/schema-brands/${slug}`);
  // };

  // console.log("schemadata", state.schemaBrands.postData);

  {
    // seoTag.meta && console.log("checkschema", seoTag.meta.fbAppId);
  }

  if (!state.postWithCategory.isLoading) {
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

  if (!state.postWithCategory.isLoading) {
    console.log("Javascript Testing ", "page loaded");

    giveSapcing(".product-details > p", "tag_type");
  }

  function giveSapcing(data, type) {
    console.log("fdsfjdkljfksdklfds = ", type);

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

  const pageData = state.source.get(state.router.link);

  const seoData = pageData.schemaData && pageData.schemaData;

  console.log("checksrc", sliderImage);

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

      {!state.postWithCategory.isLoading ? (
        prodData && (
          <Box mx={{ base: "6", md: "16", lg: "40" }}>
            {/* menu bradecrum */}
            <Box textAlign="center" mt="10" mb="10">
              {tmpFinalSlg != "" ? (
                <Breadcrumb breadcrumb={tmpFinalSlg} />
              ) : null}
            </Box>

            {/* Mobile Product SLider Start */}
            {isMobile ? (
              <>
                {console.log("dsfldsjlkfj", "mobile product slider")}
                <Box display={{ md: "none", base: "block", lg: "none" }}>
                  <Productslider prodData={prodData} />
                </Box>
              </>
            ) : null}

            <Grid
              templateColumns={{
                md: "1fr",
                lg: "1fr .7fr",
                sm: "repete(3, 1fr)",
              }}
              gap="6"
              mx={2}
            >
              {/* Grid first main section and extra push  */}
              <Box>
                <Box mb="10">
                  {/* Desktop Product SLider Start */}

                  {!isMobile ? (
                    <>
                      {console.log("dsfldsjlkfj", "desktop product slider")}
                      <Box
                        display={{ sm: "npne", base: "block" }}
                        className="container-img-div"
                      >
                        {sliderImage && (
                          <img
                            className="img-div"
                            borderRadius="lg"
                            width="700px"
                            height="450px"
                            src={sliderImage.src}
                            alt={prodData.title}
                            srcSet={sliderImage.srcSet}
                            loading="lazy"
                          />
                        )}
                      </Box>
                      <Box display={{ base: "none", lg: "flex" }} mt="4">
                        <Grid
                          templateColumns={{ md: "1fr 1fr 1fr 1fr 1fr" }}
                          gap="2"
                        >
                          {prodData.productImagesMain &&
                            prodData.productImagesMain
                              .slice(0, 5)
                              .map((image, index) => {
                                console.log("product image = ", image);
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
                                          console.log(
                                            "firstimage",
                                            sliderImage
                                          );
                                        }}
                                        alt={prodData.title}
                                        srcset={image[0].srcset}
                                        loading="lazy"
                                      />
                                    </Box>
                                  )
                                );
                              })}
                          {/* Object.values(prodData.productImagesMain)
                          .slice(0, 5)
                          .map((image) => {
                            return (
                              image && (
                                <Box>
                                  <Image
                                    borderRadius="lg"
                                    src={image.src}
                                    onClick={() => setSliderImage(image.src)}
                                    alt={prodData.title}
                                    srcset={image.srcset}
                                  />
                                </Box>
                              )
                            );
                          })} */}
                        </Grid>
                      </Box>
                    </>
                  ) : null}

                  {/* Desktop Product SLider End */}

                  <Box>
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
                      {prodData.title}
                    </Heading>
                    {/* for only mobile */}

                    {isMobile ? (
                      <>
                        {console.log("dsfldsjlkfj", "mobile text")}
                        <Box display={{ base: "block", md: "none" }}>
                          <Grid
                            templateColumns={{
                              md: "1fr 1fr 1fr 1fr",
                              base: ".5fr 1fr",
                            }}
                          >
                            <Box display="flex">{status}</Box>

                            <Box>
                              {prodData.releaseTimeDate && (
                                <Text color="#7887A5" fontSize="sm" mb="2">
                                  Release Date:
                                  {prodData.releaseTimeDate.date}
                                </Text>
                              )}
                            </Box>
                            <Box h="fit-content">
                              {prodData.releaseTimeDate && (
                                <Text
                                  color="#7887A5"
                                  fontSize="sm"
                                  mb="2"
                                  as="span"
                                >
                                  {prodData.releaseTimeDate.time} GMT
                                </Text>
                              )}
                            </Box>
                            <Box h="fit-content">
                              {prodData.releaseTimeDate && (
                                <Text color="#7887A5" fontSize="sm">
                                  Style Code:{" "}
                                  {prodData.releaseTimeDate.styleCode}
                                </Text>
                              )}
                            </Box>
                          </Grid>
                        </Box>
                      </>
                    ) : null}

                    {/* for only Desktop */}

                    {!isMobile ? (
                      <>
                        {console.log("dsfldsjlkfj", "desktop text")}
                        <Box display={{ base: "none", md: "block" }}>
                          <Flex
                            mt="11px"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                          >
                            {status}
                            <Text
                              color="#7887A5"
                              mr="2"
                              ml="2"
                              fontSize="sm"
                              mb="2"
                            >
                              {prodData.releaseTimeDate &&
                                prodData.releaseTimeDate.date}
                            </Text>
                            <Text color="#7887A5" mr="2" fontSize="sm" mb="2">
                              Style Code:{" "}
                              {prodData.releaseTimeDate &&
                                prodData.releaseTimeDate.styleCode}
                            </Text>
                          </Flex>
                        </Box>
                      </>
                    ) : null}

                    {prodData.releaseTimeDate && (
                      <Text
                        color="#3E485D"
                        fontSize="lg"
                        fontWeight="600"
                        fontWeight="bold"
                        mt={2}
                      >
                        £{prodData.releaseTimeDate.price}
                      </Text>
                    )}

                    {/* for mobile  */}
                    <Box display={{ base: "block", md: "none" }}>
                      {/* <Collapse startingHeight={305} in={show}> */}
                      {prodData.content && (
                        <Text color="#666666" className="product-details">
                          <Html2React
                            html={
                              show
                                ? prodData.content
                                : prodData.content.substring(0, 400)
                            }
                          />
                        </Text>
                      )}
                      {/* </Collapse> */}

                      {prodData.content && prodData.content.length > 400 && (
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
                      {prodData.content && (
                        <Text
                          color="#666666"
                          lineHeight={"26px"}
                          className="product-details"
                        >
                          <Html2React html={prodData.content} />
                        </Text>
                      )}
                    </Box>

                    {/* add card componenet here */}
                    {prodData.releseInfo && (
                      <CardDetails props={prodData.releseInfo} />
                    )}

                    {/* end */}
                  </Box>
                </Box>
              </Box>
              {/* Grid Second  main section */}
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
                      <CanBuy prodData={prodData} />
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
              <Box mt="2" display="flex" justifyContent="space-around">
                {/* <Button
                    variant="outline"
                    color="#9DA7BE"
                    colorScheme="#9DA7BE"
                    rounded="3px"
                    h="35px"
                    w="100px"
                    display={{ base: "block", md: "none" }}
                  >
                    <Text fontWeight="normal" fontSize="14px" color="#525F7A">
                      View All
                    </Text>
                  </Button> */}
              </Box>
            </Box>
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
                Top Brands{" "}
              </Heading>
              <LazyLoad>
                <TopBrandSlider />
              </LazyLoad>
            </Box>
          </Box>
        )
      ) : (
        <SkProductDetails />
      )}
    </>
  );
};

export default connect(Productdetails);
