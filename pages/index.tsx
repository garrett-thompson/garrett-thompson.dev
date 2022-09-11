import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Heading1 } from "../components/typography";
import { StripeExperience } from "../partials/experience/stripe";

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

      <main className="flex flex-col w-full h-full items-center">
        <Banner>GARRETT THOMPSON</Banner>
        <section className="w-[50%]">
          <Heading1 className="text-sky-300 opacity-60">EXPERIENCE</Heading1>
          <StripeExperience />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
