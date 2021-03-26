import React, { useState, useEffect } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Header from "./components/navbar";
import Products from "./components/products";
import { ProductRequest } from "./api";

let getPost = async (callback: any) => {
  let response = await ProductRequest.getProducts();
  callback([...response.data.reverse()]);
};

export const App = () => {
  const [fetched, setFetched] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    setFetched(true);
    getPost(setAllProducts);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Header refetch={() => getPost(setAllProducts)} />
      <Products fetched={fetched} products={allProducts} />
    </ChakraProvider>
  );
};
