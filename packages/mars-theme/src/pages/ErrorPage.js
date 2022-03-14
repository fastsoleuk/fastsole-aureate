import React from "react";
import { Center, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Center>
      <Text
        fontSize={{ base: "lg", md: "lg", lg: "lg" }}
        fontWeight="bold"
        fontStyle="normal"
        fontFamily="Martel"
        color={"#3E485D"}
        noOfLines={2}
        my="10"
        // lineHeight="normal"
      >
        404 | Error
      </Text>
    </Center>
  );
};

export default ErrorPage;
