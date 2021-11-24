"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const gunpla_1 = __importDefault(require("./gunpla"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use('/gunpladb', gunpla_1.default);
app.listen('3000', () => {
    console.log('Server Started');
});
