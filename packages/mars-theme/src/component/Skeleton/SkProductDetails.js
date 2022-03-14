import { css } from "frontity";
import { Box, Skeleton, Flex } from "@chakra-ui/react";
import React from "react";

const SkProductDetails = () => {
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Box mx={{ base: "6", md: "16", lg: "40" }}>
        <Box
          textAlign="center"
          mt="5"
          mb="5"
          px={5}
          display={{ base: "none", md: "contents" }}
        >
          <Skeleton height="10px" width="100%" />
        </Box>
        <Flex my={5} display={{ base: "none", md: "flex" }}>
          {/* menu bradecrum */}

          <Box w={{ base: "100%", md: "60%" }} mr={5}>
            {/* <Box>
              <Skeleton height="200px" />
            </Box> */}
            <Skeleton height={{ md: "xs" }} rounded="lg" />
            <Box display="flex" my={3}>
              {tempArr.slice(0, 5).map((data, index) => {
                return (
                  <Skeleton
                    height="60px"
                    width="100px"
                    rounded="lg"
                    px={3}
                    mx={2}
                    key={"skProductElement2-" + index}
                  />
                );
              })}
            </Box>

            <Box textAlign="center" mt="3" mb="3">
              <Skeleton height="20px" />
            </Box>
            <Box textAlign="center" mt="3" mb="3">
              <Skeleton height="20px" />
            </Box>
            <Box textAlign="center" mt="5" mb="5">
              <Skeleton
                css={css`
                  aspect-ratio: 16/9;
                `}
              />
            </Box>
          </Box>
          {/* /> */}
          <Box width="40%" display={{ base: "none", md: "block" }}>
            <Skeleton height="30px" />

            <Box my={2}>
              {tempArr.map((data, index) => {
                return (
                  <Skeleton
                    height="80px"
                    width="100%"
                    rounded="md"
                    my={2}
                    key={"SKProductDetailsKey-" + index}
                  />
                );
              })}
            </Box>
          </Box>
        </Flex>

        <Box display={{ md: "none" }} textAlign="center" my={5}>
          {/* menu bradecrum */}
          <Box textAlign="center" mt="8" mb="2" px={5}>
            <Skeleton height="30px" />
          </Box>
          <Box textAlign="center" mt="2" mb="10" px={5}>
            <Skeleton height="20px" />
          </Box>
          <Box textAlign="center" mt="5" mb="5">
            <Skeleton
              css={css`
                aspect-ratio: 16/9;
              `}
            />
          </Box>
          <Flex width="100%">
            {tempArr.slice(0, 5).map((data, index) => {
              return (
                <Skeleton
                  height="10px"
                  width="10px"
                  rounded="lg"
                  px={2}
                  mx={2}
                  alignItems="center"
                  textAlign="center"
                  key={"skProductElement" + index}
                />
              );
            })}
          </Flex>
          <Box textAlign="center" mt="3" mb="3">
            <Skeleton height="20px" />
          </Box>
          <Box textAlign="center" mt="3" mb="3">
            <Skeleton height="20px" />
          </Box>
          <Box textAlign="center" mt="3" mb="3">
            <Skeleton height="20px" width="60px" />
          </Box>
          <Box textAlign="center" mt="5" mb="5">
            <Skeleton height="100px" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SkProductDetails;
