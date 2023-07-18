import { TextInput } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//[takecare] we need to import TextInput to use external props
// or use external components
export const Container = styled(TextInput)`
  width: 100%;
  padding: 18px 16px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  margin-bottom: 16px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
