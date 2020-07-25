import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { Provider } from "react-redux";
import { Store } from "./src/store";
export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </Provider>
  );
}
