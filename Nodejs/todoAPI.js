const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let idCounter = 1;

// CREATE
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTask = { id: idCounter++, title, completed: false };
  tasks.push(newTask);

  res.status(201).json(newTask);
});

// READ ALL
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// READ ONE
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });

  res.json(task);
});

// UPDATE
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: "Task not found" });

  const { title, completed } = req.body;

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// DELETE
app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const deletedTask = tasks.splice(index, 1);
  res.json({ message: "Task deleted ✅", deletedTask });
});

app.listen(3000, () => console.log("TODO API running on http://localhost:3000 ✅"));
