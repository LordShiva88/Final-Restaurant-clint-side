import Swal from "sweetalert2";
import HeadingTitle from "../../../../Components/HeadingTitle/HeadingTitle";
import useCart from "../../../../Hooks/useCart";
import { AiOutlineDelete } from "react-icons/ai";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <div className="">
        <HeadingTitle
          mainTitle={"WANNA ADD MORE?"}
          subTitle={"---My Cart---"}
        ></HeadingTitle>
        <div className="px-8">
          <div className="flex justify-evenly">
            <h2 className="text-3xl font-semibold">Items: {cart.length}</h2>
            <h2 className="text-3xl font-semibold">
              Total Price: {totalPrice} $
            </h2>
            <button className="btn btn-outline">Buy</button>
          </div>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2 className="font-bold">{item.name}</h2>
                  </td>
                  <td>$ {item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost"
                    >
                      <AiOutlineDelete className="text-2xl text-red-500"></AiOutlineDelete>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
