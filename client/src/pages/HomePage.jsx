import { useAuth } from "../context/AuthContext"

function HomePage() {
  const {user} = useAuth()


  return (
    <div className=" items-center justify-center">
      <h1 className="text-2xl font-bold text-center pt-10 ">Bienvenido al Gestor de tareas {user.username}</h1>
      <h2 className="text-xl font-bold text-center pt-3">Agrega una nueva tarea</h2>
    </div>
  )
}

export default HomePage