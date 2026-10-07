import { useContext } from "react"
import { AuthContext } from "../Context/auth"


const useAuth =()=>{
    return useContext(AuthContext)
}

export default useAuth