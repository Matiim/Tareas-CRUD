import { Link } from "react-router-dom";
import { useTask } from "../context/TasksContext";
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'

dayjs.extend(utc)

function TaskCard({ task }) {
    const {deleteTask } = useTask();


  return (
    <div className="bg-zinc-800 max-w-md w-full  p-10 rounded-md">
  
      <button onClick={() => {deleteTask(task._id)}} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-4 ">X</button>
      <h1 className="text-2xl font-bold text-center pb-5 ">{task.title}</h1>
      <p className="text-center text-slate-300 text-pretty ">{task.description}</p>
      <header className="flex justify-center items-center  mb-4">
      <div className="flex gap-x-4 items-center mt-6">
        <Link to={`/tasks/${task._id}`} className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-2.5 py-1.5 text-center ">Editar</Link>
        
      </div>
      
      </header>
      <p className="text-right  ">
        {dayjs(task.date).utc().format("DD/MM/YYYY")}
      </p>
      
    </div>
  );
}

export default TaskCard;
