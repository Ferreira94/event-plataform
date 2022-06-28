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
    <Box
      w={isWideVersionMobile ? "348px" : "280px"}
      bgColor="gray.700"
      p={isWideVersionMobile ? "6" : "3"}
      as="aside"
      mx="auto"
    >
      <Text
        fontWeight="bold"
        fontSize={isWideVersionMobile ? "1.5rem" : "1rem"}
        pb="6"
        mb="6"
        borderBottom="1px solid"
        borderColor="gray.600"
      >
        Episódios
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
