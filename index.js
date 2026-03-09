import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello From Express");
});

app.use((req, res) => {
    res.status(404).send("That route doesn't exist");
});

app.listen(port, () => {
    console.log(`Server is Running on Port : https://localhost:${port}`);
});