import {
  style,
  space,
  borderRadius,
  layout,
  typography,
  color,
  background,
  border,
  flexbox,
  position,
  compose,
  shadow,
  backgroundColor,
} from "styled-system";

// React Native doesn't have a "gap" property by default, so this is custom
export const gap = style({
  prop: "gap",
  key: "space",
  scale: "space",
});

export const systemStyles = compose(
  space,
  layout,
  typography,
  color,
  background,
  border,
  flexbox,
  position,
  borderRadius,
  gap,
  shadow,
  backgroundColor
);
