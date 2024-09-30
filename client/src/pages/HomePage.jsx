import { useAuth } from "../context/AuthContext"

function HomePage() {
  const {user} = useAuth()


  return (
    <div className=" items-center justify-center">
      <h1 className="text-2xl font-bold text-center pt-10 ">Bienvenido {user.username}</h1>
    </div>
  )
}

export default HomePage