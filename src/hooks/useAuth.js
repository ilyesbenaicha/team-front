
import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux';

function useAuth() {
    const loginStatus = useSelector((state)=>state.auth.loginStatus)
    const token = localStorage.getItem("token");
    const user = token && jwtDecode(token);
    let isSuperadmin = false 
    let isAdmin = false
    let status = "Employer"
    if (loginStatus === "success"){ 
        if (user.role ==="SuperAdmin") status = "SuperAdmin"
        if (user.role ==="Admin") status ="Admin"
        return {isSuperadmin,isAdmin,status}
    }
  return {email:'',role:[], isSuperadmin,isAdmin,status}
}

export default useAuth