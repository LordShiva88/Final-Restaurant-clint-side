import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await googleLogin();
      toast.success("Login successful!!");
      navigate('/')
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL,
      };
      const result = await axios.post("/users", userInfo);
      console.log(result);      
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="mt-4">
      <div className="flex space-x-2 justify-center gap-5">
        <FaFacebook className="text-5xl text-blue-700 cursor-pointer hover:text-blue-900 border rounded-full p-2" />
        <button onClick={handleLogin}>
          <FaGoogle className="text-5xl text-red-600 cursor-pointer hover:text-red-800 border rounded-full p-2" />
        </button>
        <FaGithub className="text-5xl text-gray-800 cursor-pointer hover:text-gray-600 border rounded-full p-2" />
      </div>
    </div>
  );
};

export default SocialLogin;
