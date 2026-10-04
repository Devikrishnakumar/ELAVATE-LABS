const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const tasks = [
    { id: 1, title: "Learn GitHub Actions", completed: false },
    { id: 2, title: "Build Docker Image", completed: true }
];

app.get("/", (req, res) => {
    res.json({
        application: "Task Management API",
        version: "1.0.0",
        message: "CI/CD pipeline demo application"
    });
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/api/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
});

app.post("/api/tasks", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    const task = {
        id: tasks.length + 1,
        title,
        completed: false
    };

    tasks.push(task);
    res.status(201).json(task);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;