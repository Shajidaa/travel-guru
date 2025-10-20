import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-dvh">
        <div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 border border-gray-500 ">
            <div className="card-body">
              <h1 className="text-2xl font-bold">Login</h1>
              <fieldset className="fieldset">
                <input
                  type="email"
                  className="input border-0 border-b  placeholder-black font-semibold "
                  placeholder="Username or Email"
                />

                <input
                  type="password"
                  className="input border-0 border-b placeholder-black font-semibold "
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover font-medium">
                    Forgot password?
                  </a>
                </div>
                <button className="btn  border-0 bg-[#F9A51A] mt-4">
                  Login
                </button>
              </fieldset>
              <p className="text-center  font-semibold">
                Don't have an account?{" "}
                <Link to={"/register"} className="underline text-[#F9A51A]">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
          <div className="divider">Or</div>
          <div className="flex flex-col">
            <button className="btn bg-transparent rounded-2xl border-black   mt-4">
              <FcGoogle className="size-5" /> Continue with Google
            </button>
            <button className="btn bg-transparent rounded-2xl border-black  mt-4">
              <FaFacebook color="blue" className="size-5" /> Continue with
              Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
