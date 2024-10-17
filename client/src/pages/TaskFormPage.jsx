import { useForm } from "react-hook-form";
import { useTask } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'

dayjs.extend(utc)

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date",task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : "");
        setValue("completed", task.completed);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid ={
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
    }

    if(data.date) dataValid.date = dayjs.utc(data.date).format()
    
    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <div className="  flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="  bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold text-center pb-10 ">Nueva Tarea</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            placeholder="Titulo"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="description">Descripción</label>
          <textarea
            rows="3"
            placeholder="Descripción"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            placeholder="Fecha"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mb-4"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
