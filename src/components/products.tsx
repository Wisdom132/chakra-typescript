import React, { useState, useEffect } from "react";
import { Box, Image, HStack } from "@chakra-ui/react";
import { ProductRequest } from '../api'

        let getPost = async  (callback) => {
        let response= await ProductRequest.getProducts()
            console.log(response.data)
            callback([...response.data])
        }


    const Products = () => {
        const [allProducts, setAllProducts] = useState([])
        useEffect(() => {
            getPost(setAllProducts);
        }, [])

        
        let products = allProducts.map((product, index) =>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" key={index} overflow="hidden" boxShadow="lg">
                <Image src={product.image} />
                <Box p="6">
                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {product.name}
                    </Box>
                    <Box>
                        {product.price}
                    </Box>
                </Box>
            </Box>
        )

        return (
            <HStack
                id="Debunking Myths"
                px={6}
                py={10}
                bg="blue.50"
                rounded="lg"
            >
                {products}
            </HStack>
        )
    }


export default Products
