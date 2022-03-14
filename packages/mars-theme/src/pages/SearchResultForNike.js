// import { ArrowDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Grid,
  HStack,
  Stack,
  Text,
  VStack,
  Center,
} from "@chakra-ui/layout";
import {
  Heading,
  Button,
  Select,
  Image,
  Icon,
  Input,
  RadioGroup,
  useDisclosure,
  Radio,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { connect, Head } from "frontity";
import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaChevronRight,
  FaCircle,
  FaSlidersH,
} from "react-icons/fa";
import Commonproductdata from "../component/Commonproductdata";
import SearchResult from "../component/SearchResult";
// import Filtermobile from "../component/Filtermobile";
import ShopBody from "../component/ShopBody";
import TopBrandSlider from "../component/TopBrandSlider";
import ViewAllbtn from "../component/ViewAllbtn";
import ViewAllMobile from "../component/ViewAllMobile";

function SearchResultForNike({ state, actions, libraries }) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();
  const pageData = state.source.get(state.router.link);
  // previous
  // const finalSlug = state.source.get(state.router.link).searchQuery;

  // later

  const finalSlug = pageData && pageData.query.s;
  // .split("=");
  const schemaData = pageData.schemaData && pageData.schemaData;

  let prodTitle = finalSlug && finalSlug.split("+").join(" ");
  let apiSlug = finalSlug && finalSlug.split("+").join("-");
  let finalTitle = finalSlug && prodTitle.toUpperCase();
  console.log("product title =", finalSlug);

  return (
    <>
      {schemaData !== undefined && schemaData !== null ? (
        <Head>
          {schemaData.meta && <title>{schemaData.meta.title}</title>}
          <meta
            data-rh="true"
            name="thumbnail"
            content={schemaData.meta.favicon}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="viewport"
            content="width=device-width, initial-scale=1"
            data-reactroot=""
          />

          <meta
            data-rh="true"
            property="fb:app_id"
            content={schemaData.meta.fbAppId}
            data-reactroot=""
          />
          <meta data-rh="true" charSet="utf-8" data-reactroot="" />
          <meta
            data-rh="true"
            property="og:locale"
            content="en_GB"
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:type"
            content="website"
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:site_name"
            content={schemaData.meta.sitename}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:card"
            content="summary"
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:site"
            content={schemaData.meta.twitter}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:creator"
            content={schemaData.meta.twitter}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="description"
            content={schemaData.meta.description}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:title"
            content={schemaData.meta.title}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:description"
            content={schemaData.meta.description}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:url"
            content={schemaData.meta.sitename}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:title"
            content={schemaData.meta.titleTwitter}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:description"
            content={schemaData.meta.description}
            data-reactroot=""
          />
          <script type="application/ld+json">
            {`
             ${schemaData.schema}
             `}
          </script>
          <script type="application/ld+json">
            {`
             ${schemaData.breadCrumb}
             `}
          </script>
        </Head>
      ) : null}{" "}
      <Stack
        mx={{ base: "6", md: "16", lg: "40" }}
        mt={{ base: "30px", md: "none" }}
        mb="30px !important"
      >
        <Stack mb="30px !important">
          {finalTitle && (
            <Heading
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
              fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
              lineHeight="25px"
              fontWeight="bold"
              color="#3E485D"
              textAlign="center"
            >
              Search result for “{finalTitle}”
            </Heading>
          )}
          <Text
            color={"#7887A5"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xs"
            lineHeight="26px"
          >
            Home
            <Icon as={FaChevronRight} boxSize={2} mx={2} /> Nike
          </Text>
        </Stack>

        <HStack
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          mb="15px !important"
          display={{ base: "none", md: "flex" }}
        >
          <Text
            color="#666666"
            fontSize="16px"
            fontFamily="inherit"
            mr={5}
            fontSize="xs"
          >
            Related Search
          </Text>
          <Wrap direction="row" ml="0px !important">
            {/* {brandList.map((data, index) => {
            return (
              <WrapItem>
                <Center
                  bg="#F3F4F7"
                  px={2}
                  py={1}
                  borderRadius="md"
                  borderRadius="md"
                  fontSize="xs"
                >
                  {data}
                </Center>
              </WrapItem>
            );
          })} */}
          </Wrap>
        </HStack>
        {finalTitle && <SearchResult searchString={finalTitle} />}

        <Stack py={10}>
          <Flex justifyContent="space-between" alignItems="baseline">
            <Heading
              mb={2}
              fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
              color={"#3E485D"}
              lineHeight="normal"
              fontWeight="bold"
            >
              Top Brands
            </Heading>
            
            <ViewAllbtn link="/sneaker-release-dates/brands" />

          </Flex>

          <TopBrandSlider />

          <Stack alignItems="center" my="10px !important">
           
            <ViewAllMobile link="/sneaker-release-dates/brands" />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default connect(SearchResultForNike);
