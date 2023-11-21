import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
  const [isAdmin, isPending] = useAdmin();
  const {user, loading} = useAuth();
  if(isPending || loading){
    return <progress className="progress w-56"></progress>
  }
  if(user && isAdmin){
    return children
  }
  return <Navigate to={'/'}></Navigate>
};

export default AdminRoute;