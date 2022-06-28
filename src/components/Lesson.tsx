import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

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

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <Text color="gray.300" fontSize="1rem">
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
            <Text
              fontSize="0.8rem"
              fontWeight="medium"
              display="flex"
              align="center"
              gap="2"
              color={isActiveLesson ? "white" : "blue.500"}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </Text>
          ) : (
            <Text
              fontSize="0.8rem"
              fontWeight="medium"
              display="flex"
              align="center"
              gap="2"
              color={isActiveLesson ? "white" : "orange.500"}
            >
              <Lock size={20} />
              Em breve
            </Text>
          )}
          <Text
            fontSize="0.6rem"
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
          fontSize="1rem"
          color={isActiveLesson ? "white" : "gray.200"}
        >
          {props.title}
        </Text>
      </Box>
    </Link>
  );
}
