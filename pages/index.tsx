import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/card";
import { Banner, Heading1 } from "../components/typography";
import {
  BloomTechExperience1,
  BloomTechExperience2,
} from "../layouts/experience/bloomtech";
import {
  OnovativeExperience1,
  OnovativeExperience2,
} from "../layouts/experience/onovative";
import { SemanticBitsExperience } from "../layouts/experience/semantic-bits";
import { StripeExperience } from "../layouts/experience/stripe";
import { ExperienceControls } from "../components/experience-controls";

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

      <main className="h-screen w-screen overflow-y-scroll bg-gradient-to-t from-sky-900 to-fuchsia-500 py-12">
        <Heading1 className="text-sky-300 pl-[20%] opacity-70">
          EXPERIENCE
        </Heading1>
        <section className="flex flex-col pl-[20%] h-full overflow-x-scroll">
          <div className="flex space-x-6 flex-1 pb-8">
            <Card>
              <StripeExperience />
            </Card>
            <Card>
              <BloomTechExperience1 />
            </Card>
            <Card>
              <BloomTechExperience2 />
            </Card>
            <Card>
              <SemanticBitsExperience />
            </Card>
            <Card>
              <OnovativeExperience1 />
            </Card>
            <Card>
              <OnovativeExperience2 />
            </Card>
          </div>
        </section>
        <ExperienceControls className="pl-[20%]" />
      </main>
    </div>
  );
};

export default Home;
