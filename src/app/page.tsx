/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Logo from '@/app/assets/logo.png'
import { MyContext } from '@/app/Context'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Plans } from '@/components/plans'
import { IoLogOutOutline, IoPersonOutline } from "react-icons/io5"
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

export default function Home() {
  const { email, name, logoff } = useContext(MyContext)
  return (
    <div>
      <div className='flex lg:h-6 h-8 w-full bg-brown400'>
      <div className='flex w-[1000px] mx-auto lg:justify-end justify-center'>
      {
              email === '' ?
                <Link href="/signin">
                  <button className='text-white'>
                    Acessar conta
                  </button>
                </Link>
                :
                <div className='flex items-center gap-2 text-base font-medium  divide-x divide-brown200 text-white'>
                  {
                    `Olá, ${name?.split(" ")[0]}`
                  }
                  <Link href="/account">
                    <IoPersonOutline className='h-5 w-5 text-white hover:text-brown100 transition' />
                  </Link>
                  <button onClick={() => logoff()}>
                    <IoLogOutOutline className='h-5 w-5 ml-2 text-white hover:text-brown100 transition' />
                  </button>

                </div>
            }
      </div>
      </div>
      <div className='flex flex-col items-center pt-10 m-auto mx-4 '>

        <div className='lg:grid lg:grid-cols-3 lg:w-[1000px] w-full items-center justify-center'>

          <div className='lg:flex lg:col-span-1 lg:w-full hidden ' />

          <div className='flex col-span-1 items-center justify-center' >
            <Image src={Logo} alt='' height={130} />
          </div>

          

        </div>
        <div className='flex flex-col pt-30 text-center'>
          <span className='font-bold text-3xl'>
            Impulsione seu Instagram <br className='lg:flex hidden' /> com conteúdo de qualidade
          </span>
          <span className='font-semibold text-base pt-3'>
            Descubra como nosso pacote de conteúdo exclusivo <br className='lg:flex hidden' /> pode transformar seu perfil no Instagram
          </span>
        </div>
        <div className='flex flex-col pt-30 text-center'>
          <span className='font-medium text-base'>
            O Instagram se tornou uma das principais plataformas de mídia social do mundo. Com mais de 1 bilhão de usuários ativos <br className='lg:flex hidden' />
            mensais, é o lugar ideal para se conectar com sua audiência, promover seu negócio e contar sua história. Se você deseja se <br className='lg:flex hidden' />
            destacar no Instagram, o conteúdo de qualidade é essencial.
          </span>
        </div>
        <Plans />
        <div className='text-center pt-30 lg:w-[1000px]'>
          <span className='font-medium text-base'>Transforme sua presença no Instagram e comece a conquistar seguidores reais e engajados. Escolha um dos nossos pacotes de conteúdo e dê o primeiro passo para o sucesso.</span>
        </div>
        <div className='flex flex-col pt-30 text-center'>
          <span className='font-bold text-3xl'>
            Não encontrou o que procurava?
          </span>
          <span className='pt-3 font-medium text-base'>Fale com a gente. Faremos um plano personalizado que atenda às suas exigências de negócio.</span>
        </div >
        <Contact />


      </div>
      <Footer />
    </div>
  )
}
