import { Box, Flex, Text, Image, Center, Icon, Button } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import connect from "@frontity/connect";
import Link from "@frontity/components/link";

const Bannerslider = ({ children, coverImage, state, libraries }) => {
  console.log("checkcover", coverImage);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  if (children && children.length > 2) {
    return (
      <Carousel responsive={responsive}>
        {children
          ? children.map((item) => {
              console.log("create", item);
              if (item.brandImage !== null) {
                return (
                  <Box mx="3">
                    <Link link={item.url}>
                      {" "}
                      <Center>
                        <Text
                          rounded="3px"
                          position="absolute"
                          bg="white"
                          px="6"
                          py="3"
                          color="#3E485D"
                          fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                          textAlign="center"
                          fontFamily="Open Sans"
                          mb={2}
                        >
                          {item.termName}
                        </Text>

                        <img
                          id="brand-big-img"
                          width="100%"
                          height="100%"
                          src={coverImage}
                          alt={item.termName}
                          lineHeight="22px"
                        />
                      </Center>{" "}
                    </Link>
                  </Box>
                );
              }
            })
          : null}
      </Carousel>
    );
  } else {
    return null;
  }
};

export default connect(Bannerslider);
