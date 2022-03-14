import React from "react";
import { Box, Flex, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import {
  Heading,
  Icon,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Radio,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RadioGroup,
} from "@chakra-ui/react";
import { FaCircle, FaUndo } from "react-icons/fa";

function Filtermobile({ isOpen, onClose }) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody color="#3E485D">
            <Box p={4}>
              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Release calender
              </Heading>

              <Input
                type="date"
                color="#C2C8D6"
                my="3"
                size="sm"
                variant="flushed"
              />

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Stock
              </Heading>

              <RadioGroup
                //  defaultValue="Itachi"
                my={2}
              >
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                >
                  <Radio size="sm" value="Sasuke">
                    In Stock
                  </Radio>
                  <Radio size="sm" value="Nagato">
                    Coming soon
                  </Radio>
                  <Radio size="sm" value="Itachi">
                    Sold out
                  </Radio>
                </VStack>
              </RadioGroup>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Gender
              </Heading>

              <RadioGroup my={3}>
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                >
                  <Radio size="sm" value="Sasuke">
                    Male
                  </Radio>
                  <Radio size="sm" value="Nagato">
                    Female soon
                  </Radio>
                </VStack>
              </RadioGroup>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Brand
              </Heading>

              <RadioGroup
                //  defaultValue="Itachi"
                my={3}
              >
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                >
                  <Radio size="sm" value="Sasuke">
                    In Stock
                  </Radio>
                  <Radio size="sm" value="Nagato">
                    Coming soon
                  </Radio>
                  <Radio size="sm" value="Itachi">
                    Sold out
                  </Radio>
                </VStack>
              </RadioGroup>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Collection
              </Heading>

              <RadioGroup
                //  defaultValue="Itachi"
                my={3}
              >
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                >
                  <Radio size="sm" value="Sasuke">
                    In Stock
                  </Radio>
                  <Radio size="sm" value="Nagato">
                    Coming soon
                  </Radio>
                  <Radio size="sm" value="Itachi">
                    Sold out
                  </Radio>
                </VStack>
              </RadioGroup>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Style
              </Heading>

              <RadioGroup
                //  defaultValue="Itachi"
                my={3}
              >
                <VStack
                  color="#525F7A"
                  alignItems="flex-start"
                  fontStyle="normal"
                  lineHeight="19px"
                  fontWeight="normal"
                >
                  <Radio size="sm" value="Sasuke">
                    In Stock
                  </Radio>
                  <Radio size="sm" value="Nagato">
                    Coming soon
                  </Radio>
                  <Radio size="sm" value="Itachi">
                    Sold out
                  </Radio>
                </VStack>
              </RadioGroup>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                color
              </Heading>

              <Grid templateColumns={{ base: "1fr 1fr 1fr 1fr 1fr 1fr" }}>
                <Icon as={FaCircle} boxSize={5} color="blue" mr={2} mb="2" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="black" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="blue" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="red" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="yellow" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="green" />

                <Icon as={FaCircle} mr={3} boxSize={5} color="red.300" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="orange" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="green.300" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="teal" />
                <Icon as={FaCircle} mr={3} boxSize={5} color="cyan" />
              </Grid>

              <Heading
                display="block"
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                fontStyle="normal"
                color="#3E485D"
                lineHeight="27px"
              >
                Price Range
              </Heading>

              <Flex>
                <Text color="#7887A5" mr={1}>
                  0
                </Text>
                <RangeSlider
                  aria-label={["min", "max"]}
                  colorScheme="green"
                  defaultValue={[10, 30]}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Text color="#7887A5" ml={1}>
                  500
                </Text>
              </Flex>

              <Button
                colorScheme="#525F7A"
                bg="#525F7A"
                color=" white"
                size="xs"
                p={3}
                mt={3}
                h="30px"
                w="100px"
              >
                <Icon as={FaUndo} boxSize={3} mr={2} /> Reset
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Filtermobile;
