import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4qxzp4s0aga01yxfhc2fx4b/master',
  cache: new InMemoryCache(),
});
