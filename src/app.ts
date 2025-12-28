import express, { type Application } from "express";

import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { postRouter } from "./modules/post/post.routes";
import { getRouter } from "./modules/get/get.router";

const app: Application = express();

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.use("/posts", postRouter);
// app.use("/posts", getRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default app;