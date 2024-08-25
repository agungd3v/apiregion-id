import dotenv from "dotenv";
dotenv.config();

import { injectSpeedInsights } from "@vercel/speed-insights";
import express from "express";
import bodyParser from "body-parser";
import router from "./routes";

const app = express();
injectSpeedInsights();

app.use(bodyParser.json());
app.use(router);
app.listen(process.env.PORT, () => {}).on("error", (error) => new Error(error.message));
