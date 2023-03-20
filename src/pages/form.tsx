import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';
import { Breadcrumbs } from '@mui/material';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

const FormPage: NextPage = () => {
  // const { data, error } = useSWR('/api/database', axios);
  // console.log(data, error);
  const isValid: SubmitHandler<LoginForm> = (data: LoginForm) => {
    console.log(data);
  };
  const isInValid: SubmitErrorHandler<LoginForm> = (errors: any) => {
    console.log(errors);
    console.log('Fail Login');
  };
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const buttonClickHandler = () => {
    axios.get('/api/database').then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        {/* <Image
          src="/background.jpg"
          fill
          alt="Background Picture"
          className="bg-gray-700"
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        ></Image> */}
      </div>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center text-center ">
        <>
          <form
            onSubmit={handleSubmit(isValid, isInValid)}
            className="flex w-full  flex-col items-center space-y-5 "
          >
            <div className="flex w-full flex-col space-y-2">
              <label className="text-sm text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                {...register('email', { required: 'emailを入力してください' })}
                className="rounded-md border px-3 py-2 focus:border-2 focus:border-teal-500 focus:outline-none"
                type="email"
                name="email"
              />
              {errors.email && (
                <div
                  className="flex rounded-lg bg-red-100 p-4 dark:bg-red-200"
                  role="alert"
                >
                  <div className="mt-1 ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                    {errors.email.message}
                  </div>
                </div>
              )}
            </div>
            <div className="flex w-full flex-col space-y-2">
              <label className="text-sm text-gray-800" htmlFor="password">
                Password
              </label>
              <input
                {...register('password', {
                  required: 'passwordを入力してください',
                  minLength: { value: 8, message: '8文字以上入力してください' },
                })}
                className="rounded-md border px-3 py-2 focus:border-2 focus:border-teal-500 focus:outline-none"
                type="password"
                name="password"
              />
              {errors.password && (
                <div
                  className="flex rounded-lg bg-red-100 p-4 dark:bg-red-200"
                  role="alert"
                >
                  <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                    {errors.password.message}
                  </div>
                </div>
              )}
            </div>
            <button
              className="w-full rounded-lg bg-teal-500 px-3 py-2 text-lg font-semibold text-white focus:outline-none"
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </>
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <p>aaa</p>
        </main>

        <footer className="flex h-10 text-teal-200  w-full items-center justify-center border-t">
          <p className=" text-2xl">© takuya-yone</p>
        </footer>
      </div>
    </>
  );
};

export default FormPage;
