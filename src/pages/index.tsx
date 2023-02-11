import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import axios from 'axios';
import { Header } from 'src/components/Header';
import { Divider, Typography, Breadcrumbs } from '@mui/material';

const Home: NextPage = () => {
  // const { data, error } = useSWR(
  //   'https://api.github.com/repos/vercel/swr',
  //   axios
  // );

  const buttonClickHandler = () => {
    axios.get('/api/database').then((res) => {
      // console.log(JSON.stringify(res, null, 2));
      console.log(res);
    });
  };

  // if (error) return <div>An error has occurred.</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <Image
          src="/background.jpg"
          fill
          // style={{ objectFit: 'contain' }}
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
          <div className="">
            <h1 className="text-5xl text-teal-200 py-4">Header</h1>
          </div>
          <div className="text-teal-200">
            <Breadcrumbs>
              <Typography className="text-teal-200">
                <a href="">Home</a>
              </Typography>
              <Typography className="text-teal-200">
                <a href="">Application Center</a>
              </Typography>
              <Typography className="text-teal-200">
                <a href="">Application List</a>
              </Typography>
              <Typography className="text-teal-200">
                <a href="">Company</a>
              </Typography>
            </Breadcrumbs>
          </div>
        </>
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-6xl font-bold text-teal-200 ">
            Welcome to{' '}
            <a className="text-teal-200" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>

          <p className="mt-3 text-2xl text-teal-200">
            Get started by editing{' '}
            <code className="rounded-md bg-gray-700 p-3 font-mono text-lg text-teal-200">
              pages/index.tsx
            </code>
          </p>

          <br />

          <p className="mt-3 text-2xl text-teal-200">
            IMAGE_TAG{' '}
            <code className="rounded-md bg-gray-700 p-3 font-mono text-lg text-teal-200">
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

        {/* <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer> */}
      </div>
    </>
  );
};

export default Home;
