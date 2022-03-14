import { ArrowDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import { Heading, Image, Icon, useDisclosure } from "@chakra-ui/react";
import connect from "@frontity/connect";
import React, { useState } from "react";
import ImageViewFeatured from "../Utils/ImageViewFeatured";
import Link from "@frontity/components/link";
import dayjs from "dayjs";
import Breadcrumb from "../component/Breadcrumb";
import {
  FaCheckCircle,
  FaChevronRight,
  FaCircle,
  FaSlidersH,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const BlackFriday = ({ state, libraries, actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);
  const id = data && data.id;
  const breadCrumbData = data && data.link;

  const path = state.router.link;
  console.log("this is data", path);
  let [isClick, setIsClick] = useState(false);

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
          Black friday 2020
        </Heading>
        {path && <Breadcrumb breadcrumb={path} />}
        {/* {breadCrumbData && <Breadcrumb breadcumbs={breadCrumbData} />} */}
      </Stack>

      <Grid
        templateColumns={{ md: "1fr 1fr 1fr 1fr", sm: "repeat(4, 1fr)" }}
        textColor="white"
        gap={2}
        mb="20px !important"
      >
        {data.items &&
          data.items.map((item) => {
            const id = item.id;
            const type = item.type;

            const data = item && state.source[type][id];
            console.log("heavy", data);
            return (
              data && (
                <Box
                  m={2}
                  rounded="lg"
                  _hover={{ bg: "white", boxShadow: "xl" }}
                >
                  <Link link={data.link}>
                    <ImageViewFeatured id={data.featured_media} />
                  </Link>
                  {/* <Image
                borderRadius="lg"
                bg="lightgray"
                w="100%"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Rectangle-481.png"
              /> */}
                  <Box my={4}>
                    <Link link={data.link}>
                      <Heading
                        as="h3"
                        fontWeight="700"
                        color="#3E485D"
                        textAlign="center"
                        fontSize="sm"
                        _hover={{ color: "#F12026" }}
                      >
                        {<Html2React html={data.title.rendered} />}
                      </Heading>
                    </Link>
                    <Box>
                      <Text
                        fontWeight="400"
                        color="#3E485D"
                        textAlign="center"
                        fontSize="xs"
                      >
                        {dayjs(data.date).format("DD MMMM YYYY")}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              )
            );
          })}
      </Grid>

      <Stack border="1px solid #D8DEE7" rounded="lg" mt={4}>
        <Box mx={8} my={8}>
          <Text
            color={"#3E485D"}
            textAlign="center"
            fontSize="sm"
            fontStyle="normal"
            lineHeight="26px"
            noOfLines={isClick == false && 4}
          >
            Looking for the best Nike trainers in the UK and Europe? Then
            FastSoleUK is at your service! The Swoosh brand is always on its
            top-game and updating the sneaker culture with every release. The
            innovative designs and all the season-friendly colour palettes make
            sure you have the highest score in your sneaker game all year long.
            Similarly, the highly engineered and foot-friendly features, for
            example, the AIR unit, VaporFly material, team-up between React and
            Air Max, have been the fuel for the brand's skyrocketing success. We
            all admire a Nike classic sneaker as well as we love to take away
            the attention with a contemporary one!
          </Text>
          <Text
            color={"#3E485D"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            lineHeight="26px"
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            Read {isClick ? "less" : "more"}
          </Text>
          <Text
            color={"#3E485D"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="sm"
            lineHeight="26px"
          >
            {isClick ? (
              <FaChevronUp boxSize={2} color="#525F7A" />
            ) : (
              <FaChevronDown boxSize={2} color="#525F7A" />
            )}
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
};

export default connect(BlackFriday);
