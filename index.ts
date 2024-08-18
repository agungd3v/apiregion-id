import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();
app.use(router);

app.listen(process.env.PORT, () => { 
  console.log("Server running at PORT:", process.env.PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});