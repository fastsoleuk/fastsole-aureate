import { Global, css, Head, loadable } from "frontity";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import Home from "./pages/Home";
import ReactMultiCrousalCss from "react-multi-carousel/lib/styles.css";
import Footer from "./component/Footer";
import News from "./pages/News";
import About from "./pages/About";
import Switch from "@frontity/components/switch";
import { connect } from "frontity";
import Singlenews from "./pages/Singlenews";
import Productdetails from "./pages/Productdetails";
import Singlenewssale from "./pages/Singlenewssale";
import SneakersReleasedates from "./pages/SneakersReleasedates";
import SearchResultForNike from "./pages/SearchResultForNike";
import BlackFriday from "./pages/BlackFriday";
import theme from "./pages/Theme";
import Contact from "./pages/Contact";
import Brand from "./pages/Brand";
import Subbrand from "./pages/Subbrand";
import Termsandcondition from "./pages/Termsandcondition";
import Privacypolicy from "./pages/Privacypolicy";
import ProductSalePage from "./pages/ProductSalePage";
import AllBrand2Page from "./pages/AllBrand2Page";
import Impressum from "./pages/Impressum";
import MainHeader from "./pages/MainHeader";
import Signup from "./pages/Signup";
import OnFocusProductView from "./pages/viewAll/OnFocusProductView";
import ComingSoonProductView from "./pages/viewAll/ComingSoonProductView";
import Contactformstyle from "./component/style.css";
import Header from "./pages/Header";
import ShopBody from "./component/ShopBody";
// import Commondata2 from "./component/Commondata2";
import Commonproductdata from "./component/Commonproductdata";

import DateRangeStyle from "react-date-range/dist/styles.css"; // main style file
import DateRangeDefaultStyle from "react-date-range/dist/theme/default.css";
import $ from "jquery";
import MasterBrand from "./pages/MasterBrand";
import Cookies from "./component/Cookies";

import TagArchivePost from "./pages/TagArchivePost";

import wpThemeStyle from "../src/styles/wpThemeCss.css";
import TagPost from "./pages/TagPost";
import Fonts from "./fonts/Font";
import ErrorPage from "./pages/ErrorPage";

// function ThemeRoot() {

const ThemeRoot = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global styles={css(ReactMultiCrousalCss)} />
      <Global styles={css(wpThemeStyle)} />
      <Fonts />
      <ChakraProvider theme={theme}>
        <Global styles={css(Contactformstyle)} />
        <Global styles={css(DateRangeStyle)} />
        <Global styles={css(DateRangeDefaultStyle)} />
        {/* <Head>
          <link
            href="//db.onlinewebfonts.com/c/0e979bd4a3c1c6ac788ed57ac569667f?family=revicons"
            rel="stylesheet "
            type="text/css"
          />
        </Head> */}

        {/* <Fonts /> */}

        <Header />

        {/* <MainHeader /> */}

        <Switch>
          <Home when={data.isHome} />
          <SearchResultForNike when={data.isSearch} />
          <News when={data.isArchive && data.isPostArchive} />
          <BlackFriday
            when={data.route == "/sneaker-news/category/offer-discount/"}
          />
          <Privacypolicy when={data.route == "/privacy-policy/"} />
          <Termsandcondition when={data.route == "/terms-conditions/"} />

          <Impressum when={data.route == "/impressum/"} />

          {/* <Subbrand when={data.isSubBrand} /> */}
          <Singlenewssale when={data.route == "/single-news-sale/"} />

          <TagPost when={data.isTags} />

          <Singlenews when={data.isPost && data.isPostType} />
          {/* <News when={data.isPost && data.isPostType} /> */}
          <Productdetails when={data.isBuyFrom} />
          <TagArchivePost when={data.isArchive && data.isCategory} />
          <About when={data.route == "/about/"} />
          <Contact when={data.route == "/contact/"} />
          <SneakersReleasedates
            when={data.isSneakerRelease}
            // {data.route == "/sneaker-release-dates/"}
          />
          <AllBrand2Page when={data.isAllBrand} />
          {/* <News when={data.route == "/news/"} /> */}
          {/* <Singlenews when={data.route == "/singlenews/"} /> */}
          {/* <Brand when={data.isBrand} /> */}
          <ProductSalePage when={data.route == "/product-salepage/"} />

          {/* <Signup when={data.isSignUp} /> */}
          <OnFocusProductView
            when={data.onFocusProduct}
            // {data.route == "/sneaker-release-dates/status/on-focus/"}
          />
          <ComingSoonProductView
            when={data.comingSoonProduct}
            // {data.route == "/sneaker-release-dates/status/coming-soon/"}
          />

          <Productdetails
            when={data.route == "/productdetails/" || data.isSignUp}
          />
          <Commonproductdata when={data.route == "/commonproductdata/"} />
          <MasterBrand when={data.isMasterComponent} />
          <Cookies when={data.route == "/cookies/"} />
          <ErrorPage when={data.isError} />

          {/* {data.isSignUp && <Signup />} */}
        </Switch>
        <Footer />

        {
          //$('.react-multi-carousel-item').attr('aria-label', "top brands carousel item")
        }
      </ChakraProvider>
    </>
  );
};

export default connect(ThemeRoot);
