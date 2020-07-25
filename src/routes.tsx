import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DashBoard from "./pages/dashboard";
import Login from "./pages/login";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: "#f0f0f5" } }}
      >
        <AppStack.Screen name="DashBoard" component={DashBoard} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
