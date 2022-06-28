import { Flex, Icon, useBreakpointValue } from "@chakra-ui/react";
import { List } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
  const isWideVersionMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      bgColor="gray.700"
      w="100%"
      p="5"
      align="center"
      justify={isWideVersionMobile ? "center" : "space-between"}
      borderBottom="1px solid"
      borderColor="gray.600"
      as="header"
    >
      <Logo />
      {!isWideVersionMobile && (
        <Icon as={List} cursor="pointer" fontSize="24" />
      )}
    </Flex>
  );
}
