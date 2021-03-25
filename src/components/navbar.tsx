import React from "react";
import {
  Heading,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Box
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { ProductRequest } from "../api";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()

  const productForm = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
    },
    onSubmit: async (payload) => {

      const formData = new FormData();
      formData.append("name", payload.name)
      formData.append("price", payload.price)
      formData.append("image", payload.image)
      
      
      const response = await ProductRequest.createPost(formData);
      onClose()
       toast({
          title: "Post created.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      console.log("=====Response=======>", response);
    },
  });




  const handleFileChange = (e) => {
    productForm.setFieldValue("image", e.target.files[0]);
  };

  return (
    <>
      <Flex
        as='nav'
        align='center'
        justify='space-between'
        wrap='wrap'
        padding='1.5rem'
        bg='black'
        color='white'>
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={"-.1rem"}>
            Lekkify
          </Heading>
        </Flex>
        <Button colorScheme='teal' onClick={onOpen} size='sm'>
          Add Product
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={productForm.handleSubmit}>
              <FormControl id='name'>
                <FormLabel>Name</FormLabel>
                <Input
                  onChange={productForm.handleChange}
                  value={productForm.values.name}
                  type='text'
                />
              </FormControl>
              <FormControl id='price'>
                <FormLabel>Price</FormLabel>
                <Input
                  onChange={productForm.handleChange}
                  value={productForm.values.price}
                  type='number'
                />
              </FormControl>
              <FormControl id='image'>
                <FormLabel>Image</FormLabel>
                <Input onChange={handleFileChange} type='file' />
              </FormControl>

              <Button
                isLoading={productForm.isSubmitting}
                mt={4}
                colorScheme='teal'
                type='submit'>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
