import { useWindowWidth } from "@react-hook/window-size";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export interface CardPageProps {
  children: ReactNode;
}

export const CardPage = ({ children }: CardPageProps) => {
  const windowWidth = useWindowWidth();

  return (
    <motion.div
      // custom={state.direction}
      variants={getVariants(windowWidth)}
      animate={"in"}
      exit={"out"}
      className="card-page absolute top-0 left-0 w-screen h-screen bg-white p-4 overflow-scroll"
    >
      <Link href="/experience">Experience</Link>
      <Link href="/skills">Skills</Link>
      {children}
    </motion.div>
  );
};

function getVariants(windowWidth: number): Variants {
  return {
    in: {
      x: [windowWidth, 0, 0],
      scale: [0.9, 0.9, 1],
      borderRadius: [16, 16, 0],
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
    out: {
      x: [null, 0, -windowWidth],
      scale: [null, 0.9, 0.9],
      borderRadius: [null, 16, 16],
      transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
    },
  };
}
