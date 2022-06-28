import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { VideoEmpty } from "../components/VideoEmpty";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  const isWideVersionTablet = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Flex flex="1" as="main">
        {slug ? <Video lessonSlug={slug} /> : <VideoEmpty />}
        {isWideVersionTablet && <Sidebar />}
      </Flex>
    </Flex>
  );
}
