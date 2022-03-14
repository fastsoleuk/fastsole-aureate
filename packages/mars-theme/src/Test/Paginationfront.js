import {
  Box,
  Grid,
  Link,
  Circle,
  Stack,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
// import Icon from "@chakra-ui/icon";
import { FaClock, FaTimesCircle } from "react-icons/fa";

import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { connect } from "frontity";

const Paginationfront = ({ prop, state, libraries, stockValue }) => {
  console.log("stock value ", stockValue);
  const Html2React = libraries.html2react.Component;

  if (prop.length !== 0) {
    var allPost = prop[0].totalPost;
  } else {
    var allPost = 100;
  }

  console.log("testing=", prop);
  let numberPost = Math.ceil(allPost / 12);

  let numberPostArr = [];
  let secondNumber = [];

  for (let i = 1; i <= numberPost; i++) {
    if (i < 4) {
      numberPostArr[i] = i;
    } else if (i > numberPost - 2) {
      secondNumber[i] = i;
    }
  }
  const [firstLoop, setFirstLoop] = useState(numberPostArr);
  const [secondLoop, setSecondLoop] = useState(secondNumber);

  console.log("secondLoo", secondNumber);

  const [currentPage, setCurrentPage] = useState(1);
  const [postIndex, setPostIndex] = useState({ min: 1, max: 13 });

  const clickNumber = (x) => {
    let MaxIndex = 13 * x;
    let MinIndex = MaxIndex - 12;
    setPostIndex({ min: MinIndex, max: MaxIndex });
    setCurrentPage(x);

    var temp = [];
    var secondArr = [];

    if (!firstLoop.includes(x) && !secondLoop.includes(x)) {
      temp[x] = x;
      temp[x - 1] = x - 1;
      setFirstLoop(temp);
    } else {
      temp[1] = 1;
      temp[2] = 2;
      setFirstLoop(temp);
      setFirstLoop(temp);
    }
  };
  console.log("post index", postIndex);
  console.log("firstLoop", firstLoop);

  const [posts, setPosts] = useState(allPost);
  return (
    <>
      <Box>
        <Grid
          templateColumns={{
            md: "1fr 1fr 1fr 1fr",
            base: "repeat(2, 1fr)",
          }}
          gap={4}
          mb="10"
        >
          {prop.length !== 0 && prop.length > 1 ? (
            prop.slice(postIndex.min, postIndex.max).map((item) => {
              // console.log("postIndex", postIndex);
              if (item.sneaker_status == "coming_soon") {
                var status = (
                  <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                    <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                    Coming Soon
                  </Text>
                );
              } else if (item.sneaker_status == "stockist_in_stock") {
                var status = (
                  <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                    <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                    Stocklist In Stock
                  </Text>
                );
              } else if (item.sneaker_status == "restock") {
                var status = (
                  <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                    <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                    Re Stock
                  </Text>
                );
              } else if (item.sneaker_status == "delayed") {
                var status = (
                  <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                    <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                    Delayed
                  </Text>
                );
              } else if (item.sneaker_status == "sold_out") {
                var status = (
                  <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                    <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                    Sold Out
                  </Text>
                );
              } else if (item.sneaker_status == "stockist_sold_out") {
                var status = (
                  <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                    <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                    Stocklist Sold Out
                  </Text>
                );
              } else {
                var status = (
                  <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                    <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                    Nothing
                  </Text>
                );
              }

              return (
                <Box p={2} border="1px solid #9DA7BE" rounded="lg">
                  <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
                    {item.release_date}
                  </Text>
                  <Image
                    borderRadius="lg"
                    // w="100%"
                    src={item.featured_image.medium}
                    lineHeight="22px"
                  />
                  {/* <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
                    <Icon
                      as={FaCheckCircle}
                      boxSize="3"
                      mr={1}
                      color={"#3EB75E"}
                    />
                    {status}
                  </Text> */}
                  {status}

                  <Text
                    fontWeight="600"
                    color="#3E485D"
                    fontSize="xs"
                    lineHeight="22px"
                    fontStyle="normal"
                  >
                    {item.post_title.substring(0, 30)}
                  </Text>

                  <Text
                    fontWeight="bold"
                    color="#525F7A"
                    fontSize="xs"
                    lineHeight="22px"
                  >
                    ${item.esc_price}
                  </Text>

                  <Link
                    link="/productdetails"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      lineHeight="22px"
                      size="xs"
                      color="#3E485D"
                      variant="unstyled"
                      border="1px solid #9DA7BE"
                      w={"full"}
                      h="30px"
                      my={2}
                      rounded="3"
                      _hover={{ bg: "#525F7A", color: " white" }}
                    >
                      View Now
                    </Button>
                  </Link>
                </Box>
              );
            })
          ) : (
            <Box h="50vh" w="100%" alignContent="center" alignItems="center">
              {" "}
              <Text
                color="black"
                colorScheme="black"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                Product Not Available
              </Text>
            </Box>
          )}
        </Grid>
        <Box display={{ base: "none", md: "flex" }} justifyContent="center">
          <Link>
            <Circle
              p="2"
              border="1px solid #9DA7BE"
              _hover={{ bg: "#3E485D !important" }}
              mr={2}
            >
              <FaAngleDoubleLeft
                color="#9DA7BE"
                boxSize="2"
                onClick={() => clickNumber(1)}
              />
            </Circle>
          </Link>
          <Link>
            <Circle
              p="2"
              border="1px solid #9DA7BE"
              _hover={{ bg: "#3E485D !important" }}
              mr={6}
            >
              <FaChevronLeft
                color="#9DA7BE"
                boxSize="2"
                onClick={() =>
                  clickNumber(currentPage > 1 ? currentPage - 1 : 1)
                }
              />
            </Circle>
          </Link>
          {firstLoop &&
            firstLoop.map((x) => {
              return (
                <Box>
                  <Link>
                    <Circle
                      px="3"
                      color="#9DA7BE"
                      _hover={{ bg: "#3E485D !important" }}
                      _active={{ bg: "#3E485D !important" }}
                      py="1"
                      mx="1"
                      border="1px solid #9DA7BE"
                      onClick={() => clickNumber(x)}
                      bg={currentPage === x ? "#3E485D" : null}
                    >
                      {x}
                    </Circle>
                  </Link>
                </Box>
              );
            })}

          <Stack justifyContent="flex-end" color="#3E485D">
            <Text fontSize="x-large">.......</Text>
          </Stack>

          {secondLoop &&
            secondLoop.map((x) => {
              return (
                <Box>
                  <Link>
                    <Circle
                      px="3"
                      color="#9DA7BE"
                      _hover={{ bg: "#3E485D !important" }}
                      _active={{ bg: "#3E485D !important" }}
                      py="1"
                      mx="1"
                      border="1px solid #9DA7BE"
                      onClick={() => clickNumber(x)}
                      bg={currentPage === x ? "#3E485D" : null}
                    >
                      {x}
                    </Circle>
                  </Link>
                </Box>
              );
            })}
          <Link>
            <Circle
              p="2"
              border="1px solid #9DA7BE"
              _hover={{ bg: "#3E485D !important" }}
              ml={6}
            >
              <FaChevronRight
                color="#9DA7BE"
                boxSize="2"
                onClick={() =>
                  clickNumber(
                    currentPage < numberPost ? currentPage + 1 : numberPost
                  )
                }
              />
            </Circle>
          </Link>
          <Link>
            <Circle
              p="2"
              border="1px solid #9DA7BE"
              _hover={{ bg: "#3E485D !important" }}
              ml={2}
            >
              <FaAngleDoubleRight
                color="#9DA7BE"
                boxSize="2"
                onClick={() => clickNumber(numberPost)}
              />
            </Circle>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default connect(Paginationfront);
