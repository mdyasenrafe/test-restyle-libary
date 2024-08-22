import styled from "styled-components/native";
import { systemStyles } from "../common";
import { configStyle } from "../config";
import { RowProps } from "./row.type";

export const Row = styled.View.withConfig(configStyle)<RowProps>`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  ${systemStyles};
`;
