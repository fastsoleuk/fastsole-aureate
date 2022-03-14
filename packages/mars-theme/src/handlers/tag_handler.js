// /sneaker-news/tag/nike/
// import { localStorageManager } from "@chakra-ui/color-mode";

const tagHandler = {
  name: "tags",
  priority: 5,
  pattern: "/sneaker-news/tag/:slug",
  func: async ({ link, params, state, libraries }) => {
    const { slug } = params;
    // console.log("PARAMS:", slug);

    // // Fetch the menu data from the endpoint
    // console.log("checkdata", slug);
    let result;

    try {
      const response = await libraries.source.api.get({
        endpoint: `/wp/v2/posts/?filter[tag]=${slug}`,
      });
      // // Parse the JSON to get the object
      result = await response.json();
      console.log("checkdata", result);
    } catch (err) {
      console.log("checkdata", err);
    }

    // console.log("PARAMS:", result);

    // Add the menu items to source.data
    const tagPage = state.source.data[link];
    // console.log(link);
    Object.assign(tagPage, {
      isTags: true,
      path: slug,
      items: result,
    });
  },
};

export default tagHandler;
