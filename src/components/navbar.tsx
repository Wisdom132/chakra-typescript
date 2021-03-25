import React from "react";
import {Heading, Flex,  Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton, useDisclosure, FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="black"
      color="white"
    
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
         Lekkify
        </Heading>
      </Flex>
          <Button colorScheme="teal" onClick={onOpen} size="sm">Add Product</Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl id="email">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            </FormControl>
             <FormControl id="email">
              <FormLabel>Price</FormLabel>
              <Input type="number" />
            </FormControl>
             <FormControl id="email">
            <FormLabel>Image</FormLabel>
            <Input type="file" />
            </FormControl>
            
             <Button
            mt={4}
            colorScheme="teal"
            type="submit"
          >
            Submit
          </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

</>

  );
};

export default Header;
