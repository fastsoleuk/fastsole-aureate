import { loadable } from "frontity";
import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import { styled } from "frontity";
import Carousel from "react-multi-carousel";
import Link from "@frontity/components/link";
import connect from "@frontity/connect";
import { useState, useEffect } from "react";
const Skbrand = loadable(() => import("./Skeleton/skbrand"));

function TopBrandSlider({ deviceType, actions, libraries, state }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, [dataLoaded]); //update by santosh

  const fetchData = async () => {
    actions.topBrands.noToggleLoading();
    const response = await libraries.source.api.get({
      endpoint: "/wl/v1/top-brands",
    });

    const result = await response.json();

    actions.topBrands.toggleLoading();
    actions.topBrands.updatePostData(result);
  };
  console.log("topbrand", state.topBrands.postData);
  if (state.topBrands.postData) {
  }
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log("first", state.topBrands.postData);

  return (
    <Carousel
      responsive={responsive}
      partialVisbile
      deviceType={deviceType}
      aria-label="carousel item"
    >
      {!state.topBrands.isLoading
        ? state.topBrands.postData &&
          state.topBrands.postData.slice(0, 8).map((item, index) => {
            // console.log("topBrands ", item);

            const title = item.title;
            let result = title.split(" ").join("-");
            // console.log("giveus", slug);

            // const slug="";
            const slug = `/sneaker-release-dates/brands/${result}`;
            console.log("giveus", slug);

            return (
              item && (
                <Link link={slug} key={"topBrandSliderElement" + index}>
                  <div rounded="lg">
                    <Box
                      mx={2}
                      // my={2}
                      py={3}
                      rounded="lg"
                      _hover={{
                        bg: "white",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        px: "3",
                      }}
                      className="container-img-div"
                    >
                      <img
                        id="brand-big-img"
                        className="img-div"
                        width="700px"
                        height="450px"
                        mx="auto"
                        src={item.image}
                        srcSet={item.srcset}
                        lineHeight="22px"
                        alt={item.title}
                        loading="lazy"
                      />

                      <Flex mt={2} alignItems="center">
                        <img
                          id="brand-sm-img"
                          width="25px"
                          height="25px"
                          src={item.thumb}
                          srcSet={item.srcset}
                          alt={item.title}
                          loading="lazy"
                        />
                        <Heading
                          ml={1}
                          fontWeight="500"
                          color="black"
                          fontSize={{ base: "xs", md: "sm" }}
                        >
                          {item.title}
                        </Heading>
                      </Flex>
                    </Box>
                  </div>
                </Link>
              )
            );
          })
        : tempArr.map((data, index) => {
            return <Skbrand key={"TopBrandSliderSkElement-" + index} />;
          })}
    </Carousel>
  );
}

export default connect(TopBrandSlider);

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;
