import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AiOutlineDelete } from "react-icons/ai";
import HeadingTitle from "../../../../Components/HeadingTitle/HeadingTitle";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const updateRole = (id) => {
    axiosSecure.patch(`/updateUser/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Updated User to Admin Successful");
        refetch();
      }
    });
  };

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "This User has been deleted.",
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
          mainTitle={"All Users"}
          subTitle={"---My Cart---"}
        ></HeadingTitle>
        <div className="px-8">
          <div className="flex justify-evenly">
            <h2 className="text-3xl font-semibold">Items: {users.length}</h2>
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
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h2 className="font-bold">{user.name}</h2>
                    <h2 className="font-bold">{user.email}</h2>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <p className="text-green-700 font-bold">Admin</p>
                    ) : (
                      <button
                        onClick={() => updateRole(user._id)}
                        className="btn "
                      >
                        <FaEdit className="text-xl"></FaEdit>
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
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

export default Users;
