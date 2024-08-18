import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { getProvinces } from "./helpers";

dotenv.config();

const app = express();

app.get("/", async (request: Request, response: Response) => { 
  response.status(200).json({
    message: await getProvinces()
  });
}); 

app.listen(process.env.PORT, () => { 
  console.log("Server running at PORT: ", process.env.PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});