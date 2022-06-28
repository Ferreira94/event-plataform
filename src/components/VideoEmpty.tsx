import { VideoCameraSlash } from "phosphor-react";

import { Footer } from "./Footer";
import { Box, Flex, Text } from "@chakra-ui/react";

export function VideoEmpty() {
  return (
    <Box flex="1">
      <Flex
        align="center"
        justify="center"
        h="calc(100% - 70px)"
        flexDirection="column"
      >
        <VideoCameraSlash size="48" />
        <Text fontSize="1.5rem"> Selecione uma aula</Text>
      </Flex>
      <Footer />
    </Box>
  );
}
