// src/app.ts
import express from "express";
import petRouter from "./routes/petRouter";

const app = express();
app.use(express.json());
app.use("/pets", petRouter);

app.get("/", (_, res: express.Response) => {
    res.send("Bem vindo ao curso de TypeScript!");
});

export default app;
