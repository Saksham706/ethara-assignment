const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const { name, description, members } = req.body;

  const project = await Project.create({
    name,
    description,
    owner: req.user._id,
    members,
  });

  res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find({
    $or: [
      { owner: req.user._id },
      { members: req.user._id },
    ],
  }).populate("members", "name email");

  res.json(projects);
};