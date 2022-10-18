import { useWindowWidth } from "@react-hook/window-size";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ReactNode } from "react";
import {
  NavigationAction,
  NavigationDirection,
  NavigationState,
} from "../../hooks/use-page-navigation";
import { NavigationControls } from "../navigation-controls/navigation-controls";

interface CardPageProps extends NavigationState {
  pageNumber: number;
  children?: ReactNode;
  onNext: React.Dispatch<NavigationAction>;
  onPrev: React.Dispatch<NavigationAction>;
}

export const CardPage = ({
  currentPageNumber,
  prevPageNumber,
  pageNumber,
  children,
  onNext,
  onPrev,
}: CardPageProps) => {
  const windowWidth = useWindowWidth();
  const navigationDirection: NavigationDirection | null =
    currentPageNumber > prevPageNumber
      ? NavigationDirection.forward
      : NavigationDirection.backward;

  return (
    <AnimatePresence custom={navigationDirection} initial={false}>
      {currentPageNumber === pageNumber && (
        <motion.div
          custom={navigationDirection}
          variants={getVariants(windowWidth)}
          animate={"active"}
          exit={"exit"}
          className="card-page absolute top-0 left-0 w-screen h-screen bg-white p-4 overflow-scroll"
        >
          <NavigationControls onNext={onNext} onPrev={onPrev} />
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function getVariants(windowWidth: number): Variants {
  return {
    active: (direction: NavigationDirection) => {
      const startingX = direction === "forward" ? windowWidth : -windowWidth;

      return {
        x: [startingX, 0, 0],
        scale: [0.9, 0.9, 1],
        borderRadius: [16, 16, 0],
        transition: {
          type: "tween",
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.4,
        },
      };
    },
    exit: (direction: NavigationDirection) => {
      const endingX = direction === "forward" ? -windowWidth : windowWidth;

      return {
        x: [null, 0, endingX],
        scale: [null, 0.9, 0.9],
        borderRadius: [null, 16, 16],
        transition: { type: "tween", duration: 0.4, ease: "easeInOut" },
      };
    },
  };
}
