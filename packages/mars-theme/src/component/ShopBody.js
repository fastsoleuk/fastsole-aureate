import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import {
  Heading,
  WrapItem,
  Center,
  HStack,
  Wrap,
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
  FaCheckCircle,
  FaChevronDown,
  FaCircle,
  FaSlidersH,
  FaUndo,
} from "react-icons/fa";
// import Filtermobile from "../component/Filtermobile";
import Link from "@frontity/components/link";
import Paginationfront from "../Test/Paginationfront";
import connect from "@frontity/connect";

const ShopBody = ({ state, actions, libraries }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const totalPost = 250000;
  const [stockValue, setStockValue] = useState(45);

  useEffect(() => {
    stockValue;
    stockDataFetch();
    brandDataFetch();
    fetchData(stockValue);
  }, [stockValue]); //update by santosh

  const fetchData = async (id) => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/sneaker-release-dates/${id}totalpost${totalPost}`,
    });

    const result = await response.json();

    actions.sneakerReleaseDates.toggleLoading();
    actions.sneakerReleaseDates.updatePostData(result);
    console.log("againcall", id);
  };

  const brandDataFetch = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/footwear-brands`,
    });

    const result = await response.json();
    actions.brandsData.toggleLoading();
    actions.brandsData.updatePostData(result);
  };

  const colorDataFetch = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/footwear-color`,
    });

    const result = await response.json();
    actions.colorData.toggleLoading();
    actions.colorData.updatePostData(result);
  };

  const stockDataFetch = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/footwear-stock`,
    });

    const result = await response.json();
    actions.stockData.toggleLoading();
    actions.stockData.updatePostData(result);
  };

  const brandData = state.brandsData.postData;
  const colorData = state.colorData.postData;
  const stockData = state.stockData.postData;
  const data = state.sneakerReleaseDates.postData;

  console.log("barnpost = ", stockValue);
  const brandList = [
    "Asics",
    "Jordan",
    "Airforce",
    "Nike jordan",
    "Ultra boost",
  ];

  // console.log("okdata", stockValue);

  // useEffect(() => {
  //   return () => {
  //     //  setRadioValue;
  //   };
  // }, [""]);

  // var clickNumber = () => {
  //   // setStockValue;
  //   dataCall;
  //   console.log("zara", setStockValue);
  // };

  // const twoCalls = () => {
  //   this.setStockValue();
  //   this.dataCall;
  //   // this.functionTwo();
  // };

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
          >
            <option value="option1">Price low to high</option>
            <option value="option2">High to low</option>
            <option value="option3">Order by release date</option>
            <option value="option3">(DESC)</option>
            <option value="option3">Release this week</option>
          </Select>

          <Icon
            as={FaSlidersH}
            boxSize="7"
            border="2px solid #9DA7BE"
            colorScheme="#9DA7BE"
            color="#3E485D"
            borderRadius={4}
            px="1"
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
                <DrawerHeader
                  bg="#d8dee7"
                  color="#3E485D"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                  fontStyle="normal"
                >
                  Filter
                </DrawerHeader>

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

                    <RadioGroup
                      onChange={setStockValue}
                      value={stockValue}
                      my={2}
                    >
                      <VStack
                        color="#525F7A"
                        alignItems="flex-start"
                        fontStyle="normal"
                        lineHeight="19px"
                      >
                        {stockData &&
                          stockData.map((element) => {
                            return (
                              <Radio
                                size="sm"
                                value={element.term_id}
                                onClick={(e) => {
                                  // setStockValue(element.term_id);
                                  console.log("working", stockValue);
                                  setTimeout(function () {
                                    fetchData(element.term_id);
                                    console.log("workingg", stockValue);
                                  }, 100);
                                }}
                              >
                                {element.name}
                              </Radio>
                            );
                          })}
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
                      Brand
                    </Heading>

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
                      >
                        {brandData &&
                          brandData.map((element) => {
                            return (
                              <Radio
                                size="sm"
                                value={element.term_id}
                                onClick={(e) => {
                                  // setStockValue(element.term_id);
                                  console.log("working", stockValue);
                                  setTimeout(function () {
                                    fetchData(element.term_id);
                                    console.log("workingg", stockValue);
                                  }, 100);
                                }}
                              >
                                {element.name}
                              </Radio>
                            );
                          })}
                      </VStack>
                    </RadioGroup>

                    <Heading
                      display="block"
                      fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                      fontStyle="normal"
                      color="#3E485D"
                      lineHeight="27px"
                    >
                      Collection
                    </Heading>

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
                      >
                        <Radio size="sm" value="Sasuke">
                          In Stock
                        </Radio>
                        <Radio size="sm" value="Nagato">
                          Coming soon
                        </Radio>
                        <Radio size="sm" value="Itachi">
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
                      Style
                    </Heading>

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
                      >
                        <Radio size="sm" value="Sasuke">
                          In Stock
                        </Radio>
                        <Radio size="sm" value="Nagato">
                          Coming soon
                        </Radio>
                        <Radio size="sm" value="Itachi">
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
                        0
                      </Text>
                      <RangeSlider
                        aria-label={["min", "max"]}
                        colorScheme="green"
                        defaultValue={[10, 30]}
                      >
                        <RangeSliderTrack>
                          <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                      </RangeSlider>
                      <Text color="#7887A5" ml={1}>
                        500
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

              <RadioGroup
                onChange={setStockValue}
                // onChange={twoCalls}
                // onChange={() => {
                //   setStockValue;
                //   // dataCall;
                // }}
                // onChange={() => {
                //   setStockValue;
                //   // dataCall;
                // }}
                // onChange={dataCall}
                value={stockValue}
                //  defaultValue="Itachi"
                my={2}
              >
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                  colorScheme="blue"
                >
                  {stockData &&
                    stockData.map((element) => {
                      return (
                        <Radio
                          size="sm"
                          value={element.term_id}
                          onClick={(e) => {
                            // setStockValue(element.term_id);
                            console.log("working", stockValue);
                            setTimeout(function () {
                              fetchData(element.term_id);
                              console.log("workingg", stockValue);
                            }, 100);
                          }}
                        >
                          {element.name}
                        </Radio>

                        // <Button
                        //   onClick={(e) => {
                        //     // setStockValue(element.term_id);
                        //     console.log("working", stockValue);
                        //     setTimeout(function () {
                        //       fetchData(element.term_id);
                        //       console.log("workingg", stockValue);
                        //     }, 100);
                        //   }}
                        // >
                        //   {" "}
                        //   {element.name}
                        // </Button>
                      );
                    })}
                  {/* <Radio size="sm" value="42">
                    In Stock
                  </Radio>
                  <Radio size="sm" value="50">
                    Coming soon
                  </Radio>
                  <Radio size="sm" value="45">
                    Sold out
                  </Radio> */}
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
                Brand
              </Heading>

              <RadioGroup
                // onChange={(e) => {
                //   setStockValue(e);
                //   console.log("working", stockValue);
                //   setTimeout(function () {
                //     fetchData();
                //   }, 1000);
                // }}
                // onClick={fetchData}
                // onChange={setStockValue}
                onChange={setStockValue}
                value={stockValue}
                // onChange={setBrandValue}
                // value={brandValue}
                //  defaultValue="Itachi"
                my={3}
              >
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                >
                  {brandData &&
                    brandData.map((element) => {
                      return (
                        <Radio
                          size="sm"
                          value={element.term_id}
                          onClick={(e) => {
                            // setStockValue(element.term_id);
                            // console.log("working", stockValue);
                            setTimeout(function () {
                              fetchData(element.term_id);
                              console.log("workingg", stockValue);
                            }, 100);
                          }}
                        >
                          {element.name}
                        </Radio>
                      );
                      // return (
                      //   <Radio size="sm" value={element.term_id}>
                      //     {element.name}
                      //   </Radio>
                      // );
                    })}
                  {/* <Radio size="sm" value="Sasuke">
                    In Stock
                  </Radio>
                  <Radio size="sm" value="Nagato">
                    Coming soon
                  </Radio>
                  <Radio size="sm" value="Itachi">
                    Sold out
                  </Radio> */}
                </VStack>
              </RadioGroup>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Collection
              </Heading>

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
                >
                  <Radio size="sm" value="Sasuke">
                    In Stock
                  </Radio>
                  <Radio size="sm" value="Nagato">
                    Coming soon
                  </Radio>
                  <Radio size="sm" value="Itachi">
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
                Style
              </Heading>

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
                >
                  <Radio size="sm" value="Sasuke">
                    In Stock
                  </Radio>
                  <Radio size="sm" value="Nagato">
                    Coming soon
                  </Radio>
                  <Radio size="sm" value="Itachi">
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
                color
              </Heading>
              {/* colorgrid */}
              <Grid templateColumns={{ lg: "1fr 1fr 1fr 1fr 1fr 1fr" }}>
                {/* <Icon as={FaCircle} boxSize={5} color="blue" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="red" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="yellow" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="green" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="gray" mr={2} mb="2" />

                <Icon as={FaCircle} boxSize={5} color="red.300" mr={2} mb="2" />
                <Icon as={FaCircle} boxSize={5} color="orange" mr={2} mb="2" /> */}
                {/* <Icon
                  as={FaCircle}
                  boxSize={5}
                  color="green.300"
                  mr={2}
                  mb="2"
                /> */}
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
                  0
                </Text>
                <RangeSlider
                  aria-label={["min", "max"]}
                  colorScheme="green"
                  defaultValue={[10, 30]}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Text color="#7887A5" ml={1}>
                  500
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
              >
                <Icon as={FaUndo} boxSize={3} mr={2} /> Reset
              </Button>
            </Box>
          </Box>

          <Box>
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
          </Box>
        </Grid>
      </Stack>
    </>
  );
};

export default connect(ShopBody);
