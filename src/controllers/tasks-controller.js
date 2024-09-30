import Task from "../models/task-model.js";

//crud para crear, ver, actulizar y eliminar tareas

//crear una tarea
export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newTasks = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTask = await newTasks.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//mostrar todas las tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    });
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//mostrar una tarea en particular
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: "Tarea no encontrada" });
  }
};

//actualizar tarea
export const updateTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const taskUpdate = await Task.findByIdAndUpdate(
      { _id: req.params.id },
      { title, description, date },
      { new: true }
    );

    return res.json(taskUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//eliminar tarea
export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
