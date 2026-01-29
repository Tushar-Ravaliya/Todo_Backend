import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/todo", (req, res) => res.send("Hello World!"));
app.get("/todo/:id", (req, res) => res.send("Hello World!"));
app.post("/todo", (req, res) => res.send("Hello World!"));
app.put("/todo/:id", (req, res) => res.send("Hello World!"));
app.delete("/todo/:id", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
