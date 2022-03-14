const settings = {
  name: "fast-sole",
  state: {
    frontity: {
      url: "https://dev.fastsole.co.uk",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
      company_name: "FastSole",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
          autoPrefetch: "hover",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://dev.fastsole.co.uk",
          postsPage: "/sneaker-news",
          categoryBase: "sneaker-news/category",
        },
      },
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-84827859-1",
        },
      },
    },
    "@frontity/head-tags",
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
    "@frontity/yoast",
  ],
};

export default settings;
