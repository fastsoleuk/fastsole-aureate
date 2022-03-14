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
// import { list } from "@chakra-ui/styled-system";
import React from "react";
import { connect } from "frontity";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";

function Impressum({ state, libraries }) {
  const Html2React = libraries.html2react.Component;
  const impressumData = state.source.page[3495];
  console.log('hkhkhkhk',impressumData)
  return (
    <>
      <Box mx={{ base: "6", md: "16", lg: "40" }} mb="10">
        <Stack mb="12">
          <Heading
            fontSize={{ md: "md", lg: "xl", sm: "lg" }}
            textAlign="center"
            fontWeight="bold"
            color="#3E485D"
            mt="10"
          >
            <Html2React html={impressumData.title.rendered} />
          </Heading>

          <Box textAlign="center" mt="10" mb="6">
            <Link href="/" color="#7887A5" fontSize="xs">
              Home
              <Icon as={FaChevronRight} boxSize="2" mx="1" color="#7887A5" />{" "}
              <Html2React html={impressumData.title.rendered} />
            </Link>
          </Box>

          <Stack justifyContent="space-around" id="parag-div" className="contentImage">
            <Text fontSize="sm">
              {impressumData == undefined || impressumData == null ? (
                <div></div>
              ) : (
                <Html2React html={impressumData.content.rendered} />
              )}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
export default connect(Impressum);