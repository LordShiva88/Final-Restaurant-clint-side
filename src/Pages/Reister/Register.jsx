import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";

import bg from "../../assets/others/authentication.png";
import img from "../../assets/others/authentication2-removebg-preview.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet";
import Container from "../../Components/Container/Container";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const {signUp} = useContext(AuthContext)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateUser = (data) => {
    if (validateCaptcha(data.captcha)) {
      signUp(data.email, data.password).then((res) => {
        console.log(res.user);
      });
    } else {
      alert("captcha Not match");
    }
  };

  return (
    <Container>
      <div
        className="flex md:flex-row flex-col items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="md:max-w-xl w-full p-10 flex-1">
          <Helmet>
            <title>Bistro Boss || Order</title>
          </Helmet>
          <h1 className="text-2xl font-bold mb-8">Register</h1>
          <form onSubmit={handleSubmit(handleCreateUser)} className="space-y-4 shadow-lg p-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Photo Url
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                {...register("photo", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                {...register("password", { required: true })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                <LoadCanvasTemplate />
              </label>
              <input
                {...register("captcha", { required: true })}
                type="captcha"
                placeholder="Type This Captcha"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              {errors.photo && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex ">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                className="mr-2"
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                Accept Terms and Conditions
              </label>
            </div>
            <button
              type="submit"
              className="btn w-full bg-[#D1A054] hover:bg-[#D2A000]"
            >
              Login
            </button>
            <div className="text-center">
              <p>
                Already Have an Account{" "}
                <Link to={"/login"} className="text-[#D1A054]">
                  Login
                </Link>
              </p>
              <h3>Or login in with</h3>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>

        <div className="flex-1  md:block hidden">
          <img src={img} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Register;
