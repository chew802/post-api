import express, { Request, Response } from "express";
import { getSortedPosts, searchComments } from './modules/post/post';

const app = express();
const { PORT = 8080 } = process.env;

app.get("/posts", getSortedPosts);

app.get("/comments", searchComments);

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
