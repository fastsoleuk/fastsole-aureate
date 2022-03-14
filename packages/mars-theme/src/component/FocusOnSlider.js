import { useState, useEffect } from "react";
import { Box, Text, Icon, Button } from "@chakra-ui/react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import Link from "@frontity/components/link";
import { connect, loadable } from "frontity";
const Productskeleton = loadable(() => import("./Productskeleton"));

const FocusOnSlider = ({ deviceType, actions, libraries, state }) => {
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

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchData();
    setDataLoaded(true);
  }, [dataLoaded]); //update by santosh

  const fetchData = async () => {
    const response = await libraries.source.api.get({
      endpoint: "/wl/v1/on-focus",
    });

    const categoryTabPostData = await response.json();

    console.log("category tab post = ", categoryTabPostData);

    actions.onFocus.toggleLoading();
    actions.onFocus.updatePostData(categoryTabPostData);
  };
  console.log("onfocus ", state.onFocus.postData);
  const tempList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Carousel responsive={responsive} partialVisbile deviceType={deviceType}>
      {!state.onFocus.isLoading
        ? state.onFocus.postData &&
        state.onFocus.postData.slice(0, 8).map((item, index) => {
          if (item.sneaker_status == "instock") {
            var status = (
              <Box key={"focusSLiderElement" + index}>
                <Text color="#3EB75E" fontSize="xs" mr="2" lineHeight="22px">
                  <Icon
                    as={FaCheckCircle}
                    boxSize="3"
                    mr={1}
                    color={"#3EB75E"}
                  />
                  In Stock
                </Text>
              </Box>
            );
          } else if (item.sneaker_status == "coming_soon") {
            var status = (
              <Box>
                {" "}
                <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                  <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                  Coming Soon
                </Text>
              </Box>
            );
          } else if (item.sneaker_status == "stockist_in_stock") {
            var status = (
              <Box>
                {" "}
                <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                  <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                  Stocklist In Stock
                </Text>
              </Box>
            );
          } else if (item.sneaker_status == "restock") {
            var status = (
              <Box>
                {" "}
                <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                  <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                  Re Stock
                </Text>
              </Box>
            );
          } else if (item.sneaker_status == "delayed") {
            var status = (
              <Box>
                {" "}
                <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                  <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                  Delayed
                </Text>
              </Box>
            );
          } else if (item.sneaker_status == "sold_out") {
            var status = (
              <Box>
                {" "}
                <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                  <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                  Sold Out
                </Text>
              </Box>
            );
          } else if (item.sneaker_status == "stockist_sold_out") {
            var status = (
              <Box>
                {" "}
                <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                  <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                  Stocklist Sold Out
                </Text>
              </Box>
            );
          } else {
            var status = (
              <Box>
                {" "}
                <Text color="#FF6600" fontSize="xs" lineHeight="22px">
                  <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
                  Nothing
                </Text>
              </Box>
            );
          }
          const slug = `/sneaker-release-dates/brands/${item.post_name}`;
          return (
            <div>
              <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
                <Box>
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
                </Box>
                {/* <motion.div whileHover={{ scale: 1.1 }}> */}
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
                      alt={item.post_title}
                      srcSet={item.featured_image.srcset}
                      loading="lazy"
                    />
                  </Box>
                </Link>
                {/* </motion.div> */}

                {status}
                <Box
                // h="20px"
                >
                  <Link link={item.slug}>
                    <Text
                      as="h3"
                      noOfLines={2}
                      fontWeight="600"
                      color="#3E485D"
                      fontSize="xs"
                      lineHeight="22px"
                      fontStyle="normal"
                      h="44px"
                    >
                      <Box> {item.post_title}</Box>
                    </Text>
                  </Link>
                </Box>

                <Box>
                  <Link link={item.slug}>
                    <Text
                      // mt={5}
                      fontWeight="bold"
                      color="#525F7A"
                      fontSize="xs"
                      lineHeight="22px"
                    >
                      £{item.esc_price}
                    </Text>
                  </Link>
                </Box>
                <Box>
                  {" "}
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
                {/* <Box>
                  <Link link={slug}>
                    
                {/* </Link> */}
                {/* </Box> */}
              </Box>
            </div>
          );
        })
        : tempList.map((data, index) => {
          return (
            <Box
              m={2}
              p={3}
              border="1px solid #9DA7BE"
              rounded="lg"
              key={"FocusOnSliderSkEleemnt-" + index}
            >
              <Productskeleton />
            </Box>
          );
        })}

      {/* <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image
              borderRadius="lg"
              // w="100%"
              mx="auto"
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
            />
          </motion.div>
          <Text color="#FF6600" fontSize="xs" lineHeight="22px">
            <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} />
            Coming Soon
          </Text>
          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>
          <Link link="/productdetails">
            <Button
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
              Buy Now
            </Button>
          </Link>
        </Box>
      </div>

      <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image
              borderRadius="lg"
              // w="100%"
              mx="auto"
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
            />
          </motion.div>
          <Text color="#F12026" fontSize="xs" lineHeight="22px">
            <Icon as={FaTimesCircle} boxSize="3" mr={1} color={"#F12026"} />
            Sold Out
          </Text>
          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>
          <Link link="/productdetails">
            <Button
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
              Buy Now
            </Button>
          </Link>
        </Box>
      </div>

      <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image
              borderRadius="lg"
              // w="100%"
              mx="auto"
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
              lineHeight="22px"
            />
          </motion.div>
          <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
            <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
            In Stock
          </Text>

          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>

          <Link link="/productdetails">
            <Button
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
              Buy Now
            </Button>
          </Link>
        </Box>
      </div>

      <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <Image
            borderRadius="lg"
            // w="100%"
            mx="auto"
            src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
            lineHeight="22px"
          />
          <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
            <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
            In Stock
          </Text>

          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>

          <Link link="/productdetails">
            <Button
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
              Buy Now
            </Button>
          </Link>
        </Box>
      </div>

      <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <Image
            borderRadius="lg"
            // w="100%"
            mx="auto"
            src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
            lineHeight="22px"
          />
          <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
            <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
            In Stock
          </Text>

          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>

          <Link link="/productdetails">
            <Button
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
              Buy Now
            </Button>
          </Link>
        </Box>
      </div>

      <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <Image
            borderRadius="lg"
            // w="100%"
            mx="auto"
            src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
            lineHeight="22px"
          />
          <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
            <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
            In Stock
          </Text>

          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>

          <Button
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
            Buy Now
          </Button>
        </Box>
      </div>

      <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <Image
            borderRadius="lg"
            // w="100%"
            mx="auto"
            src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
            lineHeight="22px"
          />
          <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
            <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
            In Stock
          </Text>

          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>

          <Button
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
            Buy Now
          </Button>
        </Box>
      </div>

      <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <Image
            borderRadius="lg"
            // w="100%"
            mx="auto"
            src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
            lineHeight="22px"
          />
          <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
            <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
            In Stock
          </Text>

          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>

          <Button
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
            Buy Now
          </Button>
        </Box>
      </div>

      <div>
        <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
          <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
            20 Feb 2021 8:00 AM GMT{" "}
          </Text>
          <Image
            borderRadius="lg"
            // w="100%"
            mx="auto"
            src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
            lineHeight="22px"
          />
          <Text color="#3EB75E" fontSize="xs" lineHeight="22px">
            <Icon as={FaCheckCircle} boxSize="3" mr={1} color={"#3EB75E"} />
            In Stock
          </Text>

          <Text
            fontWeight="600"
            color="#3E485D"
            fontSize="xs"
            lineHeight="22px"
            fontStyle="normal"
          >
            Nike Air Structure Triax 91 Neo Black CV3492-100
          </Text>

          <Text
            fontWeight="bold"
            color="#525F7A"
            fontSize="xs"
            lineHeight="22px"
          >
            $180.00{" "}
          </Text>

          <Button
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
            Buy Now
          </Button>
        </Box>
      </div> */}
    </Carousel>
  );
};

export default connect(FocusOnSlider);
