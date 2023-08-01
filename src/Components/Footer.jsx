import {
  Stack,
  HStack,
  Link,
  Divider,
  Image,
  IconButton,
  Text,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const accounts = [
  {
    url: "https://github.com/Mohammed-Alrabai",
    label: "Github Account",
    type: "twitter",
    icon: <FaGithub />,
  },
  {
    url: "/",
    label: "Twitter Account",
    type: "twitter",
    icon: <FaTwitter />,
  },
  {
    url: "https://www.linkedin.com/in/mohammed-alrabai-987a82246/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}>
      <Link href="/" isExternal>
        <Text fontSize={"lg"} fontWeight={600}>MOH.dev</Text>
      </Link>
      <Stack
        direction="row"
        spacing={5}
        pt={{ base: 4, md: 0 }}
        alignItems="center">
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};


export default Footer;
