import express from "express";
import cookieParser from "cookie-parser";

import { projectQuery } from "./controllers/projects.js";
import { needhelpQuery } from "./controllers/needHelp.js";
import { wethankQuery } from "./controllers/we_thank.js";
import { wethankedQuery } from "./controllers/we_thanked.js";
import { smiQuery } from "./controllers/smi.js";
import { contactsQuery } from "./controllers/contacts.js";
import { newsQuery } from "./controllers/news.js";

const port = 8800;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/api/projects", projectQuery);
app.get("/api/needHelp", needhelpQuery);
app.get("/api/weThank", wethankQuery);
app.get("/api/weThanked", wethankedQuery);
app.get("/api/smi", smiQuery);
app.get("/api/contacts", contactsQuery);
app.get("/api/news", newsQuery);

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
