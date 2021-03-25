import React, { useState, useEffect } from "react";
import { Box, Image, HStack, Spinner,SimpleGrid } from "@chakra-ui/react";
import { ProductRequest } from "../api";
import { ProductType } from '../models/product.interface'
import './component.css'
let getPost = async (callback:any) => {
  let response = await ProductRequest.getProducts();
  callback([...response.data.reverse()]);
};

const Products = () => {
  const [fetched, setFetched] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
      setFetched(true);
    getPost(setAllProducts);
  }, []);

  let products = allProducts.map((product:ProductType, index) => (
      <Box
        bg="white"
      maxW='lg'
      borderWidth='1px'
      borderRadius='lg'
      key={index}
      overflow='hidden'
      boxShadow='lg'>
      <Image src={product.image} className="product-image" />
      <Box p='6'>
        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
          {product.name}
        </Box>
        <Box>{product.price}</Box>
      </Box>
    </Box>
  ));

    return (
      
    <SimpleGrid columns={4} spacing={10} paddingX="50" paddingY="30" bg='blue.50' rounded='lg'>

      {!fetched ? (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      ) : (
        products
                )}
                </SimpleGrid>
  );
};

export default Products;
