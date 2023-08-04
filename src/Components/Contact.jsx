import React from 'react'
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
  Flex,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
function Contact() {
  return (
    <Box id='contact' bg={useColorModeValue("white", "gray.800")}>
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <Text
            className="font-medium "
            color={useColorModeValue("#0ea5e9", "#0ea5e9")}>
            Contact Me
          </Text>

          <Text
            className="mt-2 text-2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}>
            Get in touch
          </Text>
        </div>
        <Flex
          align="center"
          justify="space-around"
          mx={"auto"}
          maxW={"4xl"}
          p={6}
          mt={10}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            flexDirection={"column"}
            bg={useColorModeValue("white", "gray.800")}
            mx={"auto"}>
            <chakra.span
              className="p-3 text-blue-500 rounded-full"
              bg={useColorModeValue("blue.100", "blue.900")}>
              <Icon as={AiOutlineMail} w={6} h={6} />
            </chakra.span>
            <Link
              href="mailto:m.alrabai4@gmail.com"
              target="_blank">
            <Text mt={2}>m.alrabai4@gmail.com</Text>
            </Link>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            flexDirection={"column"}
            bg={useColorModeValue("white", "gray.800")}
            mx={"auto"}>
            <chakra.span
              className="p-3 text-blue-500 rounded-full"
              bg={useColorModeValue("blue.100", "blue.900")}>
              <Icon as={AiFillLinkedin} w={6} h={6} />
            </chakra.span>
            <Link
              href="https://www.linkedin.com/in/mohammed-alrabai-987a82246/"
              target="_blank">
              <Text mt={2}>Mohammed Alrabai</Text>
            </Link>
          </Box>
        </Flex>
      </div>
    </Box>
  );
}

export default Contact