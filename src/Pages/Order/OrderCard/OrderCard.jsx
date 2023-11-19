import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useCart from "../../../Hooks/useCart";

const OrderCard = ({ items }) => {
  const [, refetch] = useCart();
  const { user } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddCart = async (item) => {
    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };
      const res = await axios.post("/carts", cartItem);
      console.log(res.data);

      if (res.data.insertedId) {
        toast.success(`Successfully add item ${item.name}!`);
      }
      refetch();
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please Login before Add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={items.image} alt="Shoes" className="rounded-t-xl" />
      </figure>
      <p className="absolute top-2 right-3 bg-black text-white px-2 rounded-full font-bold">
        $ {items.price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{items.name}</h2>
        <p>{items.recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddCart(items)}
            className="border-b-4 border-0 border-[#D99904] rounded-lg hover:bg-black transition-all text-[#D99904] font-bold btn"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
