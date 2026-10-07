import { useNavigate } from "react-router"
import useAuth from "../hooks/useAuth"

export default function Home(){

    const{signout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        signout()
        navigate('/signin')
    }

    return(
        <div className="min-h-screen">
            <div className="h-16 flex justify-end items-center p-4 border-2 mb=4 bg-indigo-600">
                <button className="bg-red-700 py-2 px-14 rounded-md text-white font-bold" onClick={handleLogout}>Sair</button>
                <h1 className="m-20 text-5xl text-center text-indigo-800 font-bold">Home</h1>
            </div>
        </div>
    )
}