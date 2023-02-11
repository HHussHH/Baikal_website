import express from "express";
import cookieParser from "cookie-parser";

import { getProject, projectQuery } from "./controllers/projects.js";
import { getNeedhelp, needhelpQuery } from "./controllers/needHelp.js";
import { wethankQuery } from "./controllers/we_thank.js";
import { getWethanked, wethankedQuery } from "./controllers/we_thanked.js";
import { getSmi, smiQuery } from "./controllers/smi.js";
import { contactsQuery } from "./controllers/contacts.js";
import { getNews, newsQuery } from "./controllers/news.js";
import { anotherQuery } from "./controllers/another.js";
const port = 8800;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/api/projects", projectQuery);
app.get("/api/project/:id", getProject);
app.get("/api/needHelp", needhelpQuery);
app.get("/api/HowHelp/:id", getNeedhelp);
app.get("/api/weThank", wethankQuery);
app.get("/api/weThanked", wethankedQuery);
app.get("/api/weThanked/:id", getWethanked);
app.get("/api/smi", smiQuery);
app.get("/api/smi/:id", getSmi);
app.get("/api/contacts", contactsQuery);
app.get("/api/news", newsQuery);
app.get("/api/news/:id", getNews);
app.get("/api/another", anotherQuery);

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
