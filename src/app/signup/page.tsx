'use client'
import Image from "next/image"
import avatar from "@/app/assets/avatar1.png"
import { MyContext } from '@/app/Context'
// import { LuEye, LuEyeOff } from "react-icons/lu";
import { useContext, useState } from "react";
import { toast } from 'react-toastify'
import Link from "next/link";
import { api } from "@/services/api";

export default function Signup() {
    const { changeToken } = useContext(MyContext)
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const register = (e: any) => {
        e.preventDefault()

        const styleToast = {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        }

        try {
            api
                .post('/user', {
                    name,
                    password: senha,
                    email,
                })
                .then((e) => {
                    changeToken(e?.data?.access_token)
                    window.location.href = ('/')
                })
                .catch((e) => {
                    toast.error(e.response.data.message, styleToast as any)
                })
        } catch (error) { }
    }

    return (
        <form
            onSubmit={(e) => {
                register(e)
            }}
        >
            <div className="flex flex-col lg:w-[1000px] min-h-screen justify-center items-center m-auto">
                <Image src={avatar} alt="" width={130} className="flex -mb-20 z-20 border-t-4 border-brown200/30 rounded-full py-4 justify-end" />
                <div className="flex flex-col w-364 mx-4 pl-4 pr-4 justify-center items-center bg-brown200/30 shadow-xl shadow-brown200 drop-shadow-2xl lg:w-96 gap-2 pt-20 pb-10 rounded-lg">
                    <input
                        name="name"
                        id="name"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex lg:w-[85%] w-full h-12 rounded-lg border-b border-brown400 pl-4" />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                        className="flex lg:w-[85%] w-full h-12 rounded-lg border-b border-brown400 pl-4" />

                    <input
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        className="flex lg:w-[85%] w-full h-12 rounded-lg border-b border-brown400 pl-4" />

                    {/* {showPassword ? (
                    <LuEyeOff onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }} />
                ) : (
                    <LuEye onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }} />
                )} */}
                    <div className='flex w-full mt-3 justify-evenly'>
                        <button type="submit"
                            className='lg:w-[85%] w-full bg-brown400 hover:bg-brown300 text-base font-bold text-brown100 px-10 py-3 rounded-lg'>
                            Cadastrar
                        </button>
                    </div>
                    <div className="mt-2 text-center">
                        <span>
                            Já possui uma conta? <br />
                            <strong className="hover:text-brown300"><Link href="/signin">Entrar</Link></strong>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}