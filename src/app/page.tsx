import Logo from '@/app/assets/logo.png'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Plans } from '@/components/plans'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col items-center pt-10 m-auto'>
      <div className='grid grid-cols-3 w-[1000px] items-center justify-center'>

        <div className='col-span-1 w-full' />

        <div className='flex col-span-1 items-center justify-center' >
          <Image src={Logo} alt='' height={130} />
        </div>

        <div className='col-span-1 ml-auto'>
          <Link href="/signin" target='_blank'>
            <button className='bg-brown400 hover:bg-brown300 rounded-lg px-3 py-2 text-white'>
              Minha conta
            </button>
          </Link>
        </div>

      </div>
      <div className='flex flex-col pt-30 text-center'>
        <span className='font-bold text-3xl'>
          Impulsione seu Instagram <br /> com conteúdo de qualidade
        </span>
        <span className='font-semibold text-base pt-3'>
          Descubra como nosso pacote de conteúdo exclusivo <br /> pode transformar seu perfil no Instagram
        </span>
      </div>
      <div className='flex flex-col pt-30 text-center'>
        <span className='font-medium text-base'>
          O Instagram se tornou uma das principais plataformas de mídia social do mundo. Com mais de 1 bilhão de usuários ativos <br />
          mensais, é o lugar ideal para se conectar com sua audiência, promover seu negócio e contar sua história. Se você deseja se <br />
          destacar no Instagram, o conteúdo de qualidade é essencial.
        </span>
      </div>
      <Plans />
      <div className='text-center pt-30 w-[1000px] '>
        <span className='font-medium text-base'>Transforme sua presença no Instagram e comece a conquistar seguidores reais e engajados. Escolha um dos nossos pacotes de conteúdo e dê o primeiro passo para o sucesso.</span>
      </div>
      <div className='flex flex-col pt-30 text-center'>
        <span className='font-bold text-3xl'>
          Não encontrou o que procurava?
        </span>
        <span className='pt-3 font-medium text-base'>Fale com a gente. Faremos um plano personalizado que atenda às suas exigências de negócio.</span>
      </div >
      <Contact />
      <Footer />

    </div>
  )
}
