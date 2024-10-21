import { Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = AuthProvider();

  return (
    <nav className="flex justify-between items-center p-6 bg-zinc-700 text-white">
      <Link to="/">
        <h1 className="text-2xl font-bold">Tareas Manager</h1>
      </Link>
      <ul className="flex gap-x-4 items-center">
        {isAuthenticated ? (
          <>
            <li>
              <Link
                to="/tasks"
                className="text-white  hover:text-blue-500 font-bold"
              >
                Tareas
              </Link>
            </li>
            <li>
              <Link
                to="/add-task"
                className=" text-green-400  hover:text-green-500 font-bold "
              >
                Nueva Tarea
              </Link>
            </li>
            <p className="text-white  font-bold text-xl text-center">
              Hola, {user.username}
            </p>
            {/*   <li>
              <Link to="/profile"className="text-white  hover:text-blue-500 font-bold">Perfil</Link>
            </li> */}
            <li>
              <Link
                to="/login"
                onClick={logout}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Salir
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* <li>
              <Link to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar Sesion</Link>
            </li> */}
            <li>
              <Link
                to="/register"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
