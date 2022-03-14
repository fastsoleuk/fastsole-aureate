import { connect, Head } from "frontity";
import {
  Box,
  Grid,
  Circle,
  Stack,
  Text,
  Button,
  Flex,
  Select,
  useDisclosure,
  Heading,
  Input,
  RadioGroup,
  VStack,
  RangeSlider,
  Radio,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/image";
import Icon from "@chakra-ui/icon";
import { FaChevronDown, FaCircle, FaSlidersH, FaUndo } from "react-icons/fa";
import Link from "@frontity/components/link";

import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
} from "react-icons/fa";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Commonproductdata from "../../component/Commonproductdata";
import SneakersDataViewAll from "../../component/SneakerDataViewAll";
import Breadcrumb from "../../component/Breadcrumb";

const OnFocusProductView = ({ state, libraries, actions }) => {
  // const [prodData, setprodData] = useState([]);
  // const btnRef = React.useRef();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // useEffect(() => {
  //   fetchData();
  //   prodData;
  // }, []);

  // const slug = "/On-focus-items";
  // const fetchData = async () => {
  //   const response = await libraries.source.api.get({
  //     endpoint: `/wl/v1${slug}`,
  //   });

  //   const result = await response.json();

  //   actions.viewAll.onFocusItem.toggleLoading();
  //   actions.viewAll.onFocusItem.updatePostData(result);
  //   setprodData(state.viewAll.onFocusItem.postData);
  // };
  // //   console.log("viewalldata=", state.viewAll.onFocusItem.postData);

  // // const productdata = state.viewAll.onFocusItem.postData;
  // console.log("ganesh", prodData);
  const pageData = state.source.get(state.router.link);
  const schemaData = pageData.schemaData && pageData.schemaData;

  const path = state.router.link;

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
            name="apple-itunes-app"
            content="app-id=1436712793"
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

      <Box textAlign="center" mt="10" mb="10">
        {path && <Breadcrumb breadcrumb={path} />}
      </Box>
      <SneakersDataViewAll itemId={105} type={"onfocus"} />
    </>

    // <>

    //   {/* {!state.viewAll.onFocusItem.isLoading ? (
    //     <Stack
    //       mx={{ base: "6", md: "20", lg: "40" }}
    //       mt={{ base: "30px", md: "none" }}
    //       mb="30px !important"
    //     >
    //       {prodData && <Commonproductdata items={prodData} />}
    //     </Stack>
    //   ) : (
    //     ""
    //   )} */}
    // </>
  );
};

export default connect(OnFocusProductView);
