const acceptedDOMProps = [
  "style",
  "height",
  "width",
  "children",
  "variant",
  "onClick",
  "onKeyDown",
  "onChange",
  "id",
  "onFocus",
  "onBlur",
  "type",
  "name",
  "value",
  "cols",
  "rows",
  "placeholder",
  "zIndex",
  "cursor",
  "dangerouslySetInnerHTML",
  "disabled",
  "list",
];

// React Native specific properties like onPress instead of onClick might be used
export const configStyle = {
  shouldForwardProp: (prop: string) => {
    return acceptedDOMProps.includes(prop);
  },
};
