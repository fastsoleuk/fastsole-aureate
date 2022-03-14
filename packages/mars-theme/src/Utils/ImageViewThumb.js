import { connect, styled } from "frontity";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Image from "@frontity/components/image";
import { AspectRatio } from "@chakra-ui/react";

const ImageViewThumb = ({ state, id }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <AspectRatio ratio={16 / 9}>
      <StyledImage
        alt={media.title.rendered}
        src={media.media_details.sizes.thumbnail.source_url}
        srcSet={srcset}
        height="100%"
        width="100%"
      />
    </AspectRatio>
  );
};

export default connect(ImageViewThumb);

const Container = styled.div`
  margin-top: 16px;
  height: 300px;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
