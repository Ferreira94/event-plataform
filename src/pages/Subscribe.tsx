import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { Mockup } from "../components/Mockup";
import {
  useCreateSubscriberMutation,
  useGetLessonsQuery,
} from "../graphql/generated";

export function Subscribe() {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { data } = useGetLessonsQuery();
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const isWideVersionMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();

    if (!name) {
      return;
    }

    await createSubscriber({
      variables: {
        name,
        // email,
      },
    });

    navigate(`event/lesson/${data?.lessons[0].slug}`);
  }

  return (
    <Flex
      minH="100vh"
      bgImg="url('/assets/blur-background.png')"
      bgRepeat="no-repeat"
      bgSize="100% 100%"
      flexDirection="column"
      align="center"
    >
      <Flex
        w="100%"
        maxW="1100px"
        align="center"
        justify="space-between"
        my="10"
        mx="auto"
        flexDirection={isWideVersionMobile ? "row" : "column"}
      >
        <Box maxW="640px" px="4">
          <Logo />
          <Heading
            display="inline-block"
            fontSize={isWideVersionMobile ? "2.5rem" : "1.5rem"}
            mt="2"
          >
            Embarque nesse{" "}
            <Heading color="blue.500" display="inline-block">
              foguete
            </Heading>{" "}
            você também
          </Heading>{" "}
          <Text
            mt="2"
            color="gray.200"
            fontSize={isWideVersionMobile ? "1.2rem" : "1rem"}
          >
            Reunimos oito devs para colocar seus códigos à prova e mostrar quem
            merece vencer essa competição.
          </Text>
        </Box>

        <Box
          p="8"
          bgColor="gray.700"
          border="1px solid #323238"
          borderRadius="4"
          mr={isWideVersionMobile ? "4" : "0"}
          mt={isWideVersionMobile ? "0" : "10"}
        >
          <Text fontWeight="bold" mb="6">
            Nos diga seu nome e <br />
            aperte os cintos
          </Text>
          <FormControl>
            <VStack spacing={4}>
              <Input
                bgColor="gray.900"
                borderRadius="4"
                px="3"
                h="12"
                w="100%"
                type="text"
                placeholder="Seu nome completo"
                onChange={(event) => setName(event.target.value)}
              />
              {/* <Input
                bgColor="gray.900"
                borderRadius="4"
                px="3"
                h="12"
                w={isWideVersionMobile ? "270px" : "100%"}
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(event) => setEmail(event.target.value)}
              /> */}

              <Button
                colorScheme="green"
                w="100%"
                h="12"
                borderRadius="4"
                onClick={handleSubscribe}
                disabled={loading}
              >
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="1rem"
                >
                  Embarcar
                </Text>
              </Button>
            </VStack>
          </FormControl>
        </Box>
      </Flex>

      <Mockup />
      <Footer />
    </Flex>
  );
}
