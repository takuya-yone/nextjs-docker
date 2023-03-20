import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';
import { Breadcrumbs } from '@mui/material';

const IndexPage: NextPage = () => {
  // const { data, error } = useSWR('/api/database', axios);
  // console.log(data, error);

  const buttonClickHandler = () => {
    axios.get('/api/database').then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <Image
          src="/background.jpg"
          fill
          alt="Background Picture"
          className="bg-gray-700"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        ></Image>
      </div>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center text-center ">
        <>
          <div>
            <h1 className="text-5xl text-teal-200 py-4 ">
              HeaderあいうえおWhereas
            </h1>
          </div>
          <div className="text-teal-200">
            <Breadcrumbs>
              <Link href="/" className="font-custom  text-2xl text-teal-200">
                IndexPage
              </Link>
              <Link href="/" className="font-custom  text-2xl text-teal-200">
                Application Center
              </Link>
              <Link href="/" className="font-custom  text-2xl text-teal-200">
                Application List
              </Link>
              <Link href="/" className="font-custom  text-2xl text-teal-200">
                Company
              </Link>
            </Breadcrumbs>
          </div>
        </>
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold text-teal-200 ">
            Welcome to{' '}
            <a className="text-teal-200" href="https://nextjs.org">
              Next.js! - dev - dev
            </a>
          </h1>
          <br />

          <p className="mt-3 text-2xl text-teal-200">
            Get started by editing &emsp;
            <code className="rounded-md bg-gray-700 p-1.5 font-mono text-lg text-teal-200">
              pages/index.tsx
            </code>
          </p>
          <br />

          <p className="mt-3 text-2xl text-teal-200">
            IMAGE_TAG &emsp;
            <code className="rounded-md bg-gray-700 p-1.5 font-mono text-lg text-teal-200">
              {process.env.NEXT_PUBLIC_IMAGE_TAG}
            </code>
          </p>

          <br />

          <p className="mt-3 text-2xl text-teal-200">
            <button
              onClick={() => {
                buttonClickHandler();
              }}
            >
              button
            </button>
          </p>

          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full text-teal-200">
            <a
              href="https://nextjs.org/docs"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and its API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="flex h-10 text-teal-200  w-full items-center justify-center border-t">
          <p className=" text-2xl">© takuya-yone</p>
        </footer>
      </div>
    </>
  );
};

export default IndexPage;
