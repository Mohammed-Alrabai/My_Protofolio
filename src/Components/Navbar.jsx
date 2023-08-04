import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  Link,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const navLinks = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <Box
      px={4}
      position={"sticky"}
      top={0}
      left={0}
      zIndex={100}
      boxShadow="sm"
      bg={useColorModeValue("white", "gray.800")}
      width="100%">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="6xl"
        mx="auto">
        <IconButton
          variant={"none"}
          size="md"
          fontSize={"2xl"}
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Text fontSize="1.5rem"> MOH.Dev</Text>
        </HStack>
        <HStack
          as="nav"
          spacing={1}
          display={{ base: "none", md: "flex" }}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          alignItems="center">
          {navLinks.map((link, index) => (
            <NavLink key={index} {...link} onClose={onClose} />
          ))}
        </HStack>
        <IconButton
          variant={"none"}
          _hover={{
            color: "blue.400",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          size="md"
          fontSize={"2xl"}
          aria-label="Color Switcher"
          icon={colorMode === "light" ? <FiSun /> : <FiMoon />}
          onClick={toggleColorMode}
        />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={["inherit", "inherit", "none"]}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const NavLink = ({ name, path, onClose }) => {
  const link = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.400", "blue.200"),
  };

  return (
    <ScrollLink
      to={path}
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-70}
      activeClass="active"
      onClick={onClose}>
      <Link
        px={3}
        py={1}
        lineHeight="inherit"
        rounded="md"
        _hover={{
          textDecoration: "none",
          bg: link.bg,
          color: link.color,
        }}
        onClick={() => onClose()}>
        {name}
      </Link>
    </ScrollLink>
  );
};

const MenuLink = ({ name, path, icon, onClose }) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem
        _hover={{
          color: "blue.400",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}>
        <HStack>
          <Icon as={icon} size={18} color="blue.400" />
          <Text>{name}</Text>
        </HStack>
      </MenuItem>
    </Link>
  );
};
