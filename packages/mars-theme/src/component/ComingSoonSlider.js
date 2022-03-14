import { Box, Text, Image, Icon, Button } from "@chakra-ui/react";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import Link from "@frontity/components/link";
import { useState, useEffect, useReducer } from "react";
import { connect } from "frontity";
import Productskeleton from "./Productskeleton";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    // paritialVisibilityGutter: 80
  },
};

const ComingSoonSlider = ({ deviceType, actions, libraries, state }) => {
  // const [slugData, dispatch] = useReducer(SlugReducer, initialState);
  // const [myslug, setMyslug] = useReducer(SlugReducer, initialState);
  //  const [todos, dispatch] = useReducer(reducer, { count: initialCount });

  const [prodData, setprodData] = useState([]);

  useEffect(() => {
    // myslug;
    fetchData();
    // prodData;
  }, [""]); //update by santosh

  const fetchData = async () => {
    const response = await libraries.source.api.get({
      endpoint: "/wl/v1/coming-soon",
    });

    const result = await response.json();

    // console.log("category tab post = ", categoryTabPostData);

    actions.comingSoon.toggleLoading();
    actions.comingSoon.updatePostData(result);

    setprodData(state.comingSoon.postData);
  };

  console.log("comingsoon", state.comingSoon.postData);
  const tempList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Carousel responsive={responsive} partialVisbile deviceType={deviceType}>
      {!state.onFocus.isLoading
        ? prodData &&
        prodData.slice(0, 8).map((item) => {
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
            item && (
              <div>
                <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
                  <Text
                    as="span"
                    color="#525F7A"
                    fontSize="small"
                    textAlign="center"
                    mb={2}
                    noOfLines={1}
                    whiteSpace="nowrap"
                  >
                    {item.release_date} GMT{" "}
                  </Text>

                  <Link link={item.slug}>
                    <Box
                      w={"100%"}
                      overflow={"hidden"}
                      className="container-img"
                    >
                      <img
                        className="cont-img-div"
                        borderRadius="lg"
                        width="130px"
                        height="78px"
                        mx="auto"
                        src={item.featured_image.medium}
                        lineHeight="22px"
                        transform="rotate3d(1, 1, 1,
                      324deg)"
                      />

                    </Box>
                  </Link>

                  {/* <FontAwesomeIcon icon={['fab', 'ticket']} boxSize={4} /> */}

                  {status}

                  <Link link={item.slug}>
                    <Text
                      fontWeight="600"
                      color="#3E485D"
                      fontSize="xs"
                      lineHeight="22px"
                      fontStyle="normal"
                      noOfLines={2}
                      h="44px"
                    >
                      {item.post_title}
                    </Text>
                  </Link>

                  <Text
                    fontWeight="bold"
                    color="#525F7A"
                    fontSize="xs"
                    lineHeight="22px"
                  >
                    {/* {myslug} */}£{item.esc_price}
                  </Text>
                  <Link link={item.slug}>
                    <Button
                      rounded="3px"
                      lineHeight="22px"
                      size="xs"
                      color="#3E485D"
                      variant="unstyled"
                      border="1px solid #9DA7BE"
                      w={"full"}
                      h="30px"
                      my={2}
                      _hover={{ bg: "#525F7A", color: " white" }}
                    >

                      View Now
                    </Button>
                  </Link>
                </Box>
              </div>
            )
          );
        })
        : tempList.map((data) => {
          return (
            <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
              <Productskeleton />
            </Box>
          );
        })}
    </Carousel>

  );
};

export default connect(ComingSoonSlider);
