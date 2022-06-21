import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o1ebdy04kl01xiaeerdd97/master',
  cache: new InMemoryCache()
})