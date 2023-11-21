import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {

  const {logOut} = useAuth();
  const navigate = useNavigate()

  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('access-token')
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  instance.interceptors.response.use(function (response) {
    return response;
}, async (error) => {
    const status = error.response.status;
    if (status === 401) {
        await logOut();
        navigate('/login');
    }
    return Promise.reject(error);
})
  return instance
};

export default useAxiosSecure;