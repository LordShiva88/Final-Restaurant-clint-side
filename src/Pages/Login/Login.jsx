import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/SocialLogin";
import logImg from "../../assets/others/authentication1.png";
import bg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const captcha = form.captcha.value;
    form.reset()

    if (validateCaptcha(captcha)) {
      console.log(email, pass, captcha);
      alert("Captcha Matched");
    } else {
      alert("Captcha Does Not Match");
    }
  };

  return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-1/2  p-8">
        <h1 className="text-2xl font-bold mb-8">Login</h1>
        <form onSubmit={handleLoginForm} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
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
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="mt-5 absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="relative">
            <LoadCanvasTemplate />
            <input
              type="text"
              name="captcha"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center">
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
              Don&#39;t have an account?{" "}
              <Link to={"/register"} className="text-[#D1A054]">
                Register Now
              </Link>
            </p>
            <h3>Or login in with</h3>
          </div>
          <SocialLogin></SocialLogin>
        </form>
      </div>

      <div className="w-1/2 bg-gray-200 hidden md:block">
        <img src={logImg} alt="" />
      </div>
    </div>
  );
};

export default Login;
