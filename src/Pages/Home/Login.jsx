import { useContext, useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, setUser, setLoading, forgerPassword, googleSignIn } =
    useContext(AuthContext);
  const location = useLocation();
  const emailRef = useRef();
  const from = location.state || "/";
  const navigate = useNavigate();

  const handelGoogleSignIn = () => {
    googleSignIn().then((result) => {
      setLoading(false);
      setUser(result.user);
      navigate(from);
      toast.success("Google sing in successfully");
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();

    const formTarget = e.target;

    const email = formTarget.email.value;
    const password = formTarget.password.value;
    loginUser(email, password)
      .then((res) => {
        setLoading(false);
        if (!res.user.emailVerified) {
          toast.error("Your Email is not verified ");
          return;
        }

        setUser(res.user);
        toast("login successfully");
        navigate(location.state?.from || "/");
      })
      .catch((error) => toast.error(error.message));
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    forgerPassword(email)
      .then(() => {
        setLoading(false);
        toast.success("Check your email to reset password");
      })
      .catch((error) => {
        return toast.error(error.message);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-dvh">
        <div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 border border-gray-500 ">
            <div className="card-body">
              <h1 className="text-2xl font-bold">Login</h1>
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <input
                    type="email"
                    ref={emailRef}
                    name="email"
                    className="input border-0 border-b  placeholder-black font-semibold "
                    placeholder="Username or Email"
                  />

                  <input
                    type="password"
                    name="password"
                    className="input border-0 border-b placeholder-black font-semibold "
                    placeholder="Password"
                  />
                  <div>
                    <a
                      onClick={handleForgetPassword}
                      className="link link-hover font-medium"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="btn  border-0 bg-[#F9A51A] mt-4"
                  >
                    Login
                  </button>
                </fieldset>
              </form>
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
            <button
              onClick={handelGoogleSignIn}
              className="btn bg-transparent rounded-2xl border-black   mt-4"
            >
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
