import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { MyContextProvider } from './Context'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'

const montserrat = Montserrat({
  weight: ['300', '400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
})

export const metadata: Metadata = {
  title: {
    default: "Estúdio Pet Bnu", template: "%s | Estúdio Pet Bnu",
  },
  keywords: "instagram, impulsione seu instagram, criação de conteudo para instagram, criacao de conteudo para instagram, posts para instagram, storys para instagram, midia social para instagram e facebook, social midia, conteudo para petshop, conteúdo para petshop, pet shop, petshop",
  description: "Impulsione seu Instagram com conteúdo de qualidade e expanda seu negócio",
  openGraph: {
    images: "https://estudiopetbnu.com.br/og.jpg",
    title: "Estúdio Pet Bnu",
    type: "website",
    description: "Impulsione seu Instagram com conteúdo de qualidade e expanda seu negócio",
    url: "https://estudiopetbnu.com.br/",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-brown100 text-brown400'>
      <Head>
        <meta name="google-site-verification" content="Te8rMGb-LeHnt2RxhGc00rVfzC17dAXG8Bj7MHUfy3Y" />
      </Head>
      <body className={montserrat.className}>
        <MyContextProvider>
          <>
            <div>
              <ToastContainer />
              {children}
            </div>
          </>
        </MyContextProvider>
      </body>
    </html>
  )
}
