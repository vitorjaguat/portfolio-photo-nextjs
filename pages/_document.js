import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway&display=swap'
          rel='stylesheet'
        />
        <title>Mist Valley Photography</title>
        <meta name='description' content='Observe nature with me' />
        <meta property='og:title' content='Mist Valley Photography' />
        <meta
          property='og:image'
          content='https://cdn.pixabay.com/photo/2017/08/12/17/11/roe-deer-2634729__340.jpg'
        />
        <meta property='og:description' content='Observe nature with me' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
