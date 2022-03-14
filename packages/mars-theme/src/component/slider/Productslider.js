import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Link, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import connect from "@frontity/connect";

function Productslider({ prodData, state, actions, libraries }) {
  // const [prod, setprod] = useState(prodData);
  // useEffect(() => {
  //   prod;
  // }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      {prodData.productImagesMain && (
        <div>
          <Carousel
            itemClass="image-item"
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
          >
            {prodData.productImagesMain &&
              prodData.productImagesMain.map((image, index) => {
                console.log("product image = ", image);
                return (
                  image && (
                    <Box
                      rounded="2xl"
                      mb={8}
                      className="container-img-div"
                      key={"ProductSliderKey-" + index}
                    >
                      {index > 0 ? (
                        <img
                          className="img-div"
                          width="700px"
                          height="450px"
                          src={image[0].src}
                          alt="Woman paying for a purchase"
                          mb="4"
                          srcSet={image[0].srcset}
                          loading="lazy"
                        />
                      ) : (
                        <img
                          className="img-div"
                          width="700px"
                          height="450px"
                          src={image[0].src}
                          alt="Woman paying for a purchase"
                          mb="4"
                          srcSet={image[0].srcset}
                        />
                      )}
                    </Box>
                  )
                );
              })}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default connect(Productslider);
