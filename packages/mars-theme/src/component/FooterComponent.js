import { Flex, Button, VStack, useBreakpointValue } from "@chakra-ui/react";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

function FooterComponent() {
  return (
    <>
      <Stack>
        <Flex
          mb={-100}
          mt={10}
          border="1px solid lightgray"
          borderRadius="2xl"
          w={"full"}
          py={{ base: "8px", md: "50" }}
          // h={"55vh"}
          h="auto"
          bg="#393D46"
        >
          <VStack
            w={"full"}
            borderRadius="3xl"
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            py={useBreakpointValue({ base: 4 })}
            backgroundImage={
              "url(https://wptesting.thenwg.xyz/wp-content/uploads/2021/11/Mask-Groupfg.png)"
            }
            backgroundSize={"contain"}
            backgroundPosition={"center center"}
          >
            <Stack
              maxW={"2xl"}
              align={"flex-start"}
              spacing={4}
              alignItems="center"
              textAlign="center"
            >
              <Heading
                color={"#FFFFFF"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({
                  base: "lg",
                  md: "3xl",
                  lg: "5xl",
                })}
              >
                Get our daily newsletter
              </Heading>

              {/* <Text color={"#FFFFFF"} fontSize={{ base: "sm", md: "lg" }}>
                Get 40% OFF your whole order at checkout when you add three or
                more books to your cart
              </Text> */}

              <InputGroup py={4} w={{ base: "100%", md: "60%" }}>
                <Input
                  type="email"
                  w={"full"}
                  h={"48px"}
                  bg="white"
                  fontSize="xs"
                  placeholder="Subscribe Now"
                />
                <InputRightElement
                  children={
                    <ArrowForwardIcon
                      color="#FFFFFF"
                      bg="#3E485D"
                      boxSize="9"
                      p="2"
                      rounded="md"
                    />
                  }
                  top="20px !important"
                  right="4px "
                />
              </InputGroup>
            </Stack>
          </VStack>
        </Flex>
      </Stack>
    </>
  );
}

export default FooterComponent;
