import React from "react";
import { Box, Text, Image, Icon, Button } from "@chakra-ui/react";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import Link from "@frontity/components/link";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    // paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    // paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
};
const colors = ["red", "green", "blue", "orange"];

const Slider1 = ({ deviceType }) => {
  return (
    <Carousel
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // showDots={true}
    >
      {colors.map((color) => {
        return (
          <div>
            <Box m={2} p={3} border="1px solid #9DA7BE" rounded="lg">
              <Text color="#525F7A" fontSize="xs" textAlign="center" mb={2}>
                20 Feb 2021 8:00 AM GMT{" "}
              </Text>
              <Image
                borderRadius="lg"
                w="100%"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/10/1-1d.png"
              />
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
                  View Now
                </Button>
              </Link>
            </Box>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider1;
