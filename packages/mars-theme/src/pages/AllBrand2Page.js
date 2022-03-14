import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Divider,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaChevronRight } from "react-icons/fa";
import { connect, Head } from "frontity";
import Link from "@frontity/components/link";
import Breadcrumb from "../component/Breadcrumb";

function AllBrand2Page({ state, libraries, actions }) {

  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    fetchData();
  }, [dataLoaded]); //update by santosh

  const fetchData = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/main-brands`,
    });

    const postData = await response.json();
    actions.allBrandItems.toggleLoading();
    actions.allBrandItems.updatePostData(postData);
  };

  console.log("brand data new:", state.allBrandItems.postData);

  const linkUrl = state.router.link;

  const pageData = state.source.get(state.router.link);

  const seoData = pageData.seodata && pageData.seodata;
  return (
    <>
      {seoData !== undefined && seoData !== null ? (
        <Head>
          {seoData.meta && <title>{seoData.meta.title}</title>}
          <meta
            data-rh="true"
            name="thumbnail"
            content={seoData.meta.favicon}
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
            content={seoData.meta.fbAppId}
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
            content={seoData.meta.sitename}
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
            content={seoData.meta.twitter}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:creator"
            content={seoData.meta.twitter}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:title"
            content={seoData.meta.title}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:url"
            content={seoData.meta.ogurl}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:title"
            content={seoData.meta.titleTwitter}
            data-reactroot=""
          />
          <script type="application/ld+json">
            {`
             ${seoData.schema}
             `}
          </script>
          {/* issues found in breadcruumb */}
          <script type="application/ld+json">
            {`
             ${seoData.breadCrumb}
             `}
          </script>

          {/* end here */}
        </Head>
      ) : null}
      {!state.allBrandItems.isLoading && (
        <Stack
          mx={{ base: "6", md: "16", lg: "40" }}
          mt={{ base: "30px", md: "none" }}
          mb="30px !important"
        >
          <Stack mb="30px !important">
            <Heading
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
              fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
              lineHeight="25px"
              fontWeight="bold"
              color="#3E485D"
              textAlign="center"
            >
              Brands
            </Heading>

            {/* <Breadcrumb breadcrumb={linkUrl} /> */}
            <Wrap
              color={"#7887A5"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="xs"
            // lineHeight="26px"
            >
              <Link link=""> Home</Link>
              <WrapItem my={0}>
                <Center>
                  {" "}
                  <Icon as={FaChevronRight} boxSize={2} mr={2} />
                  <Link link="/sneaker-release-dates">
                    sneaker release dates
                  </Link>
                </Center>
              </WrapItem>
              <WrapItem my={0}>
                <Center>
                  {" "}
                  <Icon as={FaChevronRight} boxSize={2} mr={2} />
                  <Text>brands</Text>
                </Center>
              </WrapItem>
            </Wrap>
          </Stack>

          <Grid
            templateColumns={{
              md: "1fr 1fr",
              base: "1fr",
              lg: "1fr 1fr 1fr",
            }}
            textColor="white"
            gap={6}
          >
            {state.allBrandItems.postData.map((item) => {
              return (
                <Box
                  p={6}
                  // border="1px solid rgba(0, 0, 0, 0.1)"
                  border="1px solid #D8DEE7"
                  _hover={{ boxShadow: "lg" }}
                  rounded="lg"
                  position={"relative"}
                >
                  <img
                    id="brand-big-img"
                    mb="2"
                    width="150px"
                    height="100px"
                    mx="auto"
                    src={item.logo}
                    lineHeight="22px"
                  />

                  <Heading
                    my="4"
                    fontWeight="600"
                    color="#3E485D"
                    fontSize="md"
                    lineHeight="22px"
                    textAlign="center"
                    fontStyle="normal"
                  >
                    <Link link={`sneaker-release-dates/brands/${item.slug}`}>
                      {item.name}
                    </Link>
                  </Heading>

                  <Divider />

                  <Box my="6">
                    {" "}
                    <Wrap spacing="30px">
                      <WrapItem flexWrap="wrap" gridColumnGap="9px">
                        {
                          <SubBrands
                            w="auto"
                            h="100px"
                            marginBottom="13px"
                            my="1"
                            brandList={item.subBrand}
                            brandName={item.name}
                          />
                        }
                      </WrapItem>
                    </Wrap>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Stack>
      )}
    </>
  );
}

export default connect(AllBrand2Page);

const SubBrands = ({ brandList, brandName }) => {
  // console.log("sub brand data :", i);
  const [index, setIndex] = useState({ min: 0, max: 3 });
  return (
    <>
      {Object.values(brandList)
        .slice(index.min, index.max)
        .map((data) => {
          return (
            <Wrap direction="row" ml="0px !important">
              <WrapItem>
                <Center
                  bg="#F3F4F7"
                  px={4}
                  py={1}
                  borderRadius="sm"
                  fontSize="xs"
                  color="#3E485D"
                  marginBottom="10px !important"
                >
                  <Link link={`/sneaker-release-dates/brands/${data.slug}`}>
                    {data.name}
                  </Link>
                </Center>
              </WrapItem>
            </Wrap>
          );
        })}
      {Object.keys(brandList).length > 3 && (
        <Stack
          alignItems="flex-end"
          position={"absolute"}
          bottom={"20px"}
          right={"20px"}
        >
          <Box
            w="7"
            h="7"
            bg="#9DA7BE"
            _hover={{ bg: "#525F7A" }}
            rounded="full"
            boxShadow="lg"
          >
            <Icon
              as={ChevronRightIcon}
              w="7"
              h="6"
              color="#FFFFFF"
              textAlign="center"
              onClick={() => setIndex({ min: 0, max: 30 })}
            />
          </Box>
          {/* <FaChevronCircleRight color="#525F7A" bg="#3E485D" boxSize={10} rounded="md" /> */}
        </Stack>
      )}
    </>
  );
};
