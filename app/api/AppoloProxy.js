import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
/**
  The API wraps an Apollo client, which provides query/mutation execution
  as well as fragment caching.
*/

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000' }),
  cache: new InMemoryCache(),
});
