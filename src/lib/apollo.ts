import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ovmz96187q01xsabl324i3/master",
  cache: new InMemoryCache(),
});
