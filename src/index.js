import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
let todos = [];
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/todo", (req, res) => res.json(todos));
app.get("/todo/:id", (req, res) => {
  let idn = todos.findIndex((todo) => todo.id == req.params.id);
  if (idn == -1) {
    res.status(401).json({
      message: "Data not found with id :" + req.params.id,
    });
  }
  res.json(todos[idn]);
});
app.post("/todo", (req, res) => {
  const title = req.body?.title;
  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Invalid or missing title" });
  }

  const newTodo = {
    id: Date.now(),
    title,
    isCompleted: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});
app.put("/todo/:id", (req, res) => {
  let idn = todos.findIndex((todo) => todo.id == req.params.id);
  if (idn == -1) {
    res.status(401).json({
      message: "Data not found with id :" + req.params.id,
    });
  }
  todos[idn].title = req.body.title;
  res.json({ message: "Data updated" });
});
app.delete("/todo/:id", (req, res) => {
  let idn = todos.findIndex((todo) => todo.id == req.params.id);
  if (idn == -1) {
    res.status(401).json({
      message: "Data not found with id :" + req.params.id,
    });
  }
  todos = todos.filter((todo) => todo.id != idn);
  res.json({
    message: "Data deleted",
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
