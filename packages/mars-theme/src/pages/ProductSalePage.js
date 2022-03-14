import {
  Box,
  Circle,
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
  Image,
  Icon,
  useDisclosure,
  HStack,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronDown,
  FaChevronRight,
  FaCircle,
  FaSlidersH,
} from "react-icons/fa";
import FocusOnSlider from "../component/FocusOnSlider";
import Link from "@frontity/components/link";
import Moment from "moment";
import connect from "@frontity/connect";
import Breadcrumb from "../component/Breadcrumb";
import { css } from "frontity";

function ProductSalePage({ state }) {
  const brandList = [
    "Asics",
    "Adidas",
    "Nike jordan",
    "Ultra boost",
    "Asics GEl LYTE 1111",
  ];

  const MoreOffer = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const data = state.source.get(state.router.link);
  let breadCumbData = data.link;

  return (
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
          First sole sales
        </Heading>
        <Breadcrumb breadcrumb={breadCumbData} />
      </Stack>

      {/* <Image
                    mt="30px !important"
                    rounded="lg"
                    objectFit="contain"
                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/33.png"
                    w="100%"
                    h="100%"
                    rounded="md"
                    mb="2"
                /> */}

      <Flex
        w={"full"}
        h={"55vh"}
        rounded="md"
        backgroundImage={
          "url(https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/33.png)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          rounded="md"
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-t, blackAlpha.800, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Heading
              color={"white"}
              fontSize={useBreakpointValue({ base: "xl", md: "3xl" })}
            >
              Trainers on sale
            </Heading>
          </Stack>
        </VStack>
      </Flex>

      <Text
        textAlign="center"
        my="20px !important"
        color="#3E485D"
        fontSize="sm"
      >
        Don’t miss our selection of the greatest offers and deals on trainers
        hand-picked from the UK’s biggest retailers including Nike, adidas, END
        Clothing, Footasylum and more. With everything from voucher codes to
        dedicated sneakers sale guides, here is everything you need to grab that
        next bargain! Bookmark this page, sign up to our newsletter and download
        our app for more sale updates and alerts.
      </Text>

      <HStack
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
          Filter
        </Text>
        <Wrap direction="row" ml="0px !important">
          {brandList.map((data, index) => {
            return (
              <WrapItem>
                <Center
                  as="span"
                  bg="#F3F4F7"
                  px={2}
                  py={1}
                  borderRadius="md"
                  borderRadius="md"
                  fontSize="13px"
                >
                  {data}
                </Center>
              </WrapItem>
            );
          })}
        </Wrap>
      </HStack>

      <Stack pt={{ base: "1", md: "8" }}>
        <Flex justifyContent="space-between" alignItems="baseline">
          <Heading
            mb={4}
            fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
            color={"#3E485D"}
            fontWeight="bold"
            fontStyle="normal"
            color={"#3E485D"}
            lineHeight="normal"
          >
            {" "}
            Top Retailers
          </Heading>
        </Flex>

        <Grid
          templateColumns={{
            xl: "1fr 1fr 1fr 1fr",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          textColor="white"
          gap={2}
        >
          <Box mx="3" my="3">
            <Image
              borderRadius="lg"
              w="100%"
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/15.png"
              alt="there is no image"
              lineHeight="22px"
            />

            <Box
              position="absolute"
              bg="rgba(255, 255, 255, 0.9)"
              mt={-24}
              ml={{ base: "16", lg: "4" }}
              p="3"
              rounded="md"
            >
              <Heading
                as="h4"
                rounded="3px"
                color="#3E485D"
                fontSize="16px"
                textAlign="center"
              >
                Up to 50% off
              </Heading>
              <Text as="span" color="#7887A5" fontSize="12px">
                MID SEASON SALE
              </Text>

              <Text color="#F12026" fontSize="14px">
                <Link link="/black-friday">Go to deal</Link>
                <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>

            <Flex mt={2} alignItems="center">
              <Image
                rounded="full"
                w="40px"
                h="40px"
                src="https://bit.ly/2jYM25F"
                mr={1}
              />
              <Text fontWeight="500" color="black" fontSize="14px">
                Adidas{" "}
              </Text>
            </Flex>
          </Box>

          <Box mx="3" my="3">
            <Image
              borderRadius="lg"
              w="100%"
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/15.png"
              alt="there is no image"
              lineHeight="22px"
            />

            <Box
              position="absolute"
              bg="rgba(255, 255, 255, 0.9)"
              mt={-24}
              ml={{ base: "16", lg: "4" }}
              p="3"
              rounded="md"
            >
              <Heading
                as="h4"
                rounded="3px"
                color="#3E485D"
                fontSize="16px"
                textAlign="center"
              >
                Up to 50% off
              </Heading>
              <Text as="span" color="#7887A5" fontSize="12px">
                MID SEASON SALE
              </Text>

              <Text color="#F12026" fontSize="14px">
                <Link link="/black-friday">Go to deal</Link>
                <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>

            <Flex mt={2} alignItems="center">
              <Image
                rounded="full"
                w="40px"
                h="40px"
                src="https://bit.ly/2jYM25F"
                mr={1}
              />
              <Text fontWeight="500" color="black" fontSize="14px">
                Adidas{" "}
              </Text>
            </Flex>
          </Box>

          <Box mx="3" my="3">
            <Image
              borderRadius="lg"
              w="100%"
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/15.png"
              alt="there is no image"
              lineHeight="22px"
            />

            <Box
              position="absolute"
              bg="rgba(255, 255, 255, 0.9)"
              mt={-24}
              ml={{ base: "16", lg: "4" }}
              p="3"
              rounded="md"
            >
              <Heading
                as="h4"
                rounded="3px"
                color="#3E485D"
                fontSize="16px"
                textAlign="center"
              >
                Up to 50% off
              </Heading>
              <Text as="span" color="#7887A5" fontSize="12px">
                MID SEASON SALE
              </Text>

              <Text color="#F12026" fontSize="14px">
                <Link link="/black-friday">Go to deal</Link>
                <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>

            <Flex mt={2} alignItems="center">
              <Image
                rounded="full"
                w="40px"
                h="40px"
                src="https://bit.ly/2jYM25F"
                mr={1}
              />
              <Text fontWeight="500" color="black" fontSize="14px">
                Adidas{" "}
              </Text>
            </Flex>
          </Box>

          <Box mx="3" my="3">
            <Image
              borderRadius="lg"
              w="100%"
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/15.png"
              alt="there is no image"
              lineHeight="22px"
            />

            <Box
              position="absolute"
              bg="rgba(255, 255, 255, 0.9)"
              mt={-24}
              ml={{ base: "16", lg: "4" }}
              p="3"
              rounded="md"
            >
              <Heading
                as="h4"
                rounded="3px"
                color="#3E485D"
                fontSize="16px"
                textAlign="center"
              >
                Up to 50% off
              </Heading>
              <Text as="span" color="#7887A5" fontSize="12px">
                MID SEASON SALE
              </Text>

              <Text color="#F12026" fontSize="14px">
                <Link link="/black-friday">Go to deal</Link>
                <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>

            <Flex mt={2} alignItems="center">
              <Image
                rounded="full"
                w="40px"
                h="40px"
                src="https://bit.ly/2jYM25F"
                mr={1}
              />
              <Text fontWeight="500" color="black" fontSize="14px">
                Adidas{" "}
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Stack>

      <Stack py={10}>
        <Flex justifyContent="space-between" alignItems="baseline">
          <Heading
            mb={4}
            fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
            color={"#3E485D"}
            fontWeight="bold"
            fontStyle="normal"
            color={"#3E485D"}
            lineHeight="normal"
          >
            {" "}
            On Focus
          </Heading>
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
              link="/productdetails"
              css={css`
                font-size: 14px;
                vertical-align: middle;
              `}
              fontWeight="100"
            >
              View All
            </Link>
          </Box>

          {/* <Box>
            <Link link="/productdetails">
              <Button
                rounded="3"
                variant="outline"
                color="#9DA7BE"
                colorScheme="#9DA7BE"
                h="35px"
                w="100px"
                display={{ base: "none", md: "block" }}
              >
                <Text fontWeight="normal" fontSize="14px" color="#525F7A">
                  View All
                </Text>
              </Button>
            </Link>
          </Box> */}
        </Flex>

        <FocusOnSlider />
        {/* view for mobile */}
        <Stack alignItems="center" my="10px !important">
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
              link="/productdetails"
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
        {/* <Stack alignItems="center" my="10px !important">
          <Button
            rounded="3"
            variant="outline"
            color="#9DA7BE"
            colorScheme="#9DA7BE"
            h="35px"
            w="100px"
            display={{ base: "block", md: "none" }}
          >
            <Text fontWeight="normal" fontSize="14px" color="#525F7A">
              View All
            </Text>
          </Button>
        </Stack> */}
      </Stack>

      <Stack>
        <Heading
          mb={4}
          fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
          color={"#3E485D"}
          fontWeight="bold"
          fontStyle="normal"
          color={"#3E485D"}
          lineHeight="normal"
        >
          More Offer
        </Heading>

        <Grid
          templateColumns={{ md: "6fr 6fr", sm: "repeat(1, 1fr)" }}
          textColor="white"
          gap={2}
        >
          {MoreOffer.map((data, index) => {
            return (
              <Box display={{ md: "flex", base: "flex" }} mb="3">
                <Box
                  flexShrink={0}
                  width={{ base: "38%", md: "49%", xl: "40%" }}
                >
                  <Image
                    borderRadius="lg"
                    w="100%"
                    border="1px solid gray"
                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424.png"
                    alt="Woman paying for a purchase"
                  />
                </Box>
                <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
                  <Heading
                    // mt={1}
                    as="h3"
                    display="block"
                    fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                    lineHeight="normal"
                    color={"#3E485D"}
                    noOfLines={2}
                    // pb="1"
                  >
                    Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
                  </Heading>
                  <Flex
                    justifyContent={"flex-start"}
                    flexDirection={{
                      base: "row",
                      md: "column",
                      lg: "column",
                      xl: "row",
                    }}
                  >
                    <Text
                      as="span"
                      color="#7887A5"
                      fontSize={{ base: "xs", md: "sm" }}
                      mr="3"
                    >
                      10 feb 2021
                    </Text>
                    <Text
                      as="span"
                      color="#7887A5"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      <Icon as={FaCircle} boxSize={2} /> adum chung
                    </Text>
                  </Flex>

                  <Text
                    color="#F12026"
                    fontSize={{ base: "xs", md: "sm" }}
                    display={{ base: "none", md: "block" }}
                  >
                    <Link>read more</Link>
                    <Icon as={FaChevronRight} boxSize={3} />
                  </Text>
                </Box>
              </Box>
            );
          })}

          {/* <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-1.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-2.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-3.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-4.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-5.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-6.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-7.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-8.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box>

          <Box display={{ md: "flex", base: "flex" }} mb="3">
            <Box flexShrink={0} width={{ base: "38%", md: "49%", xl: "40%" }}>
              <Image
                borderRadius="lg"
                w="100%"
                border="1px solid gray"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-424-9.png"
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 0, md: 0 }} ml={{ base: 2, md: 3 }}>
              <Heading
                // mt={1}
                display="block"
                fontSize={{ base: "xs", md: "sm", lg: "sm", xl: "lg" }}
                lineHeight="normal"
                color={"#3E485D"}
                noOfLines={2}
              // pb="1"
              >
                Valentines Day Promotion 2021” Get 20% Off At Nike{" "}
              </Heading>
              <Flex justifyContent={"flex-start"} flexDirection={{ base: "row", md: "column", lg: "column", xl: "row" }}>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }} mr="3">
                  10 feb 2021
                </Text>
                <Text color="#7887A5" fontSize={{ base: "xs", md: "sm" }}>
                  <Icon as={FaCircle} boxSize={2} /> adum chung
                </Text>
              </Flex>

              <Text
                color="#F12026"
                fontSize={{ base: "xs", md: "sm" }}
                display={{ base: "none", md: "block" }}
              >
                read more <Icon as={FaChevronRight} boxSize={3} />
              </Text>
            </Box>
          </Box> */}
        </Grid>
      </Stack>

      {/* <Text color={"black"} textAlign={"center"} fontWeight={"bold"}>
        Required Pagination....
      </Text> */}

      <Stack textAlign="center" display={{ base: "block", md: "none" }}>
        <Text color="#525F7A" fontSize="xs" fontWeight="semibold">
          Load more
        </Text>
        <Icon as={FaChevronDown} boxSize={3} color="#525F7A" />
      </Stack>
      {/* pagination start */}

      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        my="6"
      >
        <span>
          <Circle
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            mr={2}
          >
            <FaAngleDoubleLeft
              color="#9DA7BE"
              boxSize="2"
              // onClick={() => clickNumber(1)}
            />
          </Circle>
        </span>
        <span>
          <Circle
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            mr={4}
          >
            <FaChevronLeft
              color="#9DA7BE"
              boxSize="2"
              // onClick={() =>
              //   clickNumber(currentPage > 1 ? currentPage - 1 : 1)
              // }
            />
          </Circle>
        </span>
        {/* {firstLoop &&
                firstLoop.map((x) => {
                  return ( */}
        <Box>
          <span>
            <Circle
              px="3"
              color="#9DA7BE"
              _hover={{ bg: "#3E485D !important" }}
              _active={{ bg: "#3E485D !important" }}
              py="1"
              mx="1"
              border="1px solid #9DA7BE"
              // onClick={() => clickNumber(x)}
              // bg={currentPage === x ? "#3E485D" : null}
            >
              1{/* {x} */}
            </Circle>
          </span>
        </Box>
        {/* //     );
              //   })}
              // {secondLoop.length > 0 && ( */}
        <Stack justifyContent="flex-end" color="#3E485D">
          <Text fontSize="x-large">....</Text>
        </Stack>
        {/* // )}

              // {secondLoop &&
                secondLoop.map((x) => {
                  return ( */}
        <Box>
          <span>
            <Circle
              px="3"
              color="#9DA7BE"
              _hover={{ bg: "#3E485D !important" }}
              _active={{ bg: "#3E485D !important" }}
              py="1"
              mx="1"
              border="1px solid #9DA7BE"
              // onClick={() => clickNumber(x)}
              // bg={currentPage === x ? "#3E485D" : null}
            >
              {/* {x} */}3
            </Circle>
          </span>
        </Box>
        {/* );
                })} */}
        <span>
          <Circle
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            ml={4}
          >
            <FaChevronRight
              color="#9DA7BE"
              boxSize="2"
              // onClick={() =>
              //   clickNumber(
              //     currentPage < numberPost ? currentPage + 1 : numberPost
              //   )
              // }
            />
          </Circle>
        </span>
        <span>
          <Circle
            p="2"
            border="1px solid #9DA7BE"
            _hover={{ bg: "#3E485D !important" }}
            ml={2}
          >
            <FaAngleDoubleRight
              color="#9DA7BE"
              boxSize="2"
              // onClick={() => clickNumber(numberPost)}
            />
          </Circle>
        </span>
      </Box>

      {/* pagination end */}
    </Stack>
  );
}

export default connect(ProductSalePage);
