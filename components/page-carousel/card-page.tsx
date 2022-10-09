import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationDirection,
  NavigationState,
} from "../../hooks/use-page-navigation";

interface CardPageProps extends NavigationState {
  pageNumber: number;
  windowWidth: number;
}

export const CardPage = ({
  currentPageNumber,
  prevPageNumber,
  pageNumber,
  windowWidth,
}: CardPageProps) => {
  const navigationDirection: NavigationDirection | null =
    currentPageNumber > prevPageNumber
      ? NavigationDirection.forward
      : NavigationDirection.backward;

  return (
    <AnimatePresence custom={navigationDirection}>
      {currentPageNumber === pageNumber && (
        <motion.div
          custom={navigationDirection}
          variants={getVariants(windowWidth)}
          animate={"active"}
          exit={"exit"}
          className="absolute top-0 left-0 w-screen h-screen bg-white p-4"
        >
          Page {pageNumber}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function getVariants(windowWidth: number) {
  return {
    active: (direction: NavigationDirection) => {
      const startingX = direction === "forward" ? windowWidth : -windowWidth;

      return {
        x: [startingX, 0, 0],
        scale: [0.9, 0.9, 1],
        borderRadius: [16, 16, 0],
        transition: {
          type: "tween",
          duration: 0.9,
          ease: "easeInOut",
          delay: 0.6,
        },
      };
    },
    exit: (direction: NavigationDirection) => {
      const endingX = direction === "forward" ? -windowWidth : windowWidth;

      return {
        x: [0, 0, endingX],
        scale: [1, 0.9, 0.9],
        borderRadius: [0, 16, 16],
        transition: { type: "tween", duration: 0.9, ease: "easeInOut" },
      };
    },
  };
}
