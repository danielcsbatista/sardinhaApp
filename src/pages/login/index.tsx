import React from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import { State } from "../../store/interface";

const Login = (props: any) => {
  const { newValue } = props;
  return (
    <View>
      <Text>Login</Text>
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }} />
      <Text>{newValue}</Text>
    </View>
  );
};
const mapStateToProps = (store: any) => ({
  newValue: store.clickState.newValue,
});

export default connect(mapStateToProps)(Login);
