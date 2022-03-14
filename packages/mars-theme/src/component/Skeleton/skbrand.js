import { Box, } from "@chakra-ui/react";
import React from "react";
import { Skeleton, SkeletonCircle } from "@chakra-ui/react";

const Skbrand = () => {
  return (
    <Box mx={3} my={2}>
      <Skeleton height="115px" borderRadius={"10px"} />
      <Box display={"flex"} mt="10px" alignItems={"center"}>
        <SkeletonCircle size="10" mr={"10px"} />
        <Skeleton height="8px" width={"50%"} />
      </Box>
    </Box>
  );
};

export default Skbrand;
