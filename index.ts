import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (request: Request, response: Response) => { 
  response.status(200).json({
    message: "Selamat datang di api wilayah indonesia"
  });
}); 

app.listen(process.env.PORT, () => { 
  console.log("Server running at PORT: ", process.env.PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});