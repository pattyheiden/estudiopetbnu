import Logo from '@/app/assets/logo.png'
import Image from 'next/image'
export default function Checkout() {
    return (
        <div className='flex flex-col items-center pt-10 m-auto'>
            <Image src={Logo} alt='' height={130} />
            <div className='flex w-full bg-brown400 justify-center py-6 mt-30'>
                <span className='text-brown100 font-semibold text-2xl'>Finalização de Assinatura</span>
            </div>
            <div className='flex w-[1130px] mt-30 gap-4 flex-wrap'>
                    <span className='text-base text-brown400 font-semibold pt-2 pb-2'>Dados pessoais</span>
                    <input placeholder="Nome" className="flex w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="E-mail" className="flex w-[47%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="CPF" className="flex w-[25%] h-12 rounded-lg border-b border-brown400 pl-4" />                    
                    <input placeholder="Telefone" className="flex w-[25%] h-12 rounded-lg border-b border-brown400 pl-4" /> 

                    <span className='flex w-full text-base text-brown400 font-semibold pt-2 pb-2'>Endereço</span>  

                    <input placeholder="CEP" className="flex w-[25%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="Endereço" className="flex w-[62%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="Número" className="flex w-[10%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="Bairro" className="flex w-[32%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="Cidade" className="flex w-[32%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="Estado" className="flex w-[33%] h-12 rounded-lg border-b border-brown400 pl-4" /> 

                    <span className='flex w-full text-base text-brown400 font-semibold pt-2 pb-2'>Informações de pagamento</span>

                    <input placeholder="Nome do titular do cartão" className="flex w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="Número do cartão" className="flex w-[48%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="Data de validade" className="flex w-[29%] h-12 rounded-lg border-b border-brown400 pl-4" />
                    <input placeholder="cvv" className="flex w-[20%] h-12 rounded-lg border-b border-brown400 pl-4" />

                    <div className='flex w-full mt-30 mb-30 justify-end'>
                        <button className='bg-brown400 hover:bg-brown300 text-base font-bold text-brown100 px-10 py-3 rounded-lg'>Finalizar compra</button>
                    </div>
            </div>
        </div>
    )
}