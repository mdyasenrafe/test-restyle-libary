"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemStyles = exports.gap = void 0;
const styled_system_1 = require("styled-system");
// React Native doesn't have a "gap" property by default, so this is custom
exports.gap = (0, styled_system_1.style)({
    prop: "gap",
    key: "space",
    scale: "space",
});
exports.systemStyles = (0, styled_system_1.compose)(styled_system_1.space, styled_system_1.layout, styled_system_1.typography, styled_system_1.color, styled_system_1.background, styled_system_1.border, styled_system_1.flexbox, styled_system_1.position, styled_system_1.borderRadius, exports.gap, styled_system_1.shadow, styled_system_1.backgroundColor);
