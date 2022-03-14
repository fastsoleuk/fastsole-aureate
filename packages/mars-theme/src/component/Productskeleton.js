import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Productskeleton = () => {
  return (
    <div>
      <Box border="1px solid #9DA7BE" borderRadius={"lg"} p={"2"}>
        <SkeletonText noOfLines={1} spacing="2" />
        <Skeleton mt="2" height="60px" />
        <SkeletonText mt="2" noOfLines={4} spacing="2" />
        <Skeleton mt="2" height="20px" />
      </Box>
      {/* <Grid templateColumns={{ md: "1fr 1fr 1fr", sm: "repeat(3, 1fr)", base: "repeat(2,1fr)" }}
                textColor="white" gap={6}>
               

                <Box border="1px solid #9DA7BE" borderRadius={"lg"} p={"2"} >
                    <SkeletonText noOfLines={1} spacing='2' />
                    <Skeleton mt="2" height='60px' />
                    <SkeletonText mt="2" noOfLines={4} spacing='2' />
                    <Skeleton mt="2" height='20px' />
                </Box>

            </Grid> */}
    </div>
  );
};

export default Productskeleton;
