import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o4gcpo0hzg01xigb36blpz/master",
  cache: new InMemoryCache(),
});
