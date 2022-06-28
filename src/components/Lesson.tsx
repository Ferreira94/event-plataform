import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: ILessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isActiveLesson = slug === props.slug;

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isWideVersionMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <Text color="gray.300" fontSize={isWideVersionMobile ? "1rem" : "0.8rem"}>
        {availableDateFormatted}
      </Text>

      <Box
        p="4"
        mt="2"
        borderRadius="4"
        border="1px solid"
        borderColor="gray.500"
        bgColor={isActiveLesson ? "green.500" : "gray.700"}
        _groupHover={{ borderColor: "green.500" }}
      >
        <Flex align="center" justify="space-between">
          {isLessonAvailable ? (
            <Flex align="center">
              <CheckCircle size={isWideVersionMobile ? 20 : 16} />

              <Text
                fontSize={isWideVersionMobile ? "0.8rem" : "0.7rem"}
                fontWeight="medium"
                display="flex"
                align="center"
                gap="2"
                ml="1"
                color={isActiveLesson ? "white" : "blue.500"}
              >
                Conteúdo liberado
              </Text>
            </Flex>
          ) : (
            <Flex align="center">
              <Text
                fontSize={isWideVersionMobile ? "0.8rem" : "0.7rem"}
                fontWeight="medium"
                display="flex"
                align="center"
                gap="2"
                ml="1"
                color={isActiveLesson ? "white" : "orange.500"}
              >
                <Lock size={isWideVersionMobile ? 20 : 16} />
                Em breve
              </Text>
            </Flex>
          )}
          <Text
            fontSize={isWideVersionMobile ? "0.6rem" : "0.5rem"}
            py="0.125rem"
            px="2"
            border="1px solid"
            borderColor={isActiveLesson ? "white" : "green.300"}
            borderRadius="4"
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </Text>
        </Flex>

        <Text
          mt="5"
          fontSize={isWideVersionMobile ? "1rem" : "0.8rem"}
          color={isActiveLesson ? "white" : "gray.200"}
        >
          {props.title}
        </Text>
      </Box>
    </Link>
  );
}
