import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure.get(`/carts?email=${user?.email}`);
        return res.data;
      }
      return []
    },
  });
  return [cart, refetch];
};

export default useCart;
