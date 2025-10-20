import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-dvh mt-30">
      <div className="">
        <div className="card bg-base-100 w-full md:w-[400px] shrink-0 border border-gray-500 ">
          <div className="card-body">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <fieldset className="fieldset">
              {/* First Name */}
              <input
                type="text"
                className="input border-0 border-b  placeholder-black font-semibold "
                placeholder="First Name"
              />
              {/* Last Name */}
              <input
                type="text"
                className="input border-0 border-b  placeholder-black font-semibold "
                placeholder="Last Name"
              />
              {/* email */}
              <input
                type="email"
                className="input border-0 border-b  placeholder-black font-semibold "
                placeholder=" Email"
              />
              {/* password */}
              <input
                type="password"
                className="input border-0 border-b placeholder-black font-semibold "
                placeholder="Password"
              />
              {/* password */}
              <input
                type="Conform Password"
                className="input border-0 border-b placeholder-black font-semibold "
                placeholder="Conform Password"
              />

              <button className="btn  border-0 bg-[#F9A51A] mt-4">
                Create an account
              </button>
            </fieldset>
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
