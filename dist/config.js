"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configStyle = void 0;
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
exports.configStyle = {
    shouldForwardProp: (prop) => {
        return acceptedDOMProps.includes(prop);
    },
};
