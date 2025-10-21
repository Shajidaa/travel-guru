import React, { use } from "react";
import { FaFacebook, FaLeaf } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const {
    createUser,
    updateProfileUser,
    setUser,
    user,
    verifyEmail,
    setLoading,
    signOutUser,
  } = use(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const displayName = firstName + " " + lastName;
    if (password !== confirmPassword) {
      return toast.error("Your password is not same with confirm password");
    } else {
      createUser(email, password).then((res) => {
        // console.log(res.user);
        //update profile
        updateProfileUser(displayName)
          .then(() => {
            console.log(res);
            //email verification
            verifyEmail()
              .then(() => {
                setLoading(false);
                //sign out user
                signOutUser().then(() => {
                  toast.success(
                    "Account created successfully! Check your email to verify your account."
                  );
                  setUser(null);
                  setLoading(false);
                  navigate("/login");
                });
              })
              .catch((e) => {
                toast.error(e.message);
              })
              .catch((error) => toast.error(error.message));
          })
          .catch((error) => toast.error(error.message));
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-dvh md:mt-10 mt-20">
      <div className="">
        <div className="card bg-base-100 w-full md:w-[400px] shrink-0 border border-gray-500 ">
          <div className="card-body">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <form onSubmit={handleRegister}>
              {" "}
              <fieldset className="fieldset">
                {/* First Name */}
                <input
                  type="text"
                  name="firstName"
                  className="input border-0 border-b 
                   placeholder-black font-semibold "
                  placeholder="First Name"
                />
                {/* Last Name */}
                <input
                  type="text"
                  name="lastName"
                  className="input border-0 border-b 
                   placeholder-black font-semibold "
                  placeholder="Last Name"
                />
                {/* email */}
                <input
                  type="email"
                  name="email"
                  className="input border-0 
                  border-b  placeholder-black font-semibold "
                  placeholder=" Email"
                />
                {/* password */}
                <input
                  type="password"
                  name="password"
                  className="input border-0 border-b
                   placeholder-black font-semibold "
                  placeholder="Password"
                />
                {/* password */}
                <input
                  type="password"
                  name="confirmPassword"
                  className="input border-0 border-b
                   placeholder-black font-semibold "
                  placeholder="confirm password"
                />

                <button
                  type="submit"
                  className="btn  border-0 bg-[#F9A51A] mt-4"
                >
                  Create an account
                </button>
              </fieldset>
            </form>

            <p className="text-center  font-semibold">
              Already have an account?
              <Link to={"/login"} className="underline text-[#F9A51A]">
                Login
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
  );
};

export default Register;
