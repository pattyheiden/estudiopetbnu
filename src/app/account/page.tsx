import Logo from '@/app/assets/logo.png'
import { Accordion } from '@/components/accordion'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Minha conta",
    description: "Impulsione seu Instagram com conteúdo de qualidade e expanda seu negócio",
    keywords: "instagram, impulsione seu instagram, criação de conteudo para instagram, criacao de conteudo para instagram, posts para instagram, storys para instagram, midia social para instagram e facebook, social midia, conteudo para petshop, conteúdo para petshop, pet shop, petshop",
    openGraph: {
      images: "https://estudiopetbnu.com.br/og.jpg",
      title: "Estúdio Pet Bnu",
      type: "website",
      description: "Impulsione seu Instagram com conteúdo de qualidade e expanda seu negócio",
      url: "https://estudiopetbnu.com.br/",
    },
    
  }

export default function Account() {
    return (
        <div className='flex flex-col items-center pt-10 m-auto'>
            <Image src={Logo} alt='' height={130} />
            <div className='flex w-full bg-brown400 justify-center py-6 mt-30'>
                <span className='text-brown100 font-semibold text-2xl'>Histórico de pagamentos</span>
            </div>
            <div className='flex flex-col items-center justify-center text-center mt-30 py-3 rounded-lg w-[1000px] bg-brown200 text-brown100'>
                <span className='text-xl font-semibold'>** Aviso **</span>
                <p>Caso haja pendência no pagamento o plano será cancelado e <br />
                    deverá ser renovado para continuar utilizando dos serviços oferecidos.
                </p>
            </div>
            <div className='flex flex-col mt-5 mb-30'>
                <Accordion title="Janeiro" status='PAGO'/>
                <Accordion title="Fevereiro" status='PAGO' />
                <Accordion title="Março" status='PAGO' />
                <Accordion title="Abril" status='PAGO' />
                <Accordion title="Maio" status='PAGO' />
                <Accordion title="Junho" status='PAGO' />
                <Accordion title="Julho" status='PAGO' />
                <Accordion title="Agosto" status='PAGO' />
                <Accordion title="Setembro" status='PAGO' />
                <Accordion title="Outubro" status='PAGO' />
                <Accordion title="Novembro" status='PAGO' />
                <Accordion title="Dezembro" status='PENDENTE' />
            </div>
        </div>
    )
}