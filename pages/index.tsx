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

const Home: NextPage = () => {
  const [cardIndex, setCardIndex] = useState(0);

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

      <main className="h-screen w-screen overflow-y-scroll bg-gradient-to-t from-sky-900 to-fuchsia-500 pt-12">
        <Heading1 className="text-sky-300 pl-[20%] opacity-60">
          EXPERIENCE
        </Heading1>
        <section className="flex flex-col pl-[20%] h-full overflow-x-scroll">
          <div className="flex space-x-6 flex-1 pb-12">
            <Draggable currentIndex={cardIndex} index={0}>
              <Card>
                <StripeExperience />
              </Card>
            </Draggable>
            <Draggable currentIndex={cardIndex} index={0}>
              <Card>
                <BloomTechExperience1 />
              </Card>
            </Draggable>
            <Draggable currentIndex={cardIndex} index={0}>
              <Card>
                <BloomTechExperience2 />
              </Card>
            </Draggable>
            <Draggable currentIndex={cardIndex} index={0}>
              <Card>
                <SemanticBitsExperience />
              </Card>
            </Draggable>
            <Draggable currentIndex={cardIndex} index={0}>
              <Card>
                <OnovativeExperience1 />
              </Card>
            </Draggable>
            <Draggable currentIndex={cardIndex} index={0}>
              <Card>
                <OnovativeExperience2 />
              </Card>
            </Draggable>
          </div>
        </section>
      </main>
    </div>
  );
};

interface DraggableProps {
  index: number;
  currentIndex: number;
  children: React.ReactNode;
}

const Draggable = ({ index, currentIndex, children }: DraggableProps) => (
  <motion.div className="h-full" drag={currentIndex == index ? "x" : false}>
    {children}
  </motion.div>
);

export default Home;
