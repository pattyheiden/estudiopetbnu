import Logo from '@/app/assets/logo.png'
import { Footer } from '@/components/footer'
import { Consent } from '@/components/input/Consent'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Finalizar compra',
  }

export default function Checkout() {
    return (
        <div className='flex flex-col items-center pt-10 m-auto'>
            <Image src={Logo} alt='' height={130} />
            <div className='flex w-full bg-brown400 justify-center py-6 mt-30'>
                <span className='text-brown100 font-semibold text-2xl'>Finalização de Assinatura</span>
            </div>
            <div className='flex lg:w-[1130px] mt-30 gap-4 flex-wrap mx-4'>
                <span className='flex w-full text-base text-brown400 font-semibold pt-2 pb-2'>Assinatura</span>
                <span className='text-base bg-brown300 text-brown100 font-extrabold px-2 py-2 rounded-lg'>PLANO BASIC (R$210,00/mês)</span>
                <span className='flex w-full text-base text-brown400 font-semibold pt-2 pb-2'>Dados pessoais</span>
                <input placeholder="Nome" className="flex w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="E-mail" className="flex lg:w-[47%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="CPF" className="flex lg:w-[25%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="Telefone" className="flex lg:w-[25%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />

                <span className='flex w-full text-base text-brown400 font-semibold pt-2 pb-2'>Endereço</span>

                <input placeholder="CEP" className="flex lg:w-[25%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="Endereço" className="flex lg:w-[62%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="Número" className="flex lg:w-[10%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="Bairro" className="flex lg:w-[32%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="Cidade" className="flex lg:w-[32%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="Estado" className="flex lg:w-[33%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />

                <span className='flex w-full text-base text-brown400 font-semibold pt-2 pb-2'>Informações de pagamento</span>

                <input placeholder="Nome do titular do cartão" className="flex lg:w-[100% ] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="Número do cartão" className="flex lg:w-[48%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="Data de validade" className="flex lg:w-[29%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />
                <input placeholder="CVV" className="flex lg:w-[20%] w-[100%] h-12 rounded-lg border-b border-brown400 pl-4" />

                <div>
                    <Consent />
                </div>

                <div className='flex w-full mt-30 mb-30 justify-end'>
                    <button className='bg-brown400 hover:bg-brown300 text-base font-bold text-brown100 px-10 py-3 rounded-lg lg:w-auto w-full'>Finalizar compra</button>
                </div>                
            </div>
            <Footer />
        </div>
    )
}