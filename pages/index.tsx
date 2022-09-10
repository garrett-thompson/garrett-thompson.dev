import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>http://garrett-thompson.dev</title>
        <meta
          name="description"
          content="Personal website for Garrett Thompson"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1
          className="lg:text-[104px] text-green-500 opacity-50 tracking-tight"
          style={{
            fontVariationSettings: "'wght' 900, 'slnt' -10",
          }}
        >
          GARRETT THOMPSON
        </h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
