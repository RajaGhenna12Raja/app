import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Jobhikar-Quiz' : 'Jobhikar-Quiz'}</title>
        <meta name='description' content='Guess and Win' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 justify-between shadow-md items-center px-4'>
            <Link className='text-lg font-bold' href='/'>
              Home
            </Link>
            <div className=''>
              <Link className='p-2 text-lg font-bold' href='/cart'>
                Cart
              </Link>
              <Link className='p-2 text-lg font-bold' href='/login'>
                Login
              </Link>
              {/* <Link href='/cart'>Cart</Link>
           <Link href='/cart'>Cart</Link> */}
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex justify-center items-center shadow-inner h-10'>Copyright©2023 Jobhikar-Quiz</footer>
      </div>
    </>
  );
}
