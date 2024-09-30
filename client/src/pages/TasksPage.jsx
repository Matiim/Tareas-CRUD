import { useEffect } from "react";
import { useTask } from "../context/TasksContext"
import TaskCard from "../components/TaskCard";


function TasksPage() {

  const { getTasks,tasks } = useTask();

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) return <div>No hay tareas</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        tasks.map(task =>(
          <TaskCard task={task} key={task._id} />
        ))
      }
    </div>
  )
}

export default TasksPage