import React, { useEffect, useState } from "react";
import {
  Box,
  Circle,
  Flex,
  Grid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  Heading,
  Button,
  Select,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Icon,
  Input,
  RadioGroup,
  useDisclosure,
  Radio,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaSlidersH,
  FaUndo,
  IoIosCloseCircle,
} from "react-icons/fa";
// import Filtermobile from "../component/Filtermobile";
import Link from "@frontity/components/link";
import Paginationfront from "../Test/Paginationfront";
import connect from "@frontity/connect";

const Commonproductdata = ({ state, actions, libraries, items }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  var tempFilter = [];

  const [filter, setFilter] = useState(tempFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const [option, setOption] = useState();

  function handleChange(event) {
    setOption(event.target.value);
    console.log("options:", option);
  }

  const stockClick = (e) => {
    tempFilter = {
      sneaker_status: e,
    };
    setFilter(tempFilter);
  };
  var defaultPrice = {
    min: 0,
    max: 500,
  };
  const [priceRange, setPriceRange] = useState(defaultPrice);

  const rangeSlider = (range) => {
    // console.log("rangeslider", range)
    var min = range[0];
    var max = range[1];
    var temp = {
      min: min,
      max: max,
    };
    setPriceRange(temp);
    setCurrentPage(1);
  };

  // console.log("filter data", filter)

  const reset = () => {
    var tempArr = [];
    setFilter(tempArr);
    setPriceRange(defaultPrice);
    setCurrentPage(1);
  };

  // filtering elements

  var tempArr = [];

  var filterItems = items.filter(function (item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] != filter[key]) return false;
    }
    return true;
  });

  var filterItems = filterItems.filter(function (item) {
    if (item.price >= priceRange.min && item.price <= priceRange.max) {
      return true;
    } else {
      return false;
    }
  });

  var totalPage = filterItems.length;

  var numberPostArr = [];
  var secondNumber = [];
  useEffect(() => {
    totalPage = filterItems.length;
  });
  var numberPost = Math.ceil(totalPage / 12);

  for (let i = 1; i <= numberPost; i++) {
    if (i < 4) {
      numberPostArr[i] = i;
    } else if (i > numberPost - 2) {
      secondNumber[i] = i;
    }
  }
  const [firstLoop, setFirstLoop] = useState(numberPostArr);
  const [secondLoop, setSecondLoop] = useState(secondNumber);

  // console.log("secondLoop", secondNumber);

  const [postIndex, setPostIndex] = useState({ min: 0, max: 12 });
  const clickNumber = (x) => {
    let MaxIndex = 12 * x;
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

  return (
    <>
      <Stack>
        <Flex
          justifyContent={{
            base: "space-between",
            md: "space-between",
            lg: "flex-end",
          }}
        >
          <Select
            placeholder="Short By"
            fontSize="xs"
            colorScheme="#9DA7BE"
            color="#3E485D"
            size="sm"
            w={100}
            variant="outline"
            // display={{ base: "none", md: "none", lg: "block" }}
            onChange={handleChange}
          >
            <option value="price_low_to_high">Price low to high</option>
            <option value="high_to_low">High to low</option>
            <option value="order_by_release_date">Order by release date</option>

            <option value="release_this_week">Release this week</option>
          </Select>

          <Icon
            as={FaSlidersH}
            boxSize="6"
            display={{ base: "block", md: "block", lg: "none" }}
            onClick={onOpen}
          />

          {/* filtermobile full code   */}
          <Box
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            display="none"
          >
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>

                <DrawerBody color="#3E485D">
                  <Box p={4}>
                    <Heading
                      display="block"
                      fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                      fontStyle="normal"
                      color="#3E485D"
                      lineHeight="27px"
                    >
                      Release calender
                    </Heading>

                    <Input
                      type="date"
                      color="#C2C8D6"
                      my="3"
                      size="sm"
                      variant="flushed"
                    />

                    <Heading
                      display="block"
                      fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                      fontStyle="normal"
                      color="#3E485D"
                      lineHeight="27px"
                    >
                      Stock
                    </Heading>

                    <RadioGroup>
                      <VStack
                        color="#525F7A"
                        alignItems="flex-start"
                        fontStyle="normal"
                        lineHeight="19px"
                        fontWeight="normal"
                        colorScheme="blue"
                      >
                        <Radio
                          size="sm"
                          value="instock"
                          onChange={() => stockClick("instock")}
                        >
                          In Stock
                        </Radio>
                        <Radio
                          size="sm"
                          value="coming_soon"
                          onChange={() => stockClick("coming_soon")}
                        >
                          Coming soon
                        </Radio>
                        <Radio
                          size="sm"
                          value="sold_out"
                          onChange={() => stockClick("sold_out")}
                        >
                          Sold out
                        </Radio>
                      </VStack>
                    </RadioGroup>

                    <Heading
                      display="block"
                      fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                      fontStyle="normal"
                      color="#3E485D"
                      lineHeight="27px"
                    >
                      Gender
                    </Heading>

                    <RadioGroup my={3}>
                      <VStack
                        color="#525F7A"
                        alignItems="flex-start"
                        fontStyle="normal"
                        lineHeight="19px"
                        fontWeight="normal"
                      >
                        <Radio size="sm" value="Sasuke">
                          Male
                        </Radio>
                        <Radio size="sm" value="Nagato">
                          Female soon
                        </Radio>
                      </VStack>
                    </RadioGroup>

                    <Heading
                      display="block"
                      fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                      fontStyle="normal"
                      color="#3E485D"
                      lineHeight="27px"
                    >
                      color
                    </Heading>
                    <Grid templateColumns={{ base: "1fr 1fr 1fr 1fr 1fr 1fr" }}>
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="blue"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="red"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="yellow"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="green"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="gray"
                        mr={2}
                        mb="2"
                      />

                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="red.300"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="orange"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="green.300"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="teal"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="cyan"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="purple"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="green.300"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="teal"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="cyan"
                        mr={2}
                        mb="2"
                      />
                      <Icon
                        as={FaCircle}
                        boxSize={5}
                        color="purple"
                        mr={2}
                        mb="2"
                      />
                    </Grid>
                    <Heading
                      display="block"
                      fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                      fontStyle="normal"
                      color="#3E485D"
                      lineHeight="27px"
                    >
                      Price Range
                    </Heading>

                    <Flex>
                      <Text color="#7887A5" mr={1}>
                        {priceRange.min}
                      </Text>
                      <RangeSlider
                        aria-label={["min", "max"]}
                        colorScheme="green"
                        defaultValue={[priceRange.min, priceRange.max]}
                        min={0}
                        max={500}
                        step={30}
                        onChangeEnd={(val) => rangeSlider(val)}
                      >
                        <RangeSliderTrack>
                          <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                      </RangeSlider>
                      <Text color="#7887A5" ml={1}>
                        {priceRange.max}
                      </Text>
                    </Flex>

                    <Button
                      colorScheme="#525F7A"
                      bg="#525F7A"
                      color=" white"
                      size="xs"
                      p={3}
                      mt={3}
                      h="30px"
                      w="100px"
                      onClick={() => reset()}
                    >
                      <Icon as={FaUndo} boxSize={3} mr={2} /> Reset
                    </Button>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          {/* filter code end */}
        </Flex>
      </Stack>

      {/* filter for desktop */}
      {/* filter for desktop */}
      {/* filter for desktop */}
      <Stack>
        <Grid
          templateColumns={{ lg: "1fr 7fr", sm: "repeat(1, 1fr)" }}
          textColor="white"
          gap={6}
        >
          <Box display={{ base: "none", md: "none", lg: "block" }}>
            <Box p={4} border="1px solid #9DA7BE" rounded="lg">
              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Release calender
              </Heading>

              <Input
                type="date"
                color="#C2C8D6"
                my="3"
                size="sm"
                variant="flushed"
              />

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Stock
              </Heading>

              <RadioGroup>
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                  colorScheme="blue"
                >
                  <Radio
                    size="sm"
                    value="instock"
                    onChange={() => stockClick("instock")}
                  >
                    In Stock
                  </Radio>
                  <Radio
                    size="sm"
                    value="coming_soon"
                    onChange={() => stockClick("coming_soon")}
                  >
                    Coming soon
                  </Radio>
                  <Radio
                    size="sm"
                    value="sold_out"
                    onChange={() => stockClick("sold_out")}
                  >
                    Sold out
                  </Radio>
                </VStack>
              </RadioGroup>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Gender
              </Heading>

              <RadioGroup my={3}>
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                >
                  <Radio
                    size="sm"
                    value="male"
                    onChange={() => GenderClick("male")}
                  >
                    Male
                  </Radio>
                  <Radio
                    size="sm"
                    value="female"
                    onChange={() => GenderClick("female")}
                  >
                    Female soon
                  </Radio>
                </VStack>
              </RadioGroup>

              <RadioGroup
                //  defaultValue="Itachi"
                my={3}
              >
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                ></VStack>
              </RadioGroup>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                color
              </Heading>
              {/* colorgrid */}
              <Grid templateColumns={{ lg: "1fr 1fr 1fr 1fr 1fr 1fr" }}>
                <Icon as={FaCircle} boxSize={5} color="teal" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="cyan" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="purple" mr={2} mb="2" />
                <Icon
                  as={FaCircle}
                  boxSize={5}
                  color="green.300"
                  mr={2}
                  mb="2"
                />
                <Icon as={FaCircle} boxSize={5} color="teal" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="cyan" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="purple" mr={2} mb="2" />
              </Grid>
              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Price Range
              </Heading>

              <Flex>
                <Text color="#7887A5" mr={1}>
                  {priceRange.min}
                </Text>
                <RangeSlider
                  aria-label={["min", "max"]}
                  colorScheme="green"
                  defaultValue={[priceRange.min, priceRange.max]}
                  min={0}
                  max={500}
                  step={30}
                  onChangeEnd={(val) => rangeSlider(val)}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Text color="#7887A5" ml={1}>
                  {priceRange.max}
                </Text>
              </Flex>

              <Button
                colorScheme="#525F7A"
                rounded="3px"
                bg="#525F7A"
                color=" white"
                size="xs"
                h="35px"
                w="100px"
                p={3}
                mt={3}
                onClick={() => reset()}
              >
                <Icon as={FaUndo} boxSize={3} mr={2} /> Reset
              </Button>
            </Box>
          </Box>
          {/* producrdata and pagination */}
          <Box>
            <Grid
              templateColumns={{
                md: "1fr 1fr 1fr 1fr",
                base: "repeat(2, 1fr)",
              }}
              gap={4}
              mb="10"
            >
              {/* {prop.length !== 0 && prop.length > 1 ? (
              prop.slice(postIndex.min, postIndex.max).map((item) => { */}

              {filterItems.slice(postIndex.min, postIndex.max).map((item) => {
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
                } else if (item.sneaker_status === "coming_soon") {
                  var status = (
                    <Text color="red" fontSize="xs" lineHeight="22px">
                      <Icon
                        as={IoIosCloseCircle}
                        boxSize="3"
                        mr={1}
                        color={"#3EB75E"}
                      />
                      Coming Soon
                    </Text>
                  );
                } else {
                }

                return (
                  <Box p={2} border="1px solid #9DA7BE" rounded="lg">
                    <Text
                      color="#525F7A"
                      fontSize="xs"
                      textAlign="center"
                      mb={2}
                    >
                      {item.release_date}
                      {/* 12 Feb 2021 GTM */}
                    </Text>
                    <Image
                      borderRadius="lg"
                      // w="100%"
                      src={item.img}
                      // src={item.featured_image.medium}
                      lineHeight="22px"
                    />
                    {/* <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
                      <Icon
                        as={FaCheckCircle}
                        boxSize="3"
                        mr={1}
                        color={"#3EB75E"}
                      />
                      status
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
              })}
              {/* ); }) ) : (
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
            )} */}
            </Grid>
            {/* <Box>
            <Paginationfront prop={data} stockValue={stockValue} />
            <Stack
              textAlign="center"
              mt={6}
              display={{ base: "block", md: "none" }}
            >
              <Text color="#525F7A" fontSize="sm" fontWeight="bold">
                Load more
              </Text>
              <Icon as={FaChevronDown} boxSize={3} color="#525F7A" />
            </Stack>
          </Box> */}

            {/* paginationm start */}

            <Box display={{ base: "none", md: "flex" }} justifyContent="center">
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
                    onClick={() => clickNumber(1)}
                  />
                </Circle>
              </span>
              <span>
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
              </span>
              {firstLoop &&
                firstLoop.map((x) => {
                  return (
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
                          onClick={() => clickNumber(x)}
                          bg={currentPage === x ? "#3E485D" : null}
                        >
                          {x}
                        </Circle>
                      </span>
                    </Box>
                  );
                })}
              {secondLoop.length > 0 && (
                <Stack justifyContent="flex-end" color="#3E485D">
                  <Text fontSize="x-large">.......</Text>
                </Stack>
              )}

              {secondLoop &&
                secondLoop.map((x) => {
                  return (
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
                          onClick={() => clickNumber(x)}
                          bg={currentPage === x ? "#3E485D" : null}
                        >
                          {x}
                        </Circle>
                      </span>
                    </Box>
                  );
                })}
              <span>
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
                    onClick={() => clickNumber(numberPost)}
                  />
                </Circle>
              </span>
            </Box>

            {/* pagination end */}
          </Box>
        </Grid>
      </Stack>
      {/* filter for desktop */}
      {/* filter for desktop */}
      {/* filter for desktop */}
    </>
  );
};

export default connect(Commonproductdata);
