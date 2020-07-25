import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { Provider } from "react-redux";
import { Store } from "./src/store";
import { AppLoading } from "expo";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import {
  RobotoCondensed_700Bold,
  RobotoCondensed_400Regular,
} from "@expo-google-fonts/roboto-condensed";
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    RobotoCondensed_700Bold,
    RobotoCondensed_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={Store}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Routes />
    </Provider>
  );
}
