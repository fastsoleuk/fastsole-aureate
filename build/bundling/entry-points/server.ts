import server from "@frontity/core/src/server";
import frontity__mars_theme_default from "@frontity/mars-theme/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__google_analytics_default from "@frontity/google-analytics/src/index";
import frontity__head_tags_default from "@frontity/head-tags/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";
import aamodtgroup__frontity_contact_form_7_default from "@aamodtgroup/frontity-contact-form-7/src/index";
import frontity__yoast_default from "@frontity/yoast/src/index";

const packages = {
  frontity__mars_theme_default,
  frontity__wp_source_default,
  frontity__google_analytics_default,
  frontity__head_tags_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
  aamodtgroup__frontity_contact_form_7_default,
  frontity__yoast_default,
};

export default server({ packages });

