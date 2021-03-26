import React from "react";
import { Box, Image, Spinner,SimpleGrid } from "@chakra-ui/react";
import { ProductType } from '../models/product.interface'
import './component.css'
import NumberFormat from 'react-number-format';


const Products = ({ fetched, products }: { fetched: boolean; products: ProductType[] }) => {
  let renderProducts = products.map((product: ProductType, index) => (
    <Box
      bg='white'
      maxW='lg'
      borderWidth='1px'
      borderRadius='lg'
      key={index}
      overflow='hidden'
      boxShadow='lg'>
      <Image src={product.image} className='product-image' />
      <Box p='6'>
        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
          {product.name}
        </Box>
        <Box><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
</Box>
      </Box>
    </Box>
  ));

  return (
    <SimpleGrid
     columns={[1, null, 4]}
      
      spacing={10}
      paddingX='50'
      paddingY='30'
      bg='blue.50'
      rounded='lg'>
      {!fetched ? (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      ) : (
        renderProducts
      )}
    </SimpleGrid>
  );
};

export default Products;
