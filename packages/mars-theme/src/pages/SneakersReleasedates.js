import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { connect, Head } from "frontity";
import { Box, Flex, Grid, Stack, Text, VStack } from "@chakra-ui/layout";
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
} from "@chakra-ui/react";
import React from "react";
import {
  FaCheckCircle,
  FaChevronRight,
  FaCircle,
  FaSlidersH,
  FaUndo,
} from "react-icons/fa";
// import Filtermobile from '../component/Filtermobile'
import ShopBody from "../component/ShopBody";
import Link from "@frontity/components/link";
import Commondata2 from "../component/Commondata2";
import Breadcrumb from "../component/Breadcrumb";
import Productskeleton from "../component/Productskeleton";

//  <Link link="/productdetails"></Link>

const SneakersReleasedates = ({ state, actions, libraries }) => {
  const [readMore, setreadMore] = useState(false);
  let postData = state.source.get(state.router.link);
  let data = postData.link;

  const schemaData = postData.schemaData && postData.schemaData;

  console.log("snakerdataapi", schemaData);

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
      ) : null}
      <Stack
        mx={{ base: "6", md: "16", lg: "40" }}
        mt={{ base: "30px", md: "none" }}
        mb="30px !important"
      >
        <Stack mb="30px !important">
          <Heading
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
            fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}
            lineHeight="25px"
            fontWeight="bold"
            color="#3E485D"
            textAlign="center"
          >
            Sneakers Release dates
          </Heading>
          {data && <Breadcrumb breadcrumb={data} />}
        </Stack>

        <Commondata2 />
        {/* <Productskeleton /> */}

        <Stack border="1px solid #D8DEE7" rounded="lg" mt="30px !important">
          <Box mx={8} my={8}>
            <Text
              color={"#666666"}
              textAlign="center"
              fontSize="sm"
              fontStyle="normal"
              fontWeight="normal"
              lineHeight="26px"
              noOfLines={readMore ? 10 : 3}
            >
              Looking for the best Nike trainers in the UK and Europe? Then
              FastSoleUK is at your service! The Swoosh brand is always on its
              top-game and updating the sneaker culture with every release. The
              innovative designs and all the season-friendly colour palettes
              make sure you have the highest score in your sneaker game all year
              long. Similarly, the highly engineered and foot-friendly features,
              for example, the AIR unit, VaporFly material, team-up between
              React and Air Max, have been the fuel for the brand's skyrocketing
              success. We all admire a Nike classic sneaker as well as we love
              to take away the attention with a contemporary one
            </Text>
            <Text
              color={"#3E485D"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm"
              lineHeight="26px"
              // fontWeight="bold"
              onClick={() => {
                setreadMore(!readMore);
              }}
            >
              Read {readMore ? "less" : "more"}
            </Text>
            <Text
              color={"#3E485D"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="sm"
              lineHeight="26px"
              onClick={() => {
                setreadMore(!readMore);
              }}
            >
              <Icon
                as={readMore ? ArrowUpIcon : ArrowDownIcon}
                boxSize={4}
                mx={2}
              />
            </Text>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default connect(SneakersReleasedates);
