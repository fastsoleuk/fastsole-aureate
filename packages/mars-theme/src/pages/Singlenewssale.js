import React from "react";
import {
  Stack,
  Box,
  Heading,
  Grid,
  Text,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Icon } from "@chakra-ui/react";

import {
  FaArrowDown,
  FaMapMarkerAlt,
  FaVoicemail,
  FaPhone,
  FaPhoneAlt,
  FaAngleRight,
  FaCheckCircle,
  FaChevronRight,
} from "react-icons/fa";

import {
  Paginator,
  Container,
  Previous,
  Next,
  PageGroup,
  usePaginator,
} from "chakra-paginator";
import TopBrandSlider from "../component/TopBrandSlider";

export default function Singlenewssale() {
  const pagesQuantity = 10;
  const { currentPage, setCurrentPage } = usePaginator({
    initialState: { currentPage: 1 },
  });

  return (
    <>
      <Box mx={{ base: "6", md: "16", lg: "40" }} mb="10">
        {/* about */}
        <Stack>
          <Box textAlign="center" mt="4" mb="6">
            <Text href="#" color="#7887A5" fontSize="xs">
              Home{" "}
              <Icon as={FaChevronRight} boxSize="2" mx="1" color="#7887A5" />
              About
              <Icon as={FaChevronRight} boxSize="2" mx="1" color="#7887A5" />
              Sale on Nike Air Max Sneakers at Foot Locker
            </Text>
          </Box>
          <Box bg="white" textColor="white" gap={6}>
            <Flex justifyContent="space-around" rounded="15">
              <Image
                rounded="15"
                // boxSize="50px"
                objectFit="contain"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/24.png"
                //   height="md"
              />
            </Flex>
          </Box>
        </Stack>
        {/* about us */}
        <Stack justifyContent="space-around" mb="16" mt="2">
          <Box>
            <Heading
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
              These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!
            </Heading>
            <Text color="#7887A5" fontSize="md" mb="8">
              10 Febuary 2021{" "}
            </Text>
            <Text color="#666666" fontFamily="Open Sans">
              {" "}
              Wake up sneaker hunters! There’s going to be a Sale on Nike Air
              Max Sneakers at Foot Locker and you definitely don’t wanna miss
              this sassy Swoosh parade! This entire lineup will include all the
              iconic and stylish Air Max trainers for running and sports, while
              the colour palette range varies from dark to soft.
            </Text>
            <Text mt="4" color="#666666" fontFamily="Open Sans">
              {" "}
              So, what’s the fuss about this sale? For starters, this offer is
              valid only from 26 February to 5th March. And all selected Swoosh
              kicks are 25% off!! In short, this sale is your surefire way to
              score high this season. Follow us on @FastSoleUK for further
              details on this Sale on Nike Air Max Sneakers at Foot Locker. For
              now, here we have some handpicked Nike Air Max stunners from the
              sale.
            </Text>
            <Text mt="4" color="#666666" fontFamily="Open Sans">
              {" "}
              For now, here we have some handpicked{" "}
              <Link color="red"> Nike Air Max stunners </Link>
              from the sale.
            </Text>
          </Box>
        </Stack>
        {/* big prduct section */}

        <Grid templateColumns={{ lg: ".8fr" }} justifyContent="space-around">
          <Box mb="16">
            <Box
              flexShrink={0}
              width={{ base: "100%", md: "100%", xl: "100%" }}
            >
              <Image
                w="100%"
                // width={{ md: 60 }}
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/21.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box
              display="flex"
              mt={{ base: 6, md: 6 }}
              // ml={{ base: 2, md: 3 }}
              justifyContent="space-between"
            >
              <Link
                // mt={1}
                display="block"
                fontSize={{ base: "md", md: "md", lg: "lg" }}
                lineHeight="normal"
                href="#"
                fontStyle="normal"
                fontFamily="Martel"
                color={"#3E485D"}
                mb="1"
                // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Link>
              <Text fontSize="md" color="#3E485D" fontWeight="bold">
                $100..00
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="baseline"
              justifyContent="space-between"
            >
              <Text
                mr="2"
                color="#3EB75E"
                fontSize="sm"
                fontFamily="Open Sans"
                lineHeight="22px"
                mb="1"
              >
                <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
                In Stock
              </Text>
              <Button px="6" rounded="sm" bg="#3EB75E" size="sm" color="white">
                View Now
              </Button>
            </Box>
          </Box>
          <Box mb="16">
            <Box
              flexShrink={0}
              width={{ base: "100%", md: "100%", xl: "100%" }}
            >
              <Image
                w="100%"
                // width={{ md: 60 }}
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/14.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box
              display="flex"
              mt={{ base: 6, md: 6 }}
              // ml={{ base: 2, md: 3 }}
              justifyContent="space-between"
            >
              <Link
                // mt={1}
                display="block"
                fontSize={{ base: "md", md: "md", lg: "lg" }}
                lineHeight="normal"
                href="#"
                fontStyle="normal"
                fontFamily="Martel"
                color={"#3E485D"}
                mb="1"
                // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Link>
              <Text fontSize="md" color="#3E485D" fontWeight="bold">
                $100..00
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="baseline"
              justifyContent="space-between"
            >
              <Text
                mr="2"
                color="#3EB75E"
                fontSize="sm"
                fontFamily="Open Sans"
                lineHeight="22px"
                mb="1"
              >
                <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
                In Stock
              </Text>
              <Button px="6" rounded="sm" bg="#3EB75E" size="sm" color="white">
                View now
              </Button>
            </Box>
          </Box>
          <Box mb="16">
            <Box
              flexShrink={0}
              width={{ base: "100%", md: "100%", xl: "100%" }}
            >
              <Image
                w="100%"
                // width={{ md: 60 }}
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/22.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box
              display="flex"
              mt={{ base: 6, md: 6 }}
              // ml={{ base: 2, md: 3 }}
              justifyContent="space-between"
            >
              <Link
                // mt={1}
                display="block"
                fontSize={{ base: "md", md: "md", lg: "lg" }}
                lineHeight="normal"
                href="#"
                fontStyle="normal"
                fontFamily="Martel"
                color={"#3E485D"}
                mb="1"
                // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Link>
              <Text fontSize="md" color="#3E485D" fontWeight="bold">
                $100..00
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="baseline"
              justifyContent="space-between"
            >
              <Text
                mr="2"
                color="#3EB75E"
                fontSize="sm"
                fontFamily="Open Sans"
                lineHeight="22px"
                mb="1"
              >
                <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
                In Stock
              </Text>
              <Button px="6" rounded="sm" bg="#3EB75E" size="sm" color="white">
                View now
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* Top rated product slider */}
        <TopBrandSlider />
        {/* Recent Nike News  */}
        <Box mt="16">
          <Box display="flex" justifyContent="space-between" mb="4">
            <Text
              fontSize={{ base: "xl", md: "lg", lg: "2xl" }}
              fontWeight="bold"
              fontFamily="Martel"
              color="#3E485D"
            >
              Recent Nike News
            </Text>
            <Button
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
          </Box>
          <Grid
            templateColumns={{
              md: "1fr 1fr 1fr",
              sm: "repeat(3, 1fr)",
            }}
            textColor="white"
            gap={8}
            mb="10"
          >
            <Box>
              <Box>
                <Image
                  rounded="lg"
                  objectFit="contain"
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/23.png"
                  w="100%"
                  h="100%"
                  rounded="md"
                  mb="2"
                />

                <Box>
                  <Text color="#7887A5" fontSize="md">
                    10 Febuary 2021{" "}
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "md", lg: "xl" }}
                    fontWeight="bold"
                    fontStyle="normal"
                    fontFamily="Martel"
                    color={"#3E485D"}
                    lineHeight="normal"
                  >
                    These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!{" "}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Image
                  rounded="lg"
                  objectFit="contain"
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/15.png"
                  w="100%"
                  h="100%"
                  rounded="md"
                  mb="2"
                />

                <Box>
                  <Text color="#7887A5" fontSize="md">
                    10 Febuary 2021{" "}
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "md", lg: "xl" }}
                    fontWeight="bold"
                    fontStyle="normal"
                    fontFamily="Martel"
                    color={"#3E485D"}
                    lineHeight="normal"
                  >
                    These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!{" "}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Image
                  rounded="lg"
                  objectFit="contain"
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/19.png"
                  w="100%"
                  h="100%"
                  rounded="md"
                  mb="2"
                />

                <Box>
                  <Text color="#7887A5" fontSize="md">
                    10 Febuary 2021{" "}
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "md", lg: "xl" }}
                    fontWeight="bold"
                    fontStyle="normal"
                    fontFamily="Martel"
                    color={"#3E485D"}
                    lineHeight="normal"
                  >
                    These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!{" "}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
