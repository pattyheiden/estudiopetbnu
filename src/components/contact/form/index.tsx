'use client '
import { useContext, useState } from 'react';
import { api } from "@/services/api";
import { MyContext } from '@/app/Context'
import { toast } from 'react-toastify';

export function Form() {
    const { changeToken } = useContext(MyContext)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [desc, setDesc] = useState('');
    const [submitMessage, setSubmitMessage] = useState(false);

    const handleSubmit  = (e: any) => {
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
                .post('/contato', {
                    nome,
                    email,
                    desc
                })
                .then((e) => {
                    toast.success("Mensagem enviada com sucesso!", styleToast as any)
                })
                .catch((e) => {
                    toast.error(e.response.data.message, styleToast as any)
                })
        } catch (error) { }
    }
    return (
        <div >
            {submitMessage ? (
                <p>Mensagem enviada com sucesso!</p>
            ) : (
                <form
                onSubmit={(e) => {
                    handleSubmit(e)
                  }}
                    action="" className="flex flex-col justify-center items-center gap-y-3 mt-30 lg:mt-0 pt-1">
                    <input 
                    type="text" value={nome} onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome" className="flex w-[95%] h-10 rounded-lg border-b border-brown400 pl-4" />
                    <input 
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail" className="flex w-[95%] h-10 rounded-lg border-b border-brown400 pl-4" />
                    <textarea 
                    value={desc} onChange={(e) => setDesc(e.target.value)}
                    className="flex w-[95%] h-56 rounded-lg border-b border-brown400 p-4" placeholder="Mensagem" name="" id="" cols={30} rows={14}></textarea>
                    <button type="submit" className="flex w-[95%] rounded-lg text-white font-semibold py-1 bg-brown400 hover:bg-brown300 transition justify-center">
                        Enviar
                    </button>
                </form>
            )}
        </div>

    )
}