import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
const SocialLogin = () => {
  return (
    <div className="mt-4">
      <div className="flex space-x-2 justify-center gap-5">
        <FaFacebook className="text-5xl text-blue-700 cursor-pointer hover:text-blue-900 border rounded-full p-2" />
        <FaGoogle className="text-5xl text-red-600 cursor-pointer hover:text-red-800 border rounded-full p-2" />
        <FaGithub className="text-5xl text-gray-800 cursor-pointer hover:text-gray-600 border rounded-full p-2" />
      </div>
    </div>
  );
};

export default SocialLogin;
