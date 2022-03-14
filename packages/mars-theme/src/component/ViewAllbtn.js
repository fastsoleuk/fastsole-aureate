import { Box } from "@chakra-ui/react";
import React from "react";
import { css } from "frontity";
import Link from "@frontity/components/link";

// function useHover() {
//   const [hovering, setHovering] = useState(false);
//   const onHoverProps = {
//     onMouseEnter: () => setHovering(true),
//     onMouseLeave: () => setHovering(false),
//   };
//   return [hovering, onHoverProps];
// }

const ViewAllbtn = ({ link }) => {
  // const [buttonAIsHovering, buttonAHoverProps] = useHover();
  // const [buttonBIsHovering, buttonBHoverProps] = useHover();
  return (
    <Box
      border="1px solid #525F7A"
      h="32px"
      w="95px"
      rounded="3px"
      variant="outline"
      color="#525F7A"
      colorScheme="#9DA7BE"
      textAlign="center"
      py="auto"
      verticalAlign="sub"
      display={{ md: "block", base: "none" }}
      _hover={{ bg: "#525F7A", color: " white" }}
    >
      {" "}
      <Link
        link={link}
        // "/sneaker-release-dates/brands"
        css={css`
          font-size: 14px;
          vertical-align: middle;
        `}
        fontWeight="100"
      // {...buttonAHoverProps}
      >
        View All
        {/* {buttonAIsHovering ? "View Now" : "View All"} */}
      </Link>
    </Box>
  );
};

export default ViewAllbtn;
