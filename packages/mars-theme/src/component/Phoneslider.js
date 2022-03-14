import React from "react";
import Carousel from "react-multi-carousel";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import ImageViewFeatured from "../Utils/ImageViewFeatured";
import connect from "@frontity/connect";
import dayjs from "dayjs";
import Link from "@frontity/components/link";

function Phoneslider({ state, props, libraries }) {
  const Html2React = libraries.html2react.Component;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 769 },
      items: 0,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const ProduCart = ["1", "2", "3"];

  return (
    <div>
      <Carousel
        responsive={responsive}
        display={{ base: "block", md: "block", lg: "none" }}
      >
        {props.map((items) => {
          console.log("propscheck", props);
          const id = items.id;
          const type = items.type;
          const item = state.source[type][id];
          return (
            // <Link link={item.link}>
            <Box mx="3" rounded="xl" border="1px solid #D8DEE7">
              <Link link={item.link}>
                <Box flexShrink={0}>
                  <ImageViewFeatured id={item.featured_media} />
                </Box>
              </Link>
              <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} m="4">
                <span mb="2" color="#7887A5">
                  {dayjs(item.date).format("DD MMMM YYYY")}
                </span>
                <Heading as="h3">
                  <Link link={item.link}>
                    <Text
                      // mt={1}
                      noOfLines={2}
                      fontSize="lg"
                      lineHeight="normal"
                      fontWeight="semibold"
                      href="#"
                      fontStyle="normal"
                      fontFamily="Martel"
                      color={"#3E485D"}
                      pb="1"
                    >
                      {<Html2React html={item.title.rendered} />}
                    </Text>
                  </Link>
                </Heading>
              </Box>
            </Box>
            // </Link>
          );
        })}
      </Carousel>
    </div>
  );
}

export default connect(Phoneslider);
