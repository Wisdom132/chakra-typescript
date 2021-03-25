import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import Header from "./components/navbar";
import Products from "./components/products";




export const App = () => (
  
  <ChakraProvider theme={theme}>
    <Header />
    <Products />
  </ChakraProvider>
)
