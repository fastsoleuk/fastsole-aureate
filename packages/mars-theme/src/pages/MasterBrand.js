import React from "react";
import { connect, Head } from "frontity";
import { useState, useEffect } from "react";
import Brand from "./Brand";
import Subbrand from "./Subbrand";
import { Spinner, Center } from "@chakra-ui/react";

const MasterBrand = ({ actions, state, libraries }) => {
  var link = state.source.get(state.router.link).id.toLowerCase();

  const [brandtype, setBrandType] = useState("");

  useEffect(() => {
    fetchData();
  }, [state.router.link]);
  console.log("yescheck", link);

  const fetchData = async () => {
    const response = await libraries.source.api.get({
      endpoint: `/wl/v1/main-brands`,
    });

    const postData = await response.json();
    actions.allBrandItems.toggleLoading();
    actions.allBrandItems.updatePostData(postData);

    console.log("postData:", postData);
    var tempBrand = [];
    var tempSubBrand = [];
    for (var i = 0; i < postData.length; i++) {
      tempBrand.push(postData[i].slug.toLowerCase());
      if (postData[i].subBrand != undefined) {
        Object.values(postData[i].subBrand).map((data) => {
          tempSubBrand.push(data.slug.toLowerCase());
        });
      }
    }

    console.log("tempBrand", tempBrand);
    console.log("tempSubBrand", tempSubBrand);
    var type = "";
    if (tempBrand.includes(link)) {
      type = "brand";
    } else if (tempSubBrand.includes(link)) {
      type = "subbrand";
    }

    console.log("brandType :", type);
    setBrandType(type);
  };

  const pageData = state.source.get(state.router.link);

  const seoData = pageData.schemaData && pageData.schemaData;

  console.log("omgdata", seoData.schema);
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
            name="apple-itunes-app"
            content="app-id=1436712793"
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
            name="description"
            content={seoData.meta.description}
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
            property="og:description"
            content={seoData.meta.description}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            property="og:image"
            content={seoData.meta.favicon}
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
            content={seoData.meta.title}
            data-reactroot=""
          />
          <meta
            data-rh="true"
            name="twitter:description"
            content={seoData.meta.description}
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
            name="twitter:image"
            content={seoData.meta.favicon}
            data-reactroot=""
          />
          <script type="application/ld+json">
            {`
             ${seoData.schema}
             `}
          </script>
          <script type="application/ld+json">
            {`
             ${seoData.breadCrumb}
             `}
          </script>
        </Head>
      ) : null}

      {brandtype == "" ? (
        <Center spacing={4} my={20}>
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#718096"
          />
        </Center>
      ) : (
        <div>
          {brandtype == "brand" ? (
            <Brand slugName={link} />
          ) : (
            <Subbrand slug={link} />
          )}
        </div>
      )}
    </>
  );
};

export default connect(MasterBrand);
