import styled from "styled-components/native";

interface ColumnProps {
  size?: number;
  row?: boolean;
  marginRight?: boolean;
  marginLeft?: boolean;
  alignItems?:
    | string
    | "flex-start"
    | "stretch"
    | "flex-end"
    | "center"
    | "baseline";
}

const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  height: 60px;
`;

const Column = styled.View`
  flex: ${(props: ColumnProps) => (props.size ? props.size : 1)};
  flex-direction: ${(props: ColumnProps) => (props.row ? "row" : "column")};
  justify-content: center;
  margin-left: ${(props: ColumnProps) => (props.marginLeft ? "25px" : "0px")};
  margin-right: ${(props: ColumnProps) => (props.marginRight ? "25px" : "0px")};
  align-items: ${(props: ColumnProps) =>
    props.alignItems ? props.alignItems : "stretch"};
`;

const Logo = styled.Text`
  color: #000;
  font-size: 16px;
  margin-left: 25px;
  font-family: RobotoCondensed_700Bold;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export { Container, Column, Logo, Avatar };
