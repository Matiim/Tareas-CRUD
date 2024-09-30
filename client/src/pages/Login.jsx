import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, errors: LoginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <div className="  flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-900 max-w-md w-full p-10 rounded-md">
          {LoginErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
              {error}
            </div>
          ))}

          <h1 className="text-2xl font-bold text-center pb-10 ">Login</h1>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              {...register("email", { require: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email requerido</p>}

            <input
              type="password"
              {...register("password", { require: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 mb-4"
              placeholder="Contraseña"
            />
            {errors.password && (
              <p className="text-red-500">Contraseña requerido</p>
            )}
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Iniciar
            </button>
          </form>
          <Link
            className="text-center flex justify-center p-1 m-1 "
            to="/register"
          >
            Registrate aqui
          </Link>
        </div>
    </div>
  );
}

export default Login;
