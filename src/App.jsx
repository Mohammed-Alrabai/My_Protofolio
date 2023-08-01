import './App.css'
import {useColorModeValue , Box} from '@chakra-ui/react';
import {Text} from '@chakra-ui/react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AnimatedCursor from "react-animated-cursor";


function App() {
  const colorMode = useColorModeValue("#f7f7f7", "gray.800");

  return (
    <Box
    bg={colorMode}
    >
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="14, 165, 233"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        innerStyle={{
          border: "2px solid var(--cursor-color)",
          padding: "8px",
        }}
        outerStyle={{
          borderColor: "var(--cursor-color)",
          padding: "10px",
          opacity: 0.5,
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App
