import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./handlers/menu-handler";
import ThemeRoot from "./ThemeRoot";
import tagHandler from "./handlers/tag_handler";

// const signUpHandler = {
//   // pattern: "/productdetails/:slug",
//   pattern: "RegExp:/productdetails/[a-zA-Z0-9-]+/",

//   func: ({ state, link }) => {
//     // state.source.data[state.router.link].isSignup = true;
//     console.log("ok tested");
//     state.source.data[state.router.link].isSignUp = true;
//     // console.log("custom", state.router.link);
//   },
// };

// const searchHandler = {
//   // pattern: "/productdetails/:slug",
//   pattern: "RegExp:/searchresult-for/[a-zA-Z0-9-]+/",

//   func: ({ state, link }) => {
//     // state.source.data[state.router.link].isSignup = true;
//     console.log("ok tested");
//     state.source.data[state.router.link].isSearchBrand = true;
//     // console.log("custom", state.router.link);
//   },
// };

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: ThemeRoot,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "hover",
      menu: [],
      menuUrl: "main-menu",
      footerUrl: {
        support: "about",
        brand: "brands",
        quickLinks: "quick-links",
        news: "news-category",
      },
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
    postWithCategory: {
      isLoading: true,
      postData: Array(),
    },
    sneakerNews: {
      isLoading: true,
      postData: Array(),
    },
    recentNews: {
      isLoading: true,
      postData: Array(),
    },
    sneakerNewsRecent: {
      isLoading: true,
      postData: Array(),
    },
    onFocus: {
      isLoading: true,
      postData: Array(),
    },
    topBrands: {
      isLoading: true,
      postData: Array(),
    },
    comingSoon: {
      isLoading: true,
      postData: Array(),
    },
    sneakerReleaseDates: {
      isLoading: true,
      postData: Array(),
    },
    brandsData: {
      isLoading: true,
      postData: Array(),
    },
    colorData: {
      isLoading: true,
      postData: Array(),
    },
    stockData: {
      isLoading: true,
      postData: Array(),
    },
    viewAll: {
      onFocusItem: {
        isLoading: true,
        postData: Array(),
      },
      comingSoonItem: {
        isLoading: true,
        postData: Array(),
      },
    },
    whereToBuy: {
      isLoading: true,
      postData: Array(),
    },
    brandItems: {
      isLoading: true,
      postData: Array(),
    },
    allBrandItems: {
      isLoading: true,
      postData: Array(),
    },
    searchItems: {
      isLoading: true,
      postData: Array(),
    },
    headerMenu: {
      isLoading: true,
      postData: Array(),
    },
    popularNews: {
      isLoading: true,
      postData: Array(),
    },
    schemaBrands: {
      isLoading: true,
      postData: Array(),
      testData: Array(),
    },

    newsSchema: {
      isLoading: true,
      postData: Array(),
      testData: Array(),
    },
    tagPost: {
      isLoading: true,
      postData: Array(),
    },
    authorDetail: {
      isLoading: true,
      postData: Array(),
    },
    testpriceRange: {
      min: 0,
      max: 500,
    },

    schemaTest: "blank",
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      init: ({ libraries }) => {
        // Use html2react to process the <img> tags inside the content HTML.
        // Add the handler to wp-source.
        // libraries.source.handlers.push(signUpHandler);
        // libraries.source.handlers.push(searchHandler);
        // searchHandler;
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        // testing after disable all beforessr
        // await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
        // await actions.source.fetch(`/menu/${state.theme.footerUrl.support}/`);
        // await actions.source.fetch(`/menu/${state.theme.footerUrl.brand}/`);
        // await actions.source.fetch(`/menu/${state.theme.footerUrl.news}/`);
        // await actions.source.fetch(
        //   `/menu/${state.theme.footerUrl.quickLinks}/`
        // );
        if (state.router.link == "/") {
          await actions.source.fetch(`/home/`);
        }
        // if(state.router.link=="/sneaker-news/"){
        //    await actions.source.fetch(`"/sneaker-news/"`);
        // }
        // await actions.source.fetch(`/home/`);
        // state.schemaTest = state.router.link;
        // schema
        // const response = await actions.source.fetch(
        //   `/schema/${state.router.link}/`
        // );
        // const response = await libraries.source.api.get({
        //   endpoint: `/schema/${state.router.link}/`,
        // });
        //const menuData = await response.json();
        //state.schemaBrands.testData = response;
      },
    },
    postWithCategory: {
      toggleLoading: ({ state }) => {
        state.postWithCategory.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.postWithCategory.postData = value;
        },
    },
    sneakerNews: {
      toggleLoading: ({ state }) => {
        state.sneakerNews.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.sneakerNews.postData = value;
        },
    },
    recentNews: {
      toggleLoading: ({ state }) => {
        state.recentNews.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.recentNews.postData = value;
        },
    },
    sneakerNewsRecent: {
      toggleLoading: ({ state }) => {
        state.sneakerNewsRecent.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.sneakerNewsRecent.postData = value;
        },
    },
    onFocus: {
      toggleLoading: ({ state }) => {
        state.onFocus.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.onFocus.postData = value;
        },
    },
    topBrands: {
      noToggleLoading: ({ state }) => {
        state.topBrands.isLoading = true;
      },
      toggleLoading: ({ state }) => {
        state.topBrands.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.topBrands.postData = value;
        },
    },
    comingSoon: {
      toggleLoading: ({ state }) => {
        state.comingSoon.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.comingSoon.postData = value;
        },
    },
    sneakerReleaseDates: {
      toggleLoading: ({ state }) => {
        state.sneakerReleaseDates.isLoading = false;
      },
      notoggleLoading: ({ state }) => {
        state.sneakerReleaseDates.isLoading = true;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.sneakerReleaseDates.postData = value;
        },
    },
    brandsData: {
      toggleLoading: ({ state }) => {
        state.brandsData.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.brandsData.postData = value;
        },
    },
    colorData: {
      toggleLoading: ({ state }) => {
        state.colorData.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.colorData.postData = value;
        },
    },
    stockData: {
      toggleLoading: ({ state }) => {
        state.stockData.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.stockData.postData = value;
        },
    },
    viewAll: {
      onFocusItem: {
        toggleLoading: ({ state }) => {
          state.viewAll.onFocusItem.isLoading = false;
        },
        updatePostData:
          ({ state }) =>
          (value) => {
            state.viewAll.onFocusItem.postData = value;
          },
      },

      comingSoonItem: {
        toggleLoading: ({ state }) => {
          state.viewAll.comingSoonItem.isLoading = false;
        },
        updatePostData:
          ({ state }) =>
          (value) => {
            state.viewAll.comingSoonItem.postData = value;
          },
      },
    },
    whereToBuy: {
      toggleLoading: ({ state }) => {
        state.whereToBuy.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.whereToBuy.postData = value;
        },
    },
    brandItems: {
      toggleLoading: ({ state }) => {
        state.brandItems.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.brandItems.postData = value;
        },
    },
    allBrandItems: {
      toggleLoading: ({ state }) => {
        state.allBrandItems.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.allBrandItems.postData = value;
        },
    },
    searchItems: {
      toggleLoading: ({ state }) => {
        state.searchItems.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.searchItems.postData = value;
        },
    },
    headerMenu: {
      toggleLoading: ({ state }) => {
        state.headerMenu.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.headerMenu.postData = value;
        },
    },
    popularNews: {
      toggleLoading: ({ state }) => {
        state.popularNews.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.popularNews.postData = value;
        },
    },
    schemaBrands: {
      toggleLoading: ({ state }) => {
        state.schemaBrands.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.schemaBrands.postData = value;
        },
    },
    newsSchema: {
      toggleLoading: ({ state }) => {
        state.newsSchema.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.newsSchema.postData = value;
        },
    },
    tagPost: {
      toggleLoading: ({ state }) => {
        state.tagPost.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.tagPost.postData = value;
        },
    },
    authorDetail: {
      toggleLoading: ({ state }) => {
        state.authorDetail.isLoading = false;
      },
      updatePostData:
        ({ state }) =>
        (value) => {
          state.authorDetail.postData = value;
        },
    },
  },
  libraries: {
    source: {
      handlers: [
        menuHandler,
        tagHandler,

        // for home handler

        {
          // pattern: "/productdetails/:slug",
          priority: 1,
          // priority: 100,
          pattern: "/home/",
          func: async ({ state, link, params, libraries }) => {
            // console.log("checking step = ", link);
            const schema = state.source.data["/"];
            const response = await libraries.source.api.get({
              endpoint: `/wl/v1/schema-Home/`,
            });

            console.log("checking step = ", "home");
            const schemaData = await response.json();
            // console.log("startdata", schemaData);

            Object.assign(state.source.data["/"], {
              schemaData: schemaData,
            });
          },
        },

        // end
        // sneaker news

        {
          priority: 2,
          pattern: "/sneaker-news/",

          func: async ({ state, link, params, libraries }) => {
            console.log("checkingnews = ", 1);
            // const schema = state.source.data["/sneaker-news/"];
            // const response = await libraries.source.api.get({
            //   endpoint: `/wl/v1/schema-news-all/`,
            // });

            // console.log("checkingnews = ", 2);
            // const schemaData = await response.json();
            // console.log("startdata", schemaData);
            schemaData &&
              Object.assign(schema, {
                schemaData: "schemaData",
              });
            console.log("checking step news = ", 3);
          },
        },

        // end

        // /sneaker-release-dates/

        {
          priority: 3,
          pattern: "/sneaker-release-dates/",
          func: async ({ state, link, params, libraries }) => {
            console.log("checking step = ", 1);
            const schema = state.source.data[link];
            const response = await libraries.source.api.get({
              endpoint: `/wl/v1/schema-brands-release/`,
            });

            console.log("checking step = ", 2);
            const schemaData = await response.json();
            // console.log("startdata", schemaData);
            schemaData &&
              Object.assign(schema, {
                isSneakerRelease: true,
                schemaData: schemaData,
              });
            console.log("checking step = ", 3);
            // state.source.data[link] = {
            //   isSneakerRelease: true,
            //   // id: params.slug,
            //   seodata: schemaData,
            // };
          },
        },

        // end

        // OnFocusProductView

        {
          priority: 4,
          pattern: "/sneaker-release-dates/status/on-focus/",
          func: async ({ state, link, params, libraries }) => {
            console.log("checking step = ", 1);
            const schema = state.source.data[link];
            const response = await libraries.source.api.get({
              endpoint: `/wl/v1/schema-onfocus/`,
            });

            console.log("checking step = ", 2);
            const schemaData = await response.json();

            schemaData &&
              Object.assign(schema, {
                onFocusProduct: true,
                schemaData: schemaData,
              });
            console.log("checking step = ", 3);
          },
        },

        // end

        // coming soon

        {
          priority: 5,
          pattern: "/sneaker-release-dates/status/coming-soon/",
          func: async ({ state, link, params, libraries }) => {
            console.log("checking step = ", 1);
            const schema = state.source.data[link];
            const response = await libraries.source.api.get({
              endpoint: `/wl/v1/schema-comming-soon/`,
            });

            console.log("checking step = ", 2);
            const schemaData = await response.json();

            schemaData &&
              Object.assign(schema, {
                comingSoonProduct: true,
                schemaData: schemaData,
              });
            console.log("checking step = ", 3);
          },
        },

        // end

        {
          priority: 6,
          pattern: "/sneaker-release-dates/brands/:slug/",
          func: async ({ state, link, params, libraries }) => {
            // state.source.data[link] = {
            //   isMasterComponent: true,
            //   id: params.slug,
            // };

            console.log("checking step = ", params.slug);
            const schema = state.source.data[link];
            const response = await libraries.source.api.get({
              endpoint: `/wl/v1/schema-brands-all/${params.slug}/`,
              // `/wl/v1/schema-brands/`,
            });

            console.log("checking step = ", 2);
            const schemaData = await response.json();
            // console.log("startdata", schemaData);
            // schemaData &&
            //   Object.assign(schema, {
            //     seodata: schemaData,
            //   });
            console.log("checking step = ", 3);
            state.source.data[link] = {
              isMasterComponent: true,
              id: params.slug,
              schemaData: schemaData,
            };
          },
        },
        {
          pattern: "/sneaker-release-dates/brands/",
          // pattern: "/isbrand/",
          priority: 7,
          func: async ({ state, link, params, libraries }) => {
            console.log("checking step = ", 1);
            const schema = state.source.data[link];
            const response = await libraries.source.api.get({
              endpoint: `/wl/v1/schema-brands/`,
              // `/wl/v1/schema-brands-all/air-max/`,
            });

            console.log("checking step = ", 2);
            const schemaData = await response.json();
            // state.source.data[link] = {
            //   isAllBrand: true,
            //   id: params.slug,
            //   seodata: schemaData,
            // };

            schemaData &&
              Object.assign(schema, {
                isAllBrand: true,
                id: params.slug,
                seodata: schemaData,
              });
          },
        },
        {
          pattern: "/searchresult-for/:slug",
          priority: 8,
          func: ({ state, link, params }) => {
            state.source.data[link] = {
              isSearchBrand: true,
              id: params.id,
            };
          },
        },
        {
          // pattern: "/productdetails/:slug",
          priority: 1,
          pattern: "/sneaker-release-dates/brands/:slug/:slug/",
          func: async ({ state, link, params, libraries }) => {
            console.log("checking step = ", 1);
            const schema = state.source.data[link];
            const response = await libraries.source.api.get({
              endpoint: `/wl/v1/schema-brands/${link}`,
            });

            console.log("checking step = ", link);
            const schemaData = await response.json();
            // console.log("startdata", schemaData);
            // schemaData &&
            //   Object.assign(schema, {
            //     seodata: schemaData,
            //   });
            console.log("checking step = ", 3);
            state.source.data[link] = {
              isBuyFrom: true,
              id: params.slug,
              schemaData: schemaData,
            };
          },
        },
        {
          priority: 10,
          // pattern: `/?s=:slug`,
          pattern: "RegExp:(?=.s=.).*",
          func: async ({ state, link, params, libraries }) => {
            const schema = await state.source.data[link];
            const slug = schema && schema.query.s;
            console.log("monu sir aa gye", schema);
            const response = await libraries.source.api.get({
              endpoint: `/wl/v1/schema-search/${slug}`,
            });

            const schemaData = await response.json();
            // var tempData = {
            //   // isSearch: true,
            //   seodata: "schemaData",
            // };
            Object.assign(schema, {
              isSearch: true,
              schemaData: schemaData,
            });
          },
        },

        // state.source.data[link] = {
        //   // isSearch: true,
        // };
        // },
        // },
        {
          // pattern: "/sub/sneaker-release-dates/brands/:slug",
          // pattern: "/sneaker-release-dates/brands/:slug",
          priority: 11,
          pattern: "/sneaker-release-dates/sub-brands/:slug/:slug/",
          func: ({ state, link, params }) => {
            state.source.data[link] = {
              isSubBrand: true,
              id: params.slug,
            };
          },
        },
      ],
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
