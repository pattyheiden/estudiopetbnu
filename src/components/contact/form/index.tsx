'use client '
import { useState } from 'react';

export function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitMessage, setSubmitMessage] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Substitua 'seu-endpoint-do-formspree' pelo seu endpoint real do Formspree
        const endpoint = 'https://formspree.io/seu-endpoint-do-formspree';

        const formData = {
            name,
            email,
            subject,
            message,
        };

        try {
            const resposta = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (resposta.ok) {
                setSubmitMessage(true);
            } else {
                console.error('Erro ao enviar o formulário');
            }
        } catch (erro) {
            console.error('Erro ao enviar o formulário', erro);
        }
    };
    return (
        <div >
            {submitMessage ? (
                <p>Mensagem enviada com sucesso!</p>
            ) : (
                <form
                    action="" className="flex flex-col justify-center items-center gap-y-2 mt-30 lg:mt-0 pt-1">
                    <input 
                    type="text" value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Nome" className="flex w-[95%] h-10 rounded-lg border-b border-brown400 pl-4" />
                    <input 
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail" className="flex w-[95%] h-10 rounded-lg border-b border-brown400 pl-4" />
                    <input 
                    type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
                    placeholder="Assunto" className="flex w-[95%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <textarea 
                    value={message} onChange={(e) => setMessage(e.target.value)}
                    className="flex w-[95%] h-44 rounded-lg border-b border-brown400 p-4" placeholder="Mensagem" name="" id="" cols={30} rows={10}></textarea>
                    <button type="submit" className="flex w-[95%] rounded-lg text-white font-semibold py-1 bg-brown400 hover:bg-brown300 transition justify-center">
                        Enviar
                    </button>
                </form>
            )}
        </div>

    )
}