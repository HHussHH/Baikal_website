import express from "express";
import cookieParser from "cookie-parser";

import { testQuery } from "./controllers/test.js";

const port = 8800;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/api/test", testQuery);

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
