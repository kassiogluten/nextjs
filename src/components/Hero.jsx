import { Box, Flex, Heading } from "@chakra-ui/react";

import React from "react";
//import { useMyContext } from "../contexts/Context";

export function Hero() {
  //  const { isModalOpen } = useMyContext();
  return (
    <Flex justify="center" align="center" w="100%" bg="blue.100" as="section">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        w="full"
        bg="blue.50"
        justify="space-between"
        h={700}
        flexDir={{ base: "column", sm: "row" }}
        //flexDir="column"
      >
        <Heading>Texto</Heading>
        <Heading>Texto</Heading>
      </Flex>
    </Flex>
  );
}
