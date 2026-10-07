import { Link, useNavigate } from "react-router"
import useAuth from "../hooks/useAuth"
import { useState } from "react"

export default function Signin(){

    const {signin} = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        if(name === 'email') setEmail(value)
        if(name === 'senha') setSenha(value)
    }

    const handleLogin = (e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!email || !senha){
            setError('Preencha todos os campos.')
            return
        }

        const res = signin(email, senha)
        if(res){
            setError(res)
            setEmail('')
            setSenha('')
            return
        }
        navigate('/home')
    }


    return(
        <div className="min-h-screen flex">
            <div className="bg-indigo-500 w-2/4 flex flex-col justify-center items-center">
                <img className="w-36" src="icons.svg" alt="Logo"  />
                <p className="m-2 text-3xl text-white">Venha Codar com React + Vite</p>
            </div>
            <div className="w-2/4 border-2 min-h-screen flex flex-col justify-center items-center">
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-md" onSubmit={handleLogin}>
                    <h1 className="text-5xl text-center text-indigo-800 font-bold m-6">Login</h1>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="email"
                           placeholder="Digite seu e-mail" name="email" value={email} onChange={handleChange} />
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="password"
                           placeholder="Digite sua senha" name="senha" value={senha} onChange={handleChange} />
                    <span className="block m-3 text-red-500 text-center">{error}</span>
                    <button className="block m-auto bg-indigo-600 py-2 px-14 rounded-md text-white font-bold"
                           type="submit">Entrar</button>

                    <div>
                        <span className="inline-block mt-4 me-3">Não tem uma conta?</span>
                        <Link className="text-blue-600" to={'/signup'} >Criar uma conta</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}