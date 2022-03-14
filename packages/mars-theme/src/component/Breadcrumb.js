import { connect } from "frontity";
import Link from "@frontity/components/link";
import {
  Icon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  Text,
  Center,
} from "@chakra-ui/layout";

import { ChevronRightIcon } from "@chakra-ui/icons";

const Breadcrumb = ({ breadcrumb, state, libraries }) => {
  console.log("bread crumb :", breadcrumb);
  let data = breadcrumb.split("/");
  console.log("data items :", data);

  var text = [];
  var url = "";
  for (var i = 0; i < data.length - 1; i++) {


    url = url + data[i] + '/';

    if (data.length >= 7) {
      if ((i == 4) || (i == 5)) {
        url = data[1] + '/' + data[2] + '/' + data[i];
      }
    }


    if (data[i] != 'brands' && data[i] != 'sub-brands' && data[i] != 'status') {

      if (i > 0) {

        text[i] = { text: data[i].replace(/-/gi, " "), url: url }
      }
    }


  }


  const Html2React = libraries.html2react.Component;

  return (
    <Wrap
      color={"#7887A5"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="xs"
    // lineHeight="26px"
    >
      <Link link=""> Home</Link>
      {
        text.map((item, index) => {
          if (item !== "") {
            return (
              <WrapItem my={0} key={"BreadcrumbKey-" + index}>
                <Center>
                  {" "}
                  <Icon as={ChevronRightIcon} boxSize={4} mr={2} />
                  {
                    index < text.length - 1 ? <Link link={item.url}><Text textTransform={"capitalize"}>{item.text}</Text> </Link> : <Text textTransform={"capitalize"}>{item.text}</Text>
                  }

                </Center>
              </WrapItem>
            );
          }
        })
      }
    </Wrap>
  );
};

export default connect(Breadcrumb);
