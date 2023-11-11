import Logo from '@/app/assets/logo.png'
import Image from 'next/image'

export default function Account() {
    return (
        <div className='flex flex-col items-center pt-10 m-auto'>
            <Image src={Logo} alt='' height={130} />
            <div className='flex w-full bg-brown400 justify-center py-6 mt-30'>
                <span className='text-brown100 font-semibold text-2xl'>Histórico de pagamentos</span>
            </div>
            <div className='border border-zinc-50'>
                
            </div>
        </div>
    )
}