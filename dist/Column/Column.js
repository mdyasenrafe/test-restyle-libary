"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const common_1 = require("../common");
const config_1 = require("../config");
exports.Column = styled_components_1.default.div.withConfig(config_1.configStyle) `
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${common_1.systemStyles};
`;
