import React from "react";
import { Box, Flex, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
import {
  Heading,
  Icon,
  Input,
  RadioGroup,
  Radio,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

function Filtermobile2() {
  return (
    <div>
      <Box p={2} border="1px solid lightgray" rounded="lg">
        <Heading
          display="block"
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          lineHeight="normal"
          fontWeight="600"
          href="#"
          color="gray.600"
          fontFamily="Assistant ,sans-serif"
          lineHeight="inherit"
        >
          Release calender
        </Heading>

        <Input type="date" color="black" my="3" />

        <Heading
          display="block"
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          lineHeight="normal"
          fontWeight="600"
          href="#"
          color="gray.600"
          fontFamily="Assistant ,sans-serif"
          lineHeight="inherit"
        >
          Stock
        </Heading>

        <RadioGroup
          //  defaultValue="Itachi"
          my={3}
        >
          <VStack color="black" alignItems="flex-start">
            <Radio value="Sasuke">In Stock</Radio>
            <Radio value="Nagato">Coming soon</Radio>
            <Radio value="Itachi">Sold out</Radio>
          </VStack>
        </RadioGroup>

        <Heading
          display="block"
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          lineHeight="normal"
          fontWeight="600"
          href="#"
          color="gray.600"
          fontFamily="Assistant ,sans-serif"
          lineHeight="inherit"
        >
          Gender
        </Heading>

        <RadioGroup defaultValue="Itachi" my={3}>
          <VStack color="black" alignItems="flex-start">
            <Radio value="Sasuke">Male</Radio>
            <Radio value="Nagato">Female soon</Radio>
          </VStack>
        </RadioGroup>

        <Heading
          display="block"
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          lineHeight="normal"
          fontWeight="600"
          href="#"
          color="gray.600"
          fontFamily="Assistant ,sans-serif"
          lineHeight="inherit"
        >
          Brand
        </Heading>

        <RadioGroup
          //  defaultValue="Itachi"
          my={3}
        >
          <VStack color="black" alignItems="flex-start">
            <Radio value="Sasuke">In Stock</Radio>
            <Radio value="Nagato">Coming soon</Radio>
            <Radio value="Itachi">Sold out</Radio>
          </VStack>
        </RadioGroup>

        <Heading
          display="block"
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          lineHeight="normal"
          fontWeight="600"
          href="#"
          color="gray.600"
          fontFamily="Assistant ,sans-serif"
          lineHeight="inherit"
        >
          Collection
        </Heading>

        <RadioGroup
          //  defaultValue="Itachi"
          my={3}
        >
          <VStack color="black" alignItems="flex-start">
            <Radio value="Sasuke">In Stock</Radio>
            <Radio value="Nagato">Coming soon</Radio>
            <Radio value="Itachi">Sold out</Radio>
          </VStack>
        </RadioGroup>

        <Heading
          display="block"
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          lineHeight="normal"
          fontWeight="600"
          href="#"
          color="gray.600"
          fontFamily="Assistant ,sans-serif"
          lineHeight="inherit"
        >
          Style
        </Heading>

        <RadioGroup
          //  defaultValue="Itachi"
          my={3}
        >
          <VStack color="black" alignItems="flex-start">
            <Radio value="Sasuke">In Stock</Radio>
            <Radio value="Nagato">Coming soon</Radio>
            <Radio value="Itachi">Sold out</Radio>
          </VStack>
        </RadioGroup>

        <Heading
          display="block"
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          lineHeight="normal"
          fontWeight="600"
          href="#"
          color="gray.600"
          fontFamily="Assistant ,sans-serif"
          lineHeight="inherit"
        >
          color
        </Heading>

        <Flex mt={3} mb={1}>
          <Icon as={FaCircle} boxSize={4} color="black" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="blue" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="red" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="yellow" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="green" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="gray" mr={1} />
        </Flex>
        <Flex mb={3} mt={1}>
          <Icon as={FaCircle} boxSize={4} color="red.300" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="orange" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="green.300" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="teal" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="cyan" mr={1} />
          <Icon as={FaCircle} boxSize={4} color="purple" mr={1} />
        </Flex>

        <Heading
          display="block"
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          lineHeight="normal"
          fontWeight="600"
          href="#"
          color="gray.600"
          fontFamily="Assistant ,sans-serif"
          lineHeight="inherit"
        >
          Price Range
        </Heading>

        <Flex>
          <Text color="black" mr={1}>
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
          <Text color="black" ml={1}>
            500
          </Text>
        </Flex>
      </Box>
    </div>
  );
}

export default Filtermobile2;
