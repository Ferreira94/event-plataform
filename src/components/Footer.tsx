import { Flex, Text } from "@chakra-ui/react";
import { LogoRocketseat } from "./LogoRocketseat";

export function Footer() {
  return (
    <Flex
      w="100%"
      py="2"
      flexDirection="column"
      align="center"
      bgColor="gray.900"
      borderTop="1px solid"
      borderColor="gray.600"
      as="footer"
    >
      <LogoRocketseat />
      <Text fontSize="0.8rem" as="strong">
        Rocketseat - Todos os direitos reservados
      </Text>
    </Flex>
  );
}
