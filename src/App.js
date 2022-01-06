import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer.js";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
       <Heading ml="3" size="md" fontWeight="semibold" color="cyan.400"><a href="/">さくら</a></Heading>

       <Spacer></Spacer>
        <IconButton mr="10px" ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
