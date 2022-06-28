import {
  Flex,
  Icon,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  CloseButton,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { List } from "phosphor-react";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isWideVersionTablet = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Flex
        bgColor="gray.700"
        w="100%"
        p="5"
        align="center"
        justify={isWideVersionTablet ? "center" : "space-between"}
        borderBottom="1px solid"
        borderColor="gray.600"
        as="header"
      >
        <Logo />
        {!isWideVersionTablet && (
          <Icon as={List} cursor="pointer" fontSize="24" onClick={onOpen} />
        )}
      </Flex>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          minH="100%"
          minW="100%"
          bgColor="gray.700"
          onClick={onClose}
        >
          <DrawerBody>
            <Flex
              bgColor="gray.700"
              w="100%"
              py="3"
              align="center"
              justify="space-between"
              borderBottom="1px solid"
              borderColor="gray.600"
              as="header"
            >
              <Logo />
              <Icon as={CloseButton} fontSize="16" ml="1" color="blue.500" />
            </Flex>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
