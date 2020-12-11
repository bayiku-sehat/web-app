import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const client  = new ApolloClient ({
  // uri: "http://localhost:4000",
  uri:"https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
})

export default client;