import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaClock } from "react-icons/fa";

const NoProduct = () => {
  return (
    <Box h={100} w="100%" alignItems="center">
      <Text color="#000" fontSize="md" lineHeight="22px" textAlign={"center"} fontWeight={"bold"}>
        {/* <Icon as={FaClock} boxSize="3" mr={1} color={"#FF6600"} /> */}
        No Products Available
      </Text>
    </Box>
  );
};

export default NoProduct;
