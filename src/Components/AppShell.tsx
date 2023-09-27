"use client";

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import Image from "next/image";
import MenuIcon from "../../public/menu.svg";

interface LinkItemProps {
  name: string;
}

interface NavItemProps extends FlexProps {
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home" },
  { name: "Users" },
  { name: "Contacts" },
  { name: "Settings" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">
          Awesome SaaS
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name}>{link.name}</NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ children, ...rest }: NavItemProps) => (
  <Box
    as="a"
    href="#"
    style={{ textDecoration: "none" }}
    _focus={{ boxShadow: "none" }}
  >
    <Flex
      align="center"
      p="2"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{ bg: "gray.600", color: "white" }}
      {...rest}
    >
      {children}
    </Flex>
  </Box>
);

const MobileNav = ({ onOpen, ...rest }: MobileProps) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    bg={useColorModeValue("white", "gray.900")}
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    justifyContent={{ base: "space-between", md: "flex-end" }}
    {...rest}
  >
    <Text
      display={{ base: "flex", md: "none" }}
      fontSize="2xl"
      fontWeight="bold"
      justifyContent="center"
    >
      Awesome SaaS
    </Text>
    <IconButton
      display={{ base: "flex", md: "none" }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<Image src={MenuIcon} alt="menu" width="24" height="24" />}
    />
  </Flex>
);

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default AppShell;
