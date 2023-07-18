import React from "react";

import { TextInputProps } from "react-native";
import { Container } from "./styles";
import theme from "../../../global/styles/theme";

export const Input: React.FunctionComponent<TextInputProps> = ({ ...rest }) => {
  return <Container placeholderTextColor={theme.colors.gray500} {...rest} />;
};
