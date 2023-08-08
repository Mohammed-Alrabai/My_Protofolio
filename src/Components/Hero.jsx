import * as React from "react";
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Box,
  Link,
  Icon,
} from "@chakra-ui/react";
import { color, motion, useAnimationControls } from "framer-motion";
// Here we have used react-icons package for the icons
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import waving from "../assets/img/waving.png";
import { useState } from "react";

import HtmlLogo from "../assets/img/MySkills/html-5.svg";
import CssLogo from "../assets/img/MySkills/css.svg";
import JsLogo from "../assets/img/MySkills/javascript-logo-svgrepo-com.svg";
import ReactLogo from "../assets/img/MySkills/react.svg";
import BootstrapLogo from "../assets/img/MySkills/bootstrap-4-logo-svgrepo-com.svg";
import TailwindLogo from "../assets/img/MySkills/tailwindcss-icon.svg";
import NodeLogo from "../assets/img/MySkills/node-js.svg";
import ExLogo from "../assets/img/MySkills/express.svg";
import MongoLogo from "../assets/img/MySkills/mongodb.svg";
import FigmaLogo from "../assets/img/MySkills/figma.svg";

function Hero() {
  const sentence = `Mern Stack Web Developer`.split("");
  const socials = [
    {
      name: "Github",
      path: "https://github.com/Mohammed-Alrabai",
      icon: AiFillGithub,
    },
    {
      name: "Linkedin",
      path: "https://www.linkedin.com/in/mohammed-alrabai-987a82246/",
      icon: BsLinkedin,
    },
    {
      name: "Twitter",
      path: "/",
      icon: FaTwitter,
    },
  ];

  const mySkills = [
    {
      name: "HTML",
      icon: HtmlLogo,
    },
    {
      name: "CSS",
      icon: CssLogo,
    },
    {
      name: "JavaScript",
      icon: JsLogo,
    },
    {
      name: "React",
      icon: ReactLogo,
    },
    {
      name: "Tailwind",
      icon: TailwindLogo,
    },
    {
      name: "Bootstrap",
      icon: BootstrapLogo,
    },
    {
      name: "Node",
      icon: NodeLogo,
    },
    {
      name: "Express",
      icon: ExLogo,
    },
    {
      name: "MongoDB",
      icon: MongoLogo,
    },
    {
      name: "Figma",
      icon: FigmaLogo,
    }
  ];
  return (
    <Container id="home" maxW="6xl" px={{ base: 6, md: 3 }} py={{ base: 12, md: 28 }}>
      <Box>
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          justifyContent="space-between">
          <Stack
            direction="column"
            spacing={6}
            justifyContent="center"
            maxW={"420px"}
            m={"auto"}>
            <chakra.h1
              fontSize={{ base: "45px", sm: "5xl" }}
              lineHeight={1.3}
              fontWeight="bold"
              textAlign={{ base: "center", md: "center", lg: "left" }}>
              {sentence.map((letter, index) => {
                return (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00A0" : letter}
                  </TextSpan>
                );
              })}
              <Image
                display={"inline-block"}
                src={waving}
                alt="waving"
                ml={2}
                w={{ base: "50px", sm: "50px" }}
              />
            </chakra.h1>
            <Text
              fontSize="1.2rem"
              textAlign={{ base: "center", md: "left" }}
              lineHeight="1.375"
              fontWeight="400"
              color="gray.500">
              Hi, my name is Mohammed Al-Rabai, and I am a MERN Stack
              developer. I have a strong passion for web development, and I am
              from Riyadh, Saudi Arabia.📍
            </Text>
            <HStack
              spacing={{ base: 2, sm: 2 }}
              display={{ base: "flex", sm: "flex" }}
              alignItems="center"
              justifyContent={{ base: "center", sm: "center", lg: "left" }}
              flexDir={"row"}
              mb={{ base: "3rem !important", sm: 0 }}>
              {socials.map((social, index) => {
                return (
                  <Box
                    key={index}
                    d="flex"
                    justifyContent="center"
                    bg={useColorModeValue("white", "gray.800")}
                    w={{ base: "auto", sm: "auto" }}
                    border="1px solid"
                    borderColor="gray.300"
                    p={3}
                    rounded="md"
                    boxShadow="md"
                    as={Link}
                    zIndex={1}
                    _hover={{
                      color: "blue.400",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}>
                    <Link href={social.path} target="_blank">
                      <Icon as={social.icon} w={6} h={6} />
                    </Link>
                  </Box>
                );
              })}
            </HStack>
          </Stack>
          <Box
            className="hero-img"
            pos="relative"
            m={{ base: "auto", sm: "auto", md: "auto", lg: "auto" }}
            mb={{ base: "1.5rem", sm: "0" }}
            w={{ base: "20rem", sm: "24rem" }}
            h={{ base: "20rem", sm: "24rem" }}></Box>
        </Stack>

        <Stack
          display={"flex"}
          mx={"auto"}
          mt={{ base: 6, sm: 10 }}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={"center"}>
          <chakra.span
            display={"flex"}
            color={useColorModeValue("gray.800", "white")}
            alignItems={"center"}
            fontSize="2xl"
            borderRight={{ base: "none", sm: "1px solid" }}
            borderBottom={{ base: "1px solid", sm: "none" }}
            pr={{ base: "0", sm: "1rem" }}
            pb={{ base: "1rem", sm: "0" }}>
            Tech Stack
          </chakra.span>
          <Stack
            display={"flex"}
            flexDirection={{ base: "row", sm: "row" }}
            alignItems={"center"}
            m={"10px"}
            ml={{ base: "0", sm: "1rem" }}
            flexWrap={"wrap"}>
            {mySkills.map((skill, index) => {
              return (
                <Box
                  key={index}
                  rounded="full"
                  display={"flex"}
                  alignItems={"center"}
                  mx={"auto"}
                  justifyContent={"center"}
                  flexWrap={"wrap"}
                  gap={"2.5rem"}
                  w={{ base: "3.5rem", md: "5rem" }}
                  h={{ base: "3.5rem", md: "5rem" }}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"md"}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    w={{ base: "2rem", md: "2.8rem" }}
                    h={{ base: "2rem", md: "2.8rem" }}
                    objectFit="cover"
                    bgPosition={"center"}
                  />
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default Hero;

function TextSpan({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55 ,1)",
        "scale3d(.75, 1.25 ,1)",
        "scale3d(1.25, .85 ,1)",
        "scale3d(0.9 , 1.05 ,1)",
        "scale3d(1 , 1 ,1)",
      ],
      color: "#0ea5e9",
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsPlaying(true);
  };

  return (
    <>
      <motion.span
        style={{ display: "inline-block" }}
        animate={controls}
        onMouseOver={() => {
          if (!isPlaying) {
            rubberBand();
          }
        }}
        onAnimationComplete={() => {
          setIsPlaying(false);
        }}>
        {children}
      </motion.span>
    </>
  );
}
function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}>
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
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
