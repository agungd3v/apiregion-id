import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(router);
app.listen(process.env.PORT, () => {}).on("error", (error) => new Error(error.message));
