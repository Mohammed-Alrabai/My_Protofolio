import { PropsWithChildren } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
} from "@chakra-ui/react";

function AboutMe() {
  return (
    <Box
      id="about"
      bg={useColorModeValue("white", "gray.800")}
      py={{ base: 12, md: 24 }}>
      <Container
        maxW="6xl"
        px={{ base: 6, md: 3 }}
        m={{ base: "auto", md: "auto" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center">
          <Box
            mr={{ base: 0, md: 5 }}
            pos="relative"
            w={{ base: "100%", md: "50%" }}>
            <DottedBox />
            <Image
              zIndex={1}
              position="relative"
              boxShadow="lg"
              w="100%"
              h="100%"
              minW={{ base: "auto", md: "30rem" }}
              maxH="20rem"
              objectFit="cover"
              src={`https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
          <Stack
            w={{ base: "100%", md: "50%" }}
            direction="column"
            spacing={6}
            justifyContent="center"
            alignItems={{ base: "center", md: "left" }}
            ml={{ base: 0, md: 5 }}>
            <chakra.h1
              fontSize="2xl"
              lineHeight={1}
              fontWeight="bold"
              color="#0ea5e9"
              mt={{ base: 4, md: 0 }}
              w={"100%"}
              textAlign={{ base: "center", md: "left" }}>
              ABOUT ME
            </chakra.h1>
            <chakra.h2
              w={"100%"}
              fontSize="2xl"
              lineHeight={1}
              fontWeight="bold"
              textAlign={{ base: "center", md: "left" }}>
              {/* A dedicated MERN Stack Developer. 🖥️👨‍💻 <br /> */}
            </chakra.h2>
            <Box>
              <Content textAlign={{ base: "center", md: "left" }}>
                I am passionate about the field of programming and spend most of
                my time learning new skills and exploring new tools in the world
                of programming for me is not just a hobby but a personal passion
                that drives me to develop and constantly improve and excited for
                a job opportunity that allows me to apply the experience and
                skills I have gained to achieve more achievements and successes
                in the field of work and enhance my professional skills.
              </Content>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
const Content = ({ children, ...props }) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}>
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={1}>
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.7)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none">
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default AboutMe;
