import React from "react";
import { View } from "react-native";
import { Container } from "./style";
import HeaderApp from "../../components/headerApp";

const BaseLayout = (props: any) => {
  return (
    <Container>
      <HeaderApp />
      <View>{props.children}</View>
    </Container>
  );
};

export default BaseLayout;
