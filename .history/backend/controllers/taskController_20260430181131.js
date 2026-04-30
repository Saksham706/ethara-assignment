const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const { title, description, project, assignedTo, dueDate } = req.body;

  const task = await Task.create({
    title,
    description,
    project,
    assignedTo,
    dueDate,
  });

  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find()
    .populate("project", "name")
    .populate("assignedTo", "_id name email");

  res.json(tasks);
};

exports.updateTaskStatus = async (req, res) => {
  const { status } = req.body;

  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.status = status;
  await task.save();

  res.json(task);
};