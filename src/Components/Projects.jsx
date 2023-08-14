import React from "react";
import {
  Box,
  Flex,
  Link,
  chakra,
  Text,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import TargetProject from "../assets/img/MYProject/target.png";
import gameProject from "../assets/img/MYProject/gamechamp.png";
import eidProject from "../assets/img/MYProject/eid-greeting-cards.png";
import todoProject from "../assets/img/MYProject/todo-app-2.png";
import Carvista from "../assets/img/MYProject/carvista.png";

function Projects() {
  const Projects = [
    {
      id: 1,
      name: "Target",
      img: TargetProject,
      linkGithub: "https://github.com/Mohammed-Alrabai/Target-Project-Frontend",
      linkDemo: "https://target22.netlify.app/",
      description: `
      The "Target" project aims to enhance communication and idea exchange among employees and managers in the organization. The project enables employees to share their solutions to problems and suggestions with the authorities, promoting continuous development and achieving sustainable success.
      `,
      technologies: ["React", "Tailwind", "ChakraUI", "Express", "MongoDB"],
    },
    {
      id: 2,
      name: "gamechamp",
      img: gameProject,
      linkGithub: "https://github.com/Mohammed-Alrabai/GameChamp",
      linkDemo: "https://gamechamp-m.netlify.app/",
      description: `
      GameChamp is a game website that brings you the latest games, news, prices, and ratings. It is built using React and Chakra UI, providing a seamless and immersive gaming experience.
      `,
      technologies: ["React", "ChakraUI"],
    },
    {
      id: 3,
      name: "Eid-greeting-cards",
      img: eidProject,
      linkGithub: "https://github.com/Mohammed-Alrabai/Eid-greeting-cards",
      linkDemo: "https://eid-greeting-cards.netlify.app/",
      description: `
      A website for creating holiday greeting cards is an online platform that allows users to create customized digital greeting cards for various holidays, such as Eid, Eid al-Adha, Christmas, New Year, and others. This website is a fun and innovative tool that helps individuals express their feelings and exchange congratulations with their loved ones and friends in an attractive and unique way.
      `,
      technologies: ["React", "ChakraUI"],
    },
    {
      id: 4,
      name: "Todo App",
      img: todoProject,
      linkGithub: "https://github.com/Mohammed-Alrabai/Todo_app",
      linkDemo: "https://todo-app-1210.netlify.app/",
      description: `
      In this project, I applied my knowledge of React and followed best practices to build a React application. I made extensive use of essential React hooks like useState, useEffect, useContext, and useReducer, along with various components to create a feature-rich and well-organized project.
      `,
      technologies: ["React", "Mui UI"],
    },
    {
      id: 5,
      name: "Carvista",
      img: Carvista,
      linkGithub: "https://github.com/Mohammed-Alrabai/CarVista_Frontend",
      linkDemo: "https://carvista3.netlify.app/",
      description: `CarVista

Discover the thrill of the open road and explore breathtaking destinations with our top-tier car rental services. At CarVista, we transform your travel dreams into unforgettable journeys. Whether it's a weekend getaway or a cross-country expedition, CarVista is your trusted companion for a seamless and exciting road trip.`,
      technologies: ["React", "Tailwind", "ChakraUI", "Express", "MongoDB"],
    },
  ];
  return (
    <>
      <Flex
        id="projects"
        maxW={{ lg: "5xl" }}
        p={50}
        mx={"auto"}
        w="full"
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}>
        <Box alignItems={"center"} w={"full"} mb={5}>
          <Text
            variant={"heading"}
            fontSize={{ base: "2xl", md: "3xl" }}
            color={"#0ea5e9"}>
            Projects
          </Text>
          <Text
            variant={"bodyText"}
            fontSize={"xl"}
            color={useColorModeValue("gray.800", "white")}>
            Here are some of my projects 🧩
          </Text>
        </Box>
        {Projects.map((project) => {
          return (
            <Box
              key={project.id}
              mb={10}
              bg="white"
              _dark={{ bg: "gray.800" }}
              flexDirection={project.id % 2 === 0 ? "row-reverse" : "row"}
              display={{ lg: "flex" }}
              shadow={{ lg: "lg" }}
              rounded={{ lg: "lg" }}>
              <Box w={{ lg: "50%" }} overflow={"hidden"} py={12} px={6}>
                <Link href={project.linkDemo} target="_blank">
                  <Box
                    h={{ base: 64, lg: "full" }}
                    rounded={{ lg: "lg" }}
                    bgSize="cover"
                    bgRepeat="no-repeat"
                    bgPosition="center"
                    backgroundImage={project.img}
                    _hover={{
                      opacity: 0.8,
                    }}></Box>
                </Link>
              </Box>

              <Box
                py={12}
                px={6}
                maxW={{ base: "xl", lg: "5xl" }}
                w={{ lg: "50%" }}>
                <chakra.h2
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="gray.800"
                  _dark={{ color: "white" }}
                  fontWeight="bold">
                  {project.name}
                </chakra.h2>
                {project.name == "Target" && (
                  <Text mt={2} color="blue.300" _dark={{ color: "gray.400" }}>This project only works on desktop

                  </Text>
                )}
                <chakra.p mt={2} color="gray.600" _dark={{ color: "gray.400" }}>
                  {project.description}
                </chakra.p>
                <Box
                  mt={4}
                  display={"flex"}
                  flexWrap="wrap"
                  gap={2}
                  alignItems={"center"}
                  w={"full"}
                  justifyContent={"center"}>
                  {project.technologies.map((tech) => {
                    return (
                      <Box
                        p={2}
                        rounded="md"
                        bg={useColorModeValue("gray.200", "gray.700")}>
                        {tech}
                      </Box>
                    );
                  })}
                </Box>
                <Box
                  mt={8}
                  display={"flex"}
                  flexWrap="wrap"
                  gap={4}
                  alignItems={"center"}
                  w={"full"}
                  justifyContent={"center"}>
                  <Link
                    href={project.linkGithub}
                    target="_blank"
                    textDecoration={"none"}
                    _hover={{
                      textDecoration: "none",
                    }}>
                    <Text
                      fontWeight="bold"
                      color={useColorModeValue("gray.800", "white")}
                      p={2}
                      rounded="md"
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={2}
                      _hover={{
                        color: "blue.400",
                        bg: useColorModeValue("gray.200", "gray.700"),
                      }}>
                      Code
                      <Icon as={AiFillGithub} w={6} h={6} />
                    </Text>
                  </Link>
                  <Link
                    href={project.linkDemo}
                    target="_blank"
                    textDecoration={"none"}
                    _hover={{
                      textDecoration: "none",
                    }}>
                    <Text
                      fontWeight="bold"
                      color={useColorModeValue("gray.800", "white")}
                      p={2}
                      rounded="md"
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={2}
                      _hover={{
                        color: "blue.400",
                        bg: useColorModeValue("gray.200", "gray.700"),
                      }}>
                      Live Demo
                      <Icon as={FiExternalLink} w={6} h={6} />
                    </Text>
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </>
  );
}

export default Projects;
