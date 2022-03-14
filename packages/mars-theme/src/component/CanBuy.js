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
import { connect, Head } from "frontity";

const CanBuy = ({ prodData }) => {
  console.log("product data export", prodData);
  return (
    <Box>
      {/* start stock products */}
      {prodData.buyFromHere &&
        Object.values(prodData.buyFromHere).map((item, index) => {
          console.log("wheretobuyy", item);

          if (item.stockStatus === "In Stock") {
            var status = (
              <Text
                color="#3EB75E"
                fontSize={{
                  base: "sm",
                  lg: "sm",
                }}
                lineHeight="22px"
                textAlign="center"
              >
                <Icon as={FaCheckCircle} boxSize="3" mr={2} color={"#3EB75E"} />
                {item.stockStatus}
              </Text>
            );
          } else if (item.stockStatus == "Sold Out") {
            var status = (
              <Text
                color="#F12026"
                fontSize={{
                  base: "sm",
                  lg: "sm",
                }}
                lineHeight="22px"
                textAlign="center"
              >
                <Icon as={FaTimesCircle} boxSize="3" mr={2} color="#F12026" />
                {item.stockStatus}
              </Text>
            );
          } else if (item.stockStatus == "Coming Soon") {
            var status = (
              <Text
                color="#FF6600"
                fontSize={{
                  base: "sm",
                  lg: "sm",
                }}
                lineHeight="22px"

                // textAlign="center"
              >
                <Icon as={FaClock} boxSize="3" mr={2} color="#FF6600" />
                {item.stockStatus}
              </Text>
            );
          } else if (item.stockStatus == "TBC") {
            var status = (
              <Text
                color="#FEBE15"
                fontSize={{
                  base: "sm",
                  lg: "sm",
                }}
                textAlign="center"
                lineHeight="22px"
              >
                {item.stockStatus}
              </Text>
            );
          } else if (item.stockStatus == "Reseller") {
            var status = (
              <Text
                color="#3EB75E"
                fontSize={{
                  base: "sm",
                  lg: "sm",
                }}
                lineHeight="22px"
                textAlign="center"
              >
                <Icon as={FaClock} boxSize="3" mr={2} color="#3EB75E" />
                {item.stockStatus}
              </Text>
            );
          } else if (item.stockStatus == "Raffle") {
            var status = (
              <Text
                color="#FF6600"
                fontSize={{
                  base: "sm",
                  lg: "sm",
                }}
                lineHeight="22px"
                textAlign="center"
              >
                <Icon as={FaClock} boxSize="3" mr={2} color="#FF6600" />
                {item.stockStatus}
              </Text>
            );
          }

          // raffle

          // "Reseller"
          else {
            var status = (
              <Text
                color="#FF6600"
                fontSize={{
                  base: "sm",
                  lg: "sm",
                }}
                lineHeight="22px"
                textAlign="center"
              >
                <Icon as={FaClock} boxSize="3" mr={2} color={"#FF6600"} />
                Nothing
              </Text>
            );
          }
          return (
            item && (
              <Box key={"ProductDetals2-" + index}>
                <Box
                  display={{ base: "flex", lg: "flex" }}
                  alignItems="center"
                  mb="3"
                  mt="6"
                >
                  <Box
                    flexShrink={0}
                    width={{ base: "30%", xl: "20%" }}
                    className="container-img"
                  >
                    <img
                      className="productdetail-img-div"
                      borderRadius="lg"
                      width="130px"
                      height="78px"
                      src={item.shopLogo}
                      alt={item.statusButton}
                      loading="lazy"
                    />
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    width={{
                      base: "70%",
                      xl: "80%",
                      md: "100%",
                    }}
                    mt={{ base: 0, md: 0 }}
                    ml={{ base: 1, md: 3 }}
                    justifyContent="space-between"
                  >
                    <Box pr={"10px"}>
                      {status && status}

                      {item.stockStatus == "Coming Soon" && (
                        <Text mr="2" fontSize="12px" lineHeight="22px" mb="1">
                          {item.releseDate} {item.releseTime}
                        </Text>
                      )}
                    </Box>
                    <Box alignItems="baseline">
                      <Link link={item.affiliateUrl}>
                        <Button
                          px="4"
                          size="sm"
                          rounded="sm"
                          colorScheme="#3EB75E"
                          bg={
                            item.stockStatus == "In Stock" ||
                            item.stockStatus == "Reseller"
                              ? "#3EB75E"
                              : item.stockStatus == "Sold Out"
                              ? "#F12026"
                              : item.stockStatus == "Coming Soon"
                              ? "#FF6600"
                              : item.stockStatus == "Raffle"
                              ? "#FF6600"
                              : item.stockStatus == "TBC"
                              ? "#FEBE15"
                              : "yellow"
                          }
                          w={{ base: "90px", md: "95px" }}
                          h="35px"
                          color="white"
                          fontSize={{
                            base: "12px",
                            lg: "sm",
                          }}
                        >
                          {item.statusButton}
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>

                <Divider />
              </Box>
            )
          );
        })}

      {/* end stock products */}
    </Box>
    // <div>ok</div>
  );
};

export default connect(CanBuy);
