import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Yomogi&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="font-custom">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
