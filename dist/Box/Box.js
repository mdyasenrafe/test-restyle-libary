"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const config_1 = require("../config");
const common_1 = require("../common");
exports.Box = native_1.default.View.withConfig(config_1.configStyle) `
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${common_1.systemStyles};
`;
