import styled from "styled-components";
import { ColumnProps } from "./column.type";
import { systemStyles } from "../common";
import { configStyle } from "../config";

export const Column = styled.div.withConfig(configStyle)<ColumnProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${systemStyles};
`;
