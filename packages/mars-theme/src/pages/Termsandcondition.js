import Icon from "@chakra-ui/icon";
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { connect } from "frontity";
// import { list } from "@chakra-ui/styled-system";
import React from "react";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import Breadcrumb from "../component/Breadcrumb";

const Termsandcondition = ({ state, actions, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const pageId = state.source.get(state.router.link).id;
  const pageData = state.source.page[pageId];
  const path = state.router.link;
  return (
    <>
      <Box
        mx={{ base: "6", md: "16", lg: "40" }}
        mt={{ base: "30px", md: "none" }}
        mb="30px !important"
      >
        <Stack mb="30px !important">
          <Heading
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
            fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
            lineHeight="25px"
            fontWeight="bold"
            color="#3E485D"
            textAlign="center"
          >
            Terms & Condition
          </Heading>

          <Breadcrumb breadcrumb={path} />
        </Stack>
        <Box id="parag-div">
          <Text
            mt="10"
            color="#3E485D"
            fontSize="sm"
            lineHeight="26px"
            textAlign="justify"
          >
            {/* start */}
            {pageData == undefined || pageData == null ? (
              <div></div>
            ) : (
              <Html2React html={pageData.content.rendered} />
            )}

            {/* ?end */}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default connect(Termsandcondition);
