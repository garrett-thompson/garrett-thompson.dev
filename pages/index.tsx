import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "../components/card";
import { Banner, Heading1 } from "../components/typography";
import { BloomTechExperience } from "../layouts/experience/bloomtech";
import { OnovativeExperience } from "../layouts/experience/onovative";
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

      <main className="h-screen w-screen overflow-scroll bg-gradient-to-t from-sky-900 to-fuchsia-500">
        <section className="ml-[20%] w-[80%] mt-12">
          <Heading1 className="text-sky-300 opacity-60">EXPERIENCE</Heading1>
          <div className="flex space-x-6 overflow-x-scroll">
            <Card>
              <StripeExperience />
            </Card>
            <Card>
              <BloomTechExperience />
            </Card>
            <Card>
              <SemanticBitsExperience />
            </Card>
            <Card>
              <OnovativeExperience />
            </Card>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
