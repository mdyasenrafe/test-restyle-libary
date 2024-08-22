import {
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  PositionProps,
  BorderRadiusProps,
  ShadowProps,
  BackgroundColorProps,
} from "styled-system";

export type ColumnProps = LayoutProps &
  BackgroundProps &
  BorderProps &
  FlexboxProps &
  PositionProps &
  BackgroundColorProps &
  ShadowProps &
  BorderRadiusProps &
  SpaceProps & {
    gap?: string | number | string[] | number[];
  };
