import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Heading, Text, Stack } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";

import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import {
  FaCheckCircle,
  FaChevronRight,
  FaMapMarkerAlt,
  FaMarker,
  FaPhoneAlt,
} from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import FooterComponent from "../component/FooterComponent";
import Link from "@frontity/components/link";
import { connect } from "frontity";
import Breadcrumb from "../component/Breadcrumb";

function Contact({ state, libraries, actions }) {
  const Html2React = libraries.html2react.Component;
  const contactData = state.source.page[62144];
  const authorData = state.source.author;
  const path = state.router.link;

  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    fetchData();
    fetchDataRelatedCategory();
  }, [dataLoaded]); //update by Santosh

  const fetchData = async () => {
    const response = await libraries.source.api.get({
      endpoint: "/wl/v1/on-focus",
    });

    const categoryTabPostData = await response.json();

    console.log("category tab post = ", categoryTabPostData);

    actions.onFocus.toggleLoading();
    actions.onFocus.updatePostData(categoryTabPostData);
  };
  const fetchDataRelatedCategory = async () => {
    const response = await libraries.source.api.get({
      endpoint: "/wl/v1/on-focus",
    });

    const categoryTabPostData = await response.json();
    actions.onFocus.toggleLoading();
    actions.onFocus.updatePostData(categoryTabPostData);
  };
  const relatedCategory = state.onFocus.postData;

  const relatedData =
    relatedCategory &&
    relatedCategory.sort(function (a, b) {
      return b.release_date_int - a.release_date_int;
    });
  return (
    <>
      <Stack
        mx={{ base: "6", md: "20", lg: "40" }}
        mt={{ base: "30px", md: "none" }}
        mb="30px !important"
      >
        {/* menu bradecrum */}

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
            Contact
          </Heading>
          {path && <Breadcrumb breadcrumb={path} />}
        </Stack>

        <Grid
          templateColumns={{ md: "1fr", lg: "1fr .7fr", sm: "repete(3, 1fr)" }}
          gap={{ lg: "30", xl: "44" }}
        >
          {/* Grid first main section */}

          <Box
            display="flex"
            mt={6}
            textAlign="center"
            justifyContent="space-around"
            mb="16"
          >
            <Text color="#3E485D">
              {contactData && (
                <Html2React html={contactData.content.rendered} />
              )}
            </Text>
          </Box>

          {/* Static data */}

          {/* Grid Second  main section */}
          <Box>
            {/* Related Product */}
            <Box mb="10">
              <Heading
                mt={6}
                _hover={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
                fontSize={{ base: "lg", md: "lg", lg: "lg" }}
                lineHeight="normal"
                fontWeight="bold"
                color="#3E485D"
                fontFamily="Martel"
                mb="10px"
              >
                Related Products
              </Heading>

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

                {/* <Link link="/singlenews"> */}
              </Box>
            </Box>
          </Box>
        </Grid>
        <FooterComponent />
      </Stack>

      <Box h={100} background="#F3F4F7"></Box>
    </>
  );
}
export default connect(Contact);
