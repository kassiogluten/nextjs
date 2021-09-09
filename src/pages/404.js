import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>ERRO 404</title>
      </Head>
      <Header />
      <Box align="center" w="100%" bg="blue.100">
        <Flex
          p="5rem 1rem"
          align="center"
          maxW={1200}
          bg="blue.50"
          justify="space-between"
          h={300}
          flexDir="column"
        >
          <Heading>Página não encontrada</Heading>
          <Button as="a" href="/">
            Voltar
          </Button>
        </Flex>
      </Box>
    </>
  );
}
