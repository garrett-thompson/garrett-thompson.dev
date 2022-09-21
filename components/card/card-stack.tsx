import React from "react";
import { motion } from "framer-motion";
import { moveBackward, moveForward } from "../../utils/move";
import { Card, CardProps } from "./card";
import classNames from "classnames";
import { CardStackControls } from "./controls";

// Increasing this makes cards down the stack further from the top
const TOP_OFFSET = 20;
// Increasing this makes cards down the stack further to the right
const LEFT_OFFSET = 150;
// Increasing this makes cards down the stack smaller
const SCALE_FACTOR = 0.12;
// Increasing this makes cards down the stack more shadowed
const SHADOW_FACTOR = 7;

interface CardStackProps {
  children: React.ReactElement<CardProps>[];
  className?: string;
}
export const CardStack = ({ children, className }: CardStackProps) => {
  const [cardPosition, setCardPosition] = React.useState(0);
  const nextCard = () => {
    setCardPosition((state) =>
      state < children.length - 1 ? state + 1 : state
    );
  };
  const prevCard = () => {
    setCardPosition((state) => (state > 0 ? state - 1 : state));
  };

  return (
    <div className={classNames("flex flex-col justify-between", className)}>
      <ul className="relative h-full my-4 lg:my-8">
        {children.map((card, index) => {
          const position = index - cardPosition;
          const top = position * TOP_OFFSET;
          let left: string | number =
            position * (1 + SCALE_FACTOR) * LEFT_OFFSET;
          if (position < 0) left = left * 10;
          const scale = 1 - position * SCALE_FACTOR;
          const zIndex = children.length - position;
          const brightness = 1 - (position * SHADOW_FACTOR) / 100;

          return (
            <motion.li
              className="absolute h-full"
              key={card.props.token}
              initial={false}
              animate={{
                top,
                left,
                scale,
                zIndex,
              }}
              transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
            >
              <Card
                {...card.props}
                className={classNames(card.props.className, "h-full")}
                initial={false}
                animate={{
                  filter: `brightness(${brightness})`,
                }}
              />
            </motion.li>
          );
        })}
      </ul>
      <CardStackControls onNext={nextCard} onPrev={prevCard} />
    </div>
  );
};
