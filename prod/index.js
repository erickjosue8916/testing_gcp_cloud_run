"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./services/express"));
const controllers_1 = __importDefault(require("./controllers"));
const app = express_1.default("", controllers_1.default);
//# sourceMappingURL=index.js.map