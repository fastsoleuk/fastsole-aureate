import React from "react";
import { Box, Text, VStack } from "@chakra-ui/layout";

const CardDetails = ({ title, props }) => {
  console.log("hicard", title);
  return (
    props && (
      <Box rounded="lg" bg="#F8F8F8" my={5} py={3}>
        <VStack ml={8} alignItems="start">
          <Text
            color="#3E485D"
            fontSize="lg"
            fontWeight="bold"
            lineHeight="normal"
            mt={3}
            fontFamily="Martel"
            letterSpacing={0.55}
          >
            All Release Info {title}
          </Text>
          <Box display="flex">
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="semibold"
              mr={5}
              w={"89px"}
            >
              Release Date:
            </Text>
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="normal"
            >
              {props.releaseDate}
            </Text>
          </Box>
          <Box display="flex">
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="semibold"
              mr={5}
              w={"89px"}
            >
              Price:
            </Text>
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="normal"
            >
              £{props.price}
            </Text>
          </Box>{" "}
          <Box display="flex">
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="semibold"
              mr={5}
              w={"89px"}
            >
              Brand:
            </Text>
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="normal"
            >
              {props.brand}
            </Text>
          </Box>{" "}
          <Box display="flex">
            {props.model != "" ? (
              <Text
                fontFamily="Open Sans"
                color="#3E485D"
                fontSize="sm"
                fontWeight="semibold"
                mr={5}
                w={"89px"}
              >
                Model:
              </Text>
            ) : null}

            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="normal"
            >
              {props.model}
            </Text>
          </Box>
          {/* <Box display="flex">
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="semibold"
              mr={5}
            >
              Style:
            </Text>
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="normal"
            >
              {props.styleCode}
            </Text>
          </Box> */}
          <Box display="flex">
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="semibold"
              mr={5}
              w={"89px"}
            >
              Style Code :
            </Text>
            <Text
              fontFamily="Open Sans"
              color="#3E485D"
              fontSize="sm"
              fontWeight="normal"
            >
              {props.styleCode != undefined && props.styleCode != null
                ? props.styleCode
                : "TBC"}
            </Text>
          </Box>
        </VStack>
      </Box>
    )
  );
};

export default CardDetails;
