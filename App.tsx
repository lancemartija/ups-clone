import React from "react";
import utilities from "./tailwind.json";
import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SafeAreaView } from "react-native";

const client = new ApolloClient({
  uri: "https://legnago.stepzen.net/api/cold-seastar/__graphql",
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    authorization:
      "APIKey legnago::stepzen.net+1000::17f58a65f8af76cdffe6b33b67c7cb5928c8e01e5fcdfe61145a7b9830cd421a",
  },
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
