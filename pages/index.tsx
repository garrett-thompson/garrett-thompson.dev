import type { NextPage } from "next";
import Head from "next/head";
import { Heading1 } from "../components/typography";
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
        <div
          className="lg:text-[104px] text-green-500 opacity-50 tracking-tight"
          style={{
            fontVariationSettings: "'wght' 900, 'slnt' -10",
          }}
        >
          GARRETT THOMPSON
        </div>
        <section>
          <Heading1>Experience</Heading1>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
