import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Stack,
  Text,
  VStack,
  Circle,
} from "@chakra-ui/layout";
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
  InputGroup,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FaAngleDoubleLeft,
  FaChevronRight,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaCheckCircle,
  FaChevronDown,
  FaCircle,
  FaSlidersH,
  FaUndo,
  FaClock,
} from "react-icons/fa";
// import Filtermobile from "../component/Filtermobile";
import Link from "@frontity/components/link";
import connect from "@frontity/connect";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { DateRangePicker } from "react-date-range";
import { addDays, parse } from "date-fns";
import { MdDateRange } from "react-icons/md";
import Productskeleton from "./Productskeleton";
import NoProduct from "./NoProduct";

const SearchResult = ({ state, actions, libraries, searchString }) => {
  let [countpost, setCountPost] = useState();
  const [priceRangeShow, setpriceRangeShow] = useState(false);
  const [resetClick, setresetClick] = useState(false);

  var searchdata = searchString.toLowerCase();

  const [stockValue, setStockValue] = useState({
    brandId: searchdata,
    totalProduct: 20,
    priceMin: 0,
    priceMax: 500,
    status: "instock",
    date: "",
    sortBy: "",
    color: "",
  });
  console.log("myserachstring", searchString);

  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [dropDown, setDropdown] = useState("");

  const [filter, setFilter] = useState({
    sneaker_status: "instock",
    color: "",
    priceMin: 0,
    paricemax: 500,
  });

  const rangeSlider = (range) => {
    // console.log("rangeslider", range) range slider
    var min = range[0];
    var max = range[1];
    var temp = {
      min: min,
      max: max,
    };
    var tempArr = {
      brandId: stockValue.brandId,
      totalProduct: stockValue.totalProduct,
      priceMin: min,
      priceMax: max,
      status: stockValue.status,
      date: stockValue.date,
      sortBy: stockValue.sortBy,
      color: stockValue.color,
    };
    setStockValue(tempArr);
    setPriceRange(temp);
    setCurrentPage(1);
  };

  console.log("stock value :", stockValue);

  const brandChange = (e) => {
    var value = parseInt(e);
    var totalProduct = stockValue.totalProduct;

    var tempArr = {
      brandId: value,
      totalProduct: totalProduct,
      priceMin: stockValue.priceMin,
      priceMax: stockValue.priceMax,
      status: stockValue.status,
      date: stockValue.date,
      sortBy: stockValue.sortBy,
      color: stockValue.color,
    };
    setStockValue(tempArr);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const totalPost = 5;
  // for choose date from calender start
  const [choosedate, setchoosedate] = useState("");

  const convertDate = (event) => {
    const tempDate = JSON.stringify(event);
    const finalDate = tempDate.slice(1, 11);
    var intDate = finalDate.split("-").join("");
    return intDate;
  };

  const exactDate = (startdate, enddate) => {
    const firstdate = convertDate(startdate);
    const secdate = convertDate(enddate);
    const comparedate = `${firstdate}-${secdate}`;
    setchoosedate(comparedate);
    setCurrentPage(1);
    console.log("finaldate", choosedate);
  };

  // end

  useEffect(() => {
    var slug = `${stockValue.brandId}-${stockValue.totalProduct}-${stockValue.priceMin}-${stockValue.priceMax}-${stockValue.status}-${stockValue.date}-${stockValue.sortBy}-${stockValue.color}-${choosedate}`;
    brandDataFetch();
    console.log("items SLUG =", slug);
    fetchData(slug);
  }, [stockValue, choosedate, searchString]);

  useEffect(() => {
    var slug = `${stockValue.brandId}-${stockValue.totalProduct}-${stockValue.priceMin}-${stockValue.priceMax}-${stockValue.status}-${stockValue.date}-${stockValue.sortBy}-${stockValue.color}-${choosedate}`;
    console.log("items SLUG =", slug);
    fetchData(slug);
  }, [searchString, choosedate]);

  const fetchData = async (slug) => {
    if (typeof searchString === "string") {
      var dataUri = `/wl/v1/search-items/${slug}`;
    } else {
      var dataUri = `/wl/v1/sneaker-release-dates-test/${slug}`;
    }

    actions.sneakerReleaseDates.notoggleLoading();
    const response = await libraries.source.api.get({
      endpoint: dataUri,
    });

    const result = await response.json();
    actions.sneakerReleaseDates.toggleLoading();
    actions.sneakerReleaseDates.updatePostData(result);

    console.log("sneaker release date :  ", result);
  };

  var items = state.sneakerReleaseDates.postData.post;
  let totalCount = state.sneakerReleaseDates.postData.totalPost;

  // pagination component start
  var dataLimit = 12;
  if (totalCount >= 36) {
    var pageLimit = 3;
  } else if (totalCount >= 12 && totalCount < 36) {
    var pageLimit = 2;
  } else {
    var pageLimit = 1;
  }

  const [pages] = useState(Math.round(totalCount / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLength, setDataLength] = useState({ min: 0, max: 12 });

  const doubleRight = () => {
    setCurrentPage(pages);
  };
  const doubleLeft = () => {
    setCurrentPage(1);
  };

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  useEffect(() => {
    getPaginationData();
  }, [currentPage]);

  useEffect(() => {
    updateIndex();
    getPaginationGroup();
  }, [
    stockValue.brandId,
    stockValue.priceMin,
    stockValue.priceMax,
    stockValue.color,
    stockValue.status,
  ]);

  const updateIndex = async () => {
    setDataLength({ min: 0, max: 12 });
    setCurrentPage(1);
  };

  const getPaginationData = async () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    console.log("curret page :", startIndex, endIndex);
    const tempArr = {
      brandId: stockValue.brandId,
      totalProduct: endIndex,
      priceMin: stockValue.priceMin,
      priceMax: stockValue.priceMax,
      status: stockValue.status,
      date: stockValue.date,
      sortBy: stockValue.sortBy,
      color: stockValue.color,
    };
    setStockValue(tempArr);
    setDataLength({ min: startIndex, max: endIndex });
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  const stockChange = (value) => {
    console.log("filter array", filter);
    var tempFilter = {
      sneaker_status: value,
      color: "",
      priceMin: 0,
      paricemax: 500,
    };
    const tempArr = {
      brandId: stockValue.brandId,
      totalProduct: stockValue.totalProduct,
      priceMin: stockValue.priceMin,
      priceMax: stockValue.priceMax,
      status: value,
      date: stockValue.date,
      sortBy: stockValue.sortBy,
      color: stockValue.color,
    };
    setStockValue(tempArr);
    setFilter(tempFilter);
  };

  var filterItems = items && items;

  // get input data from release calendar
  let shortDropDown = (value) => {
    console.log("drop down value :", value);
    setDropdown(value);

    const tempArr = {
      brandId: stockValue.brandId,
      totalProduct: stockValue.totalProduct,
      priceMin: stockValue.priceMin,
      priceMax: stockValue.priceMax,
      status: stockValue.status,
      date: stockValue.date,
      sortBy: value,
      color: stockValue.color,
    };
    setStockValue(tempArr);
  };

  const brandDataFetch = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/footwear-brands`,
    });

    const result = await response.json();
    actions.brandsData.toggleLoading();
    actions.brandsData.updatePostData(result);
  };

  const brandData = state.brandsData.postData;
  const data = state.sneakerReleaseDates.postData;

  const dateSelect = (date) => {
    var tempDate = date.replace(/-/gi, "");
    const tempArr = {
      brandId: stockValue.brandId,
      totalProduct: stockValue.totalProduct,
      priceMin: stockValue.priceMin,
      priceMax: stockValue.priceMax,
      status: stockValue.status,
      date: tempDate,
      color: stockValue.color,
    };
    setStockValue(tempArr);
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
    setStockValue(tempArr);

    setDataLength({ min: 0, max: tempTotal });
  };

  const reset = () => {
    setresetClick(true);
    const tempArr = {
      brandId: stockValue.brandId,
      totalProduct: 12,
      priceMin: 0,
      priceMax: 500,
      status: "instock",
      date: "",
      sortBy: "",
      color: "",
    };
    setStockValue(tempArr);
    setchoosedate("--");

    setDataLength({ min: 0, max: 12 });
    setPriceRange({ min: 0, max: 500 });
    setTimeout(() => {
      setresetClick(false);
    }, 100);
  };
  const [selectColor, setSelectColor] = useState("");
  // colour filter
  const colorChange = (color) => {
    const tempArr = {
      brandId: stockValue.brandId,
      totalProduct: stockValue.totalProduct,
      priceMin: stockValue.priceMin,
      priceMax: stockValue.priceMax,
      status: stockValue.status,
      date: stockValue.date,
      sortBy: stockValue.sortBy,
      color: color,
    };
    setStockValue(tempArr);
    setSelectColor(color);
  };

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const {
    onOpen: OnDateOpen,
    onClose: onDateClose,
    isOpen: isDateOpen,
  } = useDisclosure();
  const demoArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Stack mx={{ base: "6", md: "16", lg: "40" }}>
        {/* calender */}
        <Modal isOpen={isDateOpen} onClose={onDateClose} size="md">
          <ModalOverlay />
          <ModalContent>
            <DateRangePicker
              months={2}
              onChange={(item) => {
                setDate([item.selection]);
              }}
              moveRangeOnFirstSelection={false}
              ranges={date}
              direction="vertical"
            />

            <ModalFooter>
              <Button
                colorScheme="teal"
                size="sm"
                variant="solid"
                onClick={() => {
                  // setisCalender(!isCalender);
                  const firstdate = date[0].startDate;
                  const enddatedate = date[0].endDate;
                  exactDate(firstdate, enddatedate);

                  onDateClose();
                  window.scrollTo(0, 0);
                }}
              >
                Apply
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Stack id="filter-header">
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
              onChange={(event) => shortDropDown(event.target.value)}
              // display={{ base: "none", md: "none", lg: "block" }}
            >
              <option value="priceLowToHigh">Price low to high</option>
              <option value="priceHighToLow">High to low</option>
              <option value="releseDateDesc">
                Order by release date (DESC)
              </option>

              <option value="releaseThisWeek">Release this week</option>
            </Select>

            <Icon
              as={FaSlidersH}
              boxSize="7"
              p="1"
              border="2px solid #9DA7BE"
              colorScheme="#9DA7BE"
              color="#3E485D"
              borderRadius={4}
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
                      {/* <Heading
                        display="block"
                        fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                        fontStyle="normal"
                        color="#3E485D"
                        lineHeight="27px"
                      >
                        Release calender
                      </Heading>

                      <InputGroup
                        my={2}
                        size="md"
                        onClick={() => {
                          OnDateOpen();
                          // window.scrollTo(0, 0);
                          // // setisCalender(!isCalender);
                          // OnDateOpen();
                          onClose();
                        }}
                      >
                        <Input
                          pr="2.5rem"
                          type="text"
                          placeholder="pick a date"
                        />
                        <InputRightElement width="4.5rem">
                          <MdDateRange />
                        </InputRightElement>
                      </InputGroup> */}

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
                          <Radio
                            size="sm"
                            value="instock"
                            onChange={(event) => {
                              stockChange(event.target.value);
                              onClose();
                            }}
                          >
                            In Stock
                          </Radio>
                          <Radio
                            size="sm"
                            value="comingsoon"
                            onChange={(event) => {
                              stockChange(event.target.value);
                              onClose();
                            }}
                          >
                            Coming soon
                          </Radio>
                          <Radio
                            size="sm"
                            value="soldout"
                            onChange={(event) => {
                              stockChange(event.target.value);
                              onClose();
                            }}
                          >
                            Sold out
                          </Radio>
                        </VStack>
                      </RadioGroup>

                      {/* brand */}

                      {/* <Heading
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
                          {brandData.map((item) => {
                            return (
                              <>
                                <Radio
                                  size="sm"
                                  value={item.term_id}
                                  onChange={(event) => {
                                    brandChange(event.target.value);
                                    onClose();
                                  }}
                                >
                                  {item.name}
                                </Radio>
                              </>
                            );
                          })}
                        </VStack>
                      </RadioGroup> */}

                      {/* colour */}

                      {/* <Heading
                        display="block"
                        fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                        fontStyle="normal"
                        color="#3E485D"
                        lineHeight="27px"
                      >
                        Colour
                      </Heading>
                      <Grid
                        templateColumns={{ base: "1fr 1fr 1fr 1fr 1fr 1fr" }}
                      >
                        <Icon
                          as={FaCircle}
                          boxSize={selectColor == "black" ? 6 : 5}
                          color="black"
                          mr={2}
                          mb="2"
                          onClick={() => {
                            colorChange("black");
                            onClose();
                          }}
                        />
                        <Icon
                          as={FaCircle}
                          boxSize={selectColor == "blue" ? 6 : 5}
                          color="blue"
                          mr={2}
                          mb="2"
                          onClick={() => {
                            colorChange("blue");
                            onClose();
                          }}
                        />
                        <Icon
                          as={FaCircle}
                          boxSize={selectColor == "green" ? 6 : 5}
                          color="green"
                          mr={2}
                          mb="2"
                          onClick={() => {
                            colorChange("green");
                            onClose();
                          }}
                        />
                        <Icon
                          as={FaCircle}
                          boxSize={selectColor == "grey" ? 6 : 5}
                          color="grey"
                          mr={2}
                          mb="2"
                          onClick={() => {
                            colorChange("grey");
                            onClose();
                          }}
                        />
                        <Icon
                          // as={FaCircle}
                          boxSize={selectColor == "multicolor" ? 6 : 5}
                          // color="multicolor"
                          rounded={"xl"}
                          bg="linear-gradient(to right, #009fff, #ec2f4b);"
                          mr={2}
                          mb="2"
                          // onClick={() => colorChange("multicolor")}
                          onClick={() => {
                            colorChange("multicolor");
                            onClose();
                          }}
                        >
                          <Box boxSize={5} bg={"red"} />
                        </Icon>

                        <Icon
                          as={FaCircle}
                          boxSize={selectColor == "navy" ? 6 : 5}
                          color="navy"
                          mr={2}
                          mb="2"
                          onClick={() => {
                            colorChange("navy");
                            onClose();
                          }}
                        />
                        <Icon
                          as={FaCircle}
                          boxSize={selectColor == "pink" ? 6 : 5}
                          color="pink"
                          mr={2}
                          mb="2"
                          onClick={() => {
                            colorChange("pink");
                            onClose();
                          }}
                        />
                        <Icon
                          as={FaCircle}
                          boxSize={selectColor == "red" ? 6 : 5}
                          color="red"
                          mr={2}
                          mb="2"
                          onClick={() => {
                            colorChange("red");
                            onClose();
                          }}
                        />
                        <Icon
                          as={FaCircle}
                          boxSize={selectColor == "white" ? 6 : 5}
                          color="white"
                          border="1px solid lightgray"
                          rounded="xl"
                          mr={2}
                          mb="2"
                          onClick={() => {
                            colorChange("white");
                            onClose();
                          }}
                        />
                      </Grid> */}

                      {/*  */}
                      <Heading
                        display="block"
                        fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                        fontStyle="normal"
                        color="#3E485D"
                        lineHeight="27px"
                      >
                        Price Range
                      </Heading>

                      <Flex width="85%">
                        <Text color="#7887A5" mr={3}>
                          {priceRange.min}
                        </Text>
                        {
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
                        }
                        <Text color="#7887A5" ml={2}>
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
                        onClick={() => {
                          reset();
                          onClose();
                        }}
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
            templateColumns={{ lg: "3fr 9fr", sm: "repeat(1, 1fr)" }}
            textColor="white"
            gap={4}
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

                <InputGroup
                  my={2}
                  size="md"
                  onClick={() => {
                    OnDateOpen();
                    // window.scrollTo(0, 0);
                    // // setisCalender(!isCalender);
                    // OnDateOpen();
                    // onClose();
                  }}
                >
                  <Input pr="2.5rem" type="text" placeholder="pick a date" />
                  <InputRightElement width="4.5rem">
                    <MdDateRange />
                  </InputRightElement>
                </InputGroup>

                <Heading
                  display="block"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                  fontStyle="normal"
                  color="#3E485D"
                  lineHeight="27px"
                >
                  Stock
                </Heading>

                <RadioGroup defaultValue="instock" my={2}>
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
                      onChange={(event) => stockChange(event.target.value)}
                    >
                      In Stock
                    </Radio>
                    <Radio
                      size="sm"
                      value="comingsoon"
                      onChange={(event) => stockChange(event.target.value)}
                    >
                      Coming soon
                    </Radio>
                    <Radio
                      size="sm"
                      value="soldout"
                      onChange={(event) => stockChange(event.target.value)}
                    >
                      Sold out
                    </Radio>
                  </VStack>
                </RadioGroup>

                {/* <Heading
                  display="block"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                  fontStyle="normal"
                  color="#3E485D"
                  lineHeight="27px"
                >
                  Brand
                </Heading>

                <RadioGroup
                  defaultValue="Itachi"
                  my={2}
                  value={stockValue.brandId}
                >
                  <VStack
                    color="#525F7A"
                    alignItems="flex-start"
                    fontStyle="normal"
                    lineHeight="19px"
                    fontWeight="normal"
                    colorScheme="blue"
                  >
                    {brandData.map((item) => {
                      // var value = item.term_id
                      return (
                        <>
                          <Radio
                            size="sm"
                            value={item.term_id}
                            onChange={(event) =>
                              brandChange(event.target.value)
                            }
                          >
                            {item.name}
                          </Radio>
                        </>
                      );
                    })}
                  </VStack>
                </RadioGroup> */}

                {/* <Heading
                  display="block"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                  fontStyle="normal"
                  color="#3E485D"
                  lineHeight="27px"
                >
                  Colour
                </Heading> */}
                {/* colorgrid */}
                {/* <Grid templateColumns={{ base: "1fr 1fr 1fr 1fr 1fr 1fr" }}>
                  <Icon
                    as={FaCircle}
                    boxSize={selectColor == "black" ? 6 : 5}
                    color="black"
                    mr={2}
                    mb="2"
                    onClick={() => {
                      colorChange("black");
                    }}
                  />
                  <Icon
                    as={FaCircle}
                    boxSize={selectColor == "blue" ? 6 : 5}
                    color="blue"
                    mr={2}
                    mb="2"
                    onClick={() => colorChange("blue")}
                  />
                  <Icon
                    as={FaCircle}
                    boxSize={selectColor == "green" ? 6 : 5}
                    color="green"
                    mr={2}
                    mb="2"
                    onClick={() => colorChange("green")}
                  />
                  <Icon
                    as={FaCircle}
                    boxSize={selectColor == "grey" ? 6 : 5}
                    color="grey"
                    mr={2}
                    mb="2"
                    onClick={() => colorChange("grey")}
                  />
                  <Icon
                    // as={FaCircle}
                    boxSize={selectColor == "multicolor" ? 6 : 5}
                    // color="multicolor"
                    rounded={"xl"}
                    bg="linear-gradient(to right, #009fff, #ec2f4b);"
                    mr={2}
                    mb="2"
                    onClick={() => colorChange("multicolor")}
                  >
                    <Box boxSize={5} bg={"red"} />
                  </Icon>

                  <Icon
                    as={FaCircle}
                    boxSize={selectColor == "navy" ? 6 : 5}
                    color="navy"
                    mr={2}
                    mb="2"
                    onClick={() => colorChange("navy")}
                  />
                  <Icon
                    as={FaCircle}
                    boxSize={selectColor == "pink" ? 6 : 5}
                    color="pink"
                    mr={2}
                    mb="2"
                    onClick={() => colorChange("pink")}
                  />
                  <Icon
                    as={FaCircle}
                    boxSize={selectColor == "red" ? 6 : 5}
                    color="red"
                    mr={2}
                    mb="2"
                    onClick={() => colorChange("red")}
                  />
                  <Icon
                    as={FaCircle}
                    boxSize={selectColor == "white" ? 6 : 5}
                    color="white"
                    border="1px solid lightgray"
                    rounded="xl"
                    mr={2}
                    mb="2"
                    onClick={() => colorChange("white")}
                  />
                </Grid> */}
                <Heading
                  display="block"
                  fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                  fontStyle="normal"
                  color="#3E485D"
                  lineHeight="27px"
                >
                  Price Range
                </Heading>

                <Flex width="85%">
                  <Text color="#7887A5" mr={3}>
                    {priceRange.min}
                  </Text>
                  {resetClick == true ? (
                    <div></div>
                  ) : (
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
                  )}
                  <Text color="#7887A5" ml={3}>
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
            {/* produt and pagination */}
            {/* produt and pagination */}
            {/* produt and pagination */}
            <Box>
              <Box>
                {!state.sneakerReleaseDates.isLoading ? (
                  (filterItems && filterItems.length === 0) ||
                  filterItems === undefined ? (
                    <NoProduct />
                  ) : (
                    <Grid
                      templateColumns={{
                        md: "1fr 1fr 1fr 1fr",
                        base: "repeat(2, 1fr)",
                      }}
                      gap={4}
                      mb="10"
                    >
                      {console.log("items data ", filterItems)}
                      {/* return ( */}
                      {Object.values(filterItems)
                        .slice(dataLength.min, dataLength.max)
                        .map((item) => {
                          if (item.sneaker_status === "instock") {
                            var status = (
                              <Text
                                color="#3EB75E"
                                fontSize="xs"
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
                          } else if (item.sneaker_status == "coming_soon") {
                            var status = (
                              <Text
                                color="#FF6600"
                                fontSize="xs"
                                lineHeight="22px"
                              >
                                <Icon
                                  as={FaClock}
                                  boxSize="3"
                                  mr={1}
                                  color={"#FF6600"}
                                />
                                Coming Soon
                              </Text>
                            );
                          } else if (
                            item.sneaker_status == "stockist_in_stock"
                          ) {
                            var status = (
                              <Text
                                color="#FF6600"
                                fontSize="xs"
                                lineHeight="22px"
                              >
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
                              <Text
                                color="#FF6600"
                                fontSize="xs"
                                lineHeight="22px"
                              >
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
                              <Text
                                color="#FF6600"
                                fontSize="xs"
                                lineHeight="22px"
                              >
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
                              <Text
                                color="#FF6600"
                                fontSize="xs"
                                lineHeight="22px"
                              >
                                <Icon
                                  as={FaClock}
                                  boxSize="3"
                                  mr={1}
                                  color={"#FF6600"}
                                />
                                Sold Out
                              </Text>
                            );
                          } else if (
                            item.sneaker_status == "stockist_sold_out"
                          ) {
                            var status = (
                              <Text
                                color="#FF6600"
                                fontSize="xs"
                                lineHeight="22px"
                              >
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
                              <Text
                                color="#FF6600"
                                fontSize="xs"
                                lineHeight="22px"
                              >
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
                            <Box p={2} border="1px solid #9DA7BE" rounded="lg">
                              <Text
                                color="#525F7A"
                                fontSize="xs"
                                textAlign="center"
                                mb={2}
                                noOfLines={1}
                              >
                                {item.release_date}
                              </Text>
                              <Link link={item.slug}>
                                <Box w={"100%"} overflow={"hidden"}>
                                  <img
                                    id="product-img"
                                    width="100%"
                                    height="100%"
                                    src={item.featured_image.large}
                                    lineHeight="22px"
                                  />
                                </Box>
                              </Link>

                              {status}
                              {/* <Text
                            color="#3EB75E"
                            fontSize="xs"
                            lineHeight="22px"
                          >
                            <Icon
                              as={FaCheckCircle}
                              boxSize="3"
                              mr={1}
                              color={"#3EB75E"}
                            />
                            {item.sneaker_status}
                          </Text> */}
                              <Box height="42">
                                <Text
                                  as="h3"
                                  fontWeight="600"
                                  color="#3E485D"
                                  fontSize="xs"
                                  lineHeight="22px"
                                  fontStyle="normal"
                                  noOfLines={2}
                                >
                                  <Box>
                                    <Link link={item.slug}>
                                      {item.post_title}{" "}
                                    </Link>
                                  </Box>
                                </Text>
                              </Box>
                              <Text
                                fontWeight="bold"
                                color="#525F7A"
                                fontSize="xs"
                                lineHeight="22px"
                              >
                                £{item.price}
                              </Text>

                              <Link
                                link={item.slug}
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
                    </Grid>
                  )
                ) : (
                  <Grid
                    templateColumns={{
                      md: "1fr 1fr 1fr 1fr",
                      base: "repeat(2, 1fr)",
                    }}
                    gap={4}
                    mb="10"
                  >
                    {demoArr.map((data) => {
                      return <Productskeleton />;
                    })}
                  </Grid>
                )}
                {/* loadmore icon */}
                {(filterItems && filterItems.length === 0) ||
                filterItems === undefined ||
                filterItems === "" ? (
                  <div></div>
                ) : (
                  <Box display={{ base: "block", md: "none" }}>
                    {" "}
                    <Text
                      color={"#3E485D"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="sm"
                      lineHeight="26px"
                      fontWeight="bold"
                      onClick={() => clickedLoadMore()}
                      cursor="default"
                    >
                      Load more
                    </Text>
                    <Text
                      color={"#3E485D"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="sm"
                      lineHeight="26px"
                    >
                      <Icon as={ArrowDownIcon} boxSize={4} mx={2} />
                    </Text>
                  </Box>
                )}

                {/* Pagination start */}

                {(filterItems && filterItems.length === 0) ||
                filterItems === undefined ||
                filterItems === "" ? (
                  <div></div>
                ) : (
                  <Box
                    display={{ base: "none", md: "flex" }}
                    justifyContent="center"
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
                          onClick={() => doubleLeft()}
                        />
                      </Circle>
                    </span>
                    <span>
                      <Circle
                        p="2"
                        border="1px solid #9DA7BE"
                        _hover={{ bg: "#3E485D !important" }}
                      >
                        <FaChevronLeft
                          color="#9DA7BE"
                          boxSize="2"
                          onClick={
                            currentPage === 1 ? "null" : goToPreviousPage
                          }
                        />
                      </Circle>
                    </span>
                    {
                      /* show page numbers */
                      console.log("current page new:", currentPage)
                    }
                    {getPaginationGroup().map((item, index) => (
                      <Circle
                        h="35px"
                        w="35px"
                        bg={currentPage === item ? "#3E485D" : null}
                        p="2"
                        border="1px solid #9DA7BE"
                        _hover={{ bg: "#3E485D !important" }}
                        color={currentPage === item ? "white" : "#9DA7BE"}
                        cursor="default"
                        ml={2}
                      >
                        <span key={index} onClick={changePage}>
                          {item}
                        </span>
                      </Circle>
                    ))}

                    <span>
                      <Circle
                        p="2"
                        border="1px solid #9DA7BE"
                        _hover={{ bg: "#3E485D !important" }}
                        ml={2}
                      >
                        <FaChevronRight
                          color="#9DA7BE"
                          boxSize="2"
                          onClick={
                            currentPage === pages ? "null" : goToNextPage
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
                          onClick={() => doubleRight()}
                        />
                      </Circle>
                    </span>
                  </Box>
                )}
              </Box>
            </Box>
            {/* produt and pagination */}
            {/* produt and pagination */}
            {/* produt and pagination */}
          </Grid>
        </Stack>
      </Stack>
    </>
  );
};

export default connect(SearchResult);
