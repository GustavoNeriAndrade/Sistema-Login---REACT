import { useState } from "react"
import useAuth from "../hooks/useAuth"
import { Link, useNavigate } from "react-router"
import logo from '../assets/vite.svg'

export default function Signup(){

    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')


    const {signup} = useAuth()
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const{name, value} = e.target
        if(name == 'email') setEmail(value)
        if (name == 'emailConfirm') setEmailConfirm(value)
        if (name == 'senha') setSenha(value)
    }

    const handleSignup = (e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!email || !emailConfirm || !senha){
            setError('Preencha todos os campos')
            return
        }else if (email !== emailConfirm) {
            setError('Os e- mails não são iguais ')
        }

        const res = signup(email, senha)

        if (res) {
            setError(res)
            return
        }

        alert('Conta criada com sucesso!')
        navigate('  /signin')
    }



    return(
        <div className="min-h-screen flex">
            <div className="bg-indigo-500 w-2/4 flex flex-col justify-center items-center text-white">
                <img src={logo} alt="Logo vite" />
                <p className="m-2 text-3x1">Venha codar com React + Vite</p>
            </div>
            <div className="w-2/4 border-2 min-h-screen flex flex-col justify-center items-center">
                <form className="m-auto w-96 p-6 border-2 border-gray-400 rounded-md" onSubmit={handleSignup}>
                    <h1 className="text-5x1 text-center text-indigo-800 font-bold m-6">Signup</h1>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="email" placeholder="Digite o seu e-mail" name="email" value={email} onChange={handleChange}/>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="email" placeholder="Confirme o seu e-mail" name="emailConfirm" value={emailConfirm} onChange={handleChange}/>
                    <input className="w-full p-2 mb-2 border-2 border-gray-400 rounded-md" type="password" placeholder="Digite a sua senha" name="senha" value={senha} onChange={handleChange}/>
                    <span className="block m-3 text-red-500 text-center">{error}</span>
                    <button className="block m-auto bg-indigo-600 py-2 px-14 rounded-md text-white font-bold" type="submit">Cadastrar</button>
                    <div className="text-center">
                        <span>Já tem uma conta?</span>
                        <Link className="text-blue-600" to={'/signin'}>Ir para o login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}