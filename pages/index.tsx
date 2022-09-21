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
      </Head>

      <Banner>GARRETT THOMPSON</Banner>

      <main className="h-screen w-screen px-32 flex flex-col bg-gradient-to-t from-sky-900 to-fuchsia-500 py-12">
        <Heading1 className="text-sky-300 opacity-70">EXPERIENCE</Heading1>
        <div className="overflow-x-scroll flex mb-6 space-x-6">
          <Card className="overflow-scroll">
            <StripeExperience />
          </Card>
          <Card className="overflow-scroll">
            <BloomTechExperience1 />
          </Card>
          <Card className="overflow-scroll">
            <BloomTechExperience2 />
          </Card>
          <Card className="overflow-scroll">
            <SemanticBitsExperience />
          </Card>
          <Card className="overflow-scroll">
            <OnovativeExperience1 />
          </Card>
          <Card className="overflow-scroll">
            <OnovativeExperience2 />
          </Card>
        </div>
        <ExperienceControls className="" />
      </main>
    </div>
  );
};

export default Home;
