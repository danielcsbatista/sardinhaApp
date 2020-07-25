import React from "react";
import { Text } from "react-native";
import { Container, Column, Logo, Avatar } from "./style";
import { Ionicons as Icon } from "@expo/vector-icons";

const HeaderApp = () => {
  return (
    <Container>
      <Column>
        <Logo>SardinhaApp</Logo>
      </Column>
      <Column row>
        <Column size={6} alignItems="flex-end">
          <Icon name="md-notifications" size={24} color="black" />
        </Column>
        <Column size={2} marginRight alignItems="flex-end">
          <Avatar
            source={{
              uri:
                "data:image/png;base64,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",
            }}
          />
        </Column>
      </Column>
    </Container>
  );
};

export default HeaderApp;
