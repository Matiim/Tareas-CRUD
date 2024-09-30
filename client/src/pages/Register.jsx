import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className="  flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-900 max-w-md p-10 rounded-md">
        {RegisterErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-center pb-10 ">Registro</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { require: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">El Username es requerido</p>
          )}

          <input
            type="email"
            {...register("email", { require: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">El Email es requerido</p>
          )}

          <input
            type="password"
            {...register("password", { require: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 mb-4"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">La Password es requerida</p>
          )}

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Registrar
          </button>
        </form>
        <Link className="text-center flex justify-center p-1 mt-1 " to="/login">
          Login aqui
        </Link>
      </div>
    </div>
  );
}
export default RegisterPage;
