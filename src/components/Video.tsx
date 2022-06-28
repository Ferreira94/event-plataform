import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { Footer } from "./Footer";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface IVideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: IVideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  const isWideVersionMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  if (!data || !data.lesson) {
    return (
      <Flex flex="1" align="center" justify="center">
        <Text>Carregando...</Text>
      </Flex>
    );
  }

  return (
    <Box flex="1">
      <Flex bgColor="gray.900" justify="center">
        <Box h="100%" w="100%" maxW="1100px" aspect-video>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </Box>
      </Flex>

      <Box p="8" maxW="1100px" mx="auto">
        <Flex
          align={isWideVersionMobile ? "start" : "center"}
          gap="16"
          flexDirection={isWideVersionMobile ? "row" : "column"}
        >
          <Box flex="1">
            <Heading
              fontWeight="bold"
              fontSize={isWideVersionMobile ? "2rem" : "1.5rem"}
            >
              {data.lesson.title}
            </Heading>
            <Text
              mt="4"
              fontSize={isWideVersionMobile ? "1rem" : "0.8rem"}
              color="gray.200"
            >
              {data.lesson.description}
            </Text>

            {data.lesson.teacher && (
              <Flex align="center" gap="4" mt="6">
                <Image
                  h="16"
                  w="16"
                  borderRadius="50%"
                  border="2px solid"
                  borderColor="blue.500"
                  src={data.lesson.teacher.avatarURL}
                  alt="Imagem Professor"
                />

                <Box>
                  <Text
                    fontWeight="bold"
                    fontSize={isWideVersionMobile ? "1.5rem" : "1rem"}
                  >
                    {data.lesson.teacher.name}
                  </Text>
                  <Text
                    color="gray.200"
                    fontSize={isWideVersionMobile ? "0.8rem" : "0.7rem"}
                    className="text-gray-200 text-sm block"
                  >
                    {data.lesson.teacher.bio}
                  </Text>
                </Box>
              </Flex>
            )}
          </Box>
          <Flex flexDirection="column" gap="4">
            <Link
              href="#"
              p="4"
              fontSize="0.8rem"
              bgColor="green.500"
              display="flex"
              alignItems="center"
              borderRadius="4"
              fontWeight="bold"
              textTransform="uppercase"
              gap="2"
              _hover={{ bgColor: "green.700" }}
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </Link>
            <Link
              href="#"
              p="4"
              fontSize="0.8rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="4"
              fontWeight="bold"
              textTransform="uppercase"
              border="1px solid"
              borderColor="blue.500"
              gap="2"
              _hover={{ bgColor: "blue.500", color: "gray.900" }}
            >
              <Lightning size={24} />
              Acesse o Desafio
            </Link>
          </Flex>
        </Flex>
        <Flex
          gap="8"
          mt="20"
          gridColumn="2"
          flexDirection={isWideVersionMobile ? "row" : "column"}
        >
          <Link
            href="#"
            bgColor="gray.700"
            borderRadius="4"
            overflow="hidden"
            display="flex"
            alignItems="stretch"
            gap="3"
            _hover={{ bgColor: "gray.600" }}
          >
            <Flex bgColor="green.700" minH="100%" p="3" align="center">
              <FileArrowDown size={40} />
            </Flex>
            <Box py="3">
              <Text
                fontSize={isWideVersionMobile ? "1.5rem" : "1rem"}
                fontWeight="bold"
              >
                Material complementar
              </Text>
              <Text
                fontSize={isWideVersionMobile ? "0.9rem" : "0.7rem"}
                color="gray.200"
                mt="2"
              >
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </Text>
            </Box>
            <Flex h="100%" p="3" align="center">
              <CaretRight size={24} />
            </Flex>
          </Link>

          <Link
            href="#"
            bgColor="gray.700"
            borderRadius="4"
            overflow="hidden"
            display="flex"
            alignItems="stretch"
            gap="3"
            _hover={{ bgColor: "gray.600" }}
          >
            <Flex bgColor="green.700" minH="100%" p="3" align="center">
              <FileArrowDown size={40} />
            </Flex>
            <Box py="3">
              <Text
                fontSize={isWideVersionMobile ? "1.5rem" : "1rem"}
                fontWeight="bold"
              >
                Wallpapers exclusivos
              </Text>
              <Text
                fontSize={isWideVersionMobile ? "0.9rem" : "0.7rem"}
                color="gray.200"
                mt="2"
              >
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </Text>
            </Box>
            <Flex h="100%" p="3" align="center">
              <CaretRight size={24} />
            </Flex>
          </Link>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}
