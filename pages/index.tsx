import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "../components/card/card";
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
import { CardStack } from "../components/card/card-stack";

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>http://garrett-thompson.dev</title>
        <meta
          name="description"
          content="Personal website for Garrett Thompson"
        />
      </Head>

      <Banner>GARRETT THOMPSON</Banner>

      <main className="full-height-fix w-screen px-6 py-2 lg:px-48 lg:py-12 flex flex-col bg-gradient-to-t from-sky-900 to-fuchsia-500 justify-center">
        <div className="flex flex-col h-[80%] lg:h-full">
          <Heading1 className="text-fuchsia-200/80">EXPERIENCE</Heading1>
          <div className="flex flex-col flex-1 mb-2 lg:mb-6 space-x-6">
            <CardStack className="flex-auto">
              <Card token="stripe_1" className="overflow-scroll">
                <StripeExperience />
              </Card>
              <Card token="bloomtech_1" className="overflow-scroll">
                <BloomTechExperience1 />
              </Card>
              <Card token="bloomtech_2" className="overflow-scroll">
                <BloomTechExperience2 />
              </Card>
              <Card token="semanticbits_1" className="overflow-scroll">
                <SemanticBitsExperience />
              </Card>
              <Card token="onovative_1" className="overflow-scroll">
                <OnovativeExperience1 />
              </Card>
              <Card token="onovative_2" className="overflow-scroll">
                <OnovativeExperience2 />
              </Card>
            </CardStack>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
