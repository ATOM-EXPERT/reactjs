import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object({
    fullname: yup
    .string()
    .required("This field is required"),
    email: yup
    .string()
    .email("This is not a valid email")
    .required("Email is required"),
    password: yup
    .string()
    .required("Password is required")
    .length(5, "Password should not be less than or more than 5 character")
})

function Yuplogin() {
    const{
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit =(data) => {
        console.log(data)
        reset();
    }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Sign in to your account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Fullname */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Full Name
              </label>
              <input
                type="fullname"
                id="fullname"
                name="fullname"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Atom Boi"
                {...register("fullname")}
              />
          
          {errors.fullname && <p className="text-red-600">{errors.fullname.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                {...register("password")}
              />
              
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}
            </div>

            {/* Submit */}
            <div>
              <button
                // onClick={changeState}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Yuplogin;
