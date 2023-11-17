import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/SocialLogin";
import logImg from "../../assets/others/authentication2-removebg-preview.png";
import bg from "../../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet";
import Container from "../../Components/Container/Container";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || '/'; 

  const { logIn } = useAuth();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const captcha = form.captcha.value;
    form.reset();

    if (validateCaptcha(captcha)) {
      logIn(email, pass)
        .then((res) => {
          console.log(res);
          navigate(redirectTo); // Redirect to the specified path after successful login
        })
        .catch((error) => console.error(error));
    } else {
      alert('Captcha Does Not Match');
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
            <title>Bistro Boss || Login</title>
          </Helmet>

          <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>

          <form onSubmit={handleLoginForm} className="space-y-4 shadow-lg p-4">
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

        <div className="flex-1 hidden md:block">
          <img src={logImg} alt="" className="" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
