import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import ImageHost from "../../Hooks/ImageHost";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const axios = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateUser = async (data) => {
    try {
      const image = { image: data.photo[0] };
      const userImage = await ImageHost(image);

      if (validateCaptcha(data.captcha)) {
        const result = await signUp(data.email, data.password);
        const { user } = result;

        await updateProfile(user, {
          displayName: data.name,
          photoURL: userImage,
        });

        const userInfo = {
          name: data.name,
          email: data.email,
          image: userImage,
        };

        const response = await axios.post("/users", userInfo);

        if (response.data.insertedId > 0) {
          toast.success("Registered Successfully!!!");
          navigate("/");
        } else {
          toast.error("Registration failed");
        }
      } else {
        alert("Captcha does not match");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration.");
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
        }}
      >
        <div className="md:max-w-xl w-full p-10 flex-1">
          <Helmet>
            <title>Bistro Boss || Order</title>
          </Helmet>
          <h1 className="text-2xl font-bold mb-8">Register</h1>
          <form
            onSubmit={handleSubmit(handleCreateUser)}
            className="space-y-4 shadow-lg p-5"
          >
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
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <label className="block text-sm font-medium text-gray-600">
                  Upload An Picture
                </label>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
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
                autoComplete="username"
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
