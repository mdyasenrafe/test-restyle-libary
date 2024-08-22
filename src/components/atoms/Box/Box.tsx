import styled from "styled-components/native";
import { configStyle } from "../config";
import { systemStyles } from "../common";
import { BoxProps } from "./box.type";

export const Box = styled.View.withConfig(configStyle)<BoxProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${systemStyles};
`;
