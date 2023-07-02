import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequireAuth=()=>{
    const token = useSelector((state)=>state.auth.token);
    const location = useLocation()
    // console.log(token);
    return(
        token ? <Outlet/> : <Navigate to="/login" state={{from:location}} replace/>
    )
}