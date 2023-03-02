import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="Guess and Win" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <h1 className='text-3xl font-bold'>Next Tailwind Project</h1>
  
    </>
  )
}
