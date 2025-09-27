"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const speed_insights_1 = require("@vercel/speed-insights");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
(0, speed_insights_1.injectSpeedInsights)();
app.use(body_parser_1.default.json());
app.use(routes_1.default);
app.listen(process.env.PORT, () => { }).on("error", (error) => new Error(error.message));
