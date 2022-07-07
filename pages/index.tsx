import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJS app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container p-6">Main</main>
    </div>
  );
};

export default Home;
