import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  const isWideVersionMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box w="348px" bgColor="gray.700" p="6" as="aside">
      <Text
        fontWeight="bold"
        fontSize="1.5rem"
        pb="6"
        mb="6"
        borderBottom="1px solid"
        borderColor="gray.600"
      >
        Cronograma de Aulas
      </Text>

      <Flex flexDirection="column" gap="8">
        {data?.lessons.map((item) => (
          <Lesson
            key={item.id}
            title={item.title}
            slug={item.slug}
            availableAt={new Date(item.availableAt)}
            type={item.lessonType}
          />
        ))}
      </Flex>
    </Box>
  );
}
