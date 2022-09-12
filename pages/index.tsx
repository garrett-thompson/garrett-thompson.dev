import type { NextPage } from "next";
import Head from "next/head";
import { Banner, Heading1 } from "../components/typography";
import { BloomTechExperience } from "../layouts/experience/bloomtech";
import { SemanticBitsExperience } from "../layouts/experience/semantic-bits";
import { StripeExperience } from "../layouts/experience/stripe";

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

      <Banner>GARRETT THOMPSON</Banner>

      <main className="flex flex-col items-center h-screen w-screen overflow-scroll bg-gradient-to-t from-sky-900 to-fuchsia-500">
        <section className="w-[60%] mt-12">
          <Heading1 className="text-sky-300 opacity-60">EXPERIENCE</Heading1>
          <StripeExperience />
          <BloomTechExperience />
          <SemanticBitsExperience />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
