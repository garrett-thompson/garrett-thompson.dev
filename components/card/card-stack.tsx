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
  const [cards, setCards] = React.useState(children);
  const nextCard = () => {
    setCards(moveForward(cards));
  };
  const prevCard = () => {
    setCards(moveBackward(cards));
  };

  return (
    <div className={classNames("flex flex-col justify-between", className)}>
      <ul className="relative h-full my-4 lg:my-8">
        {cards.map((card, index) => {
          const top = index * TOP_OFFSET;
          const left = index * (1 + SCALE_FACTOR) * LEFT_OFFSET;
          const scale = 1 - index * SCALE_FACTOR;
          const zIndex = cards.length - index;
          const brightness = 1 - (index * SHADOW_FACTOR) / 100;

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
              transition={{ duration: 0.5 }}
            >
              <Card
                {...card.props}
                className={classNames(card.props.className, "h-full")}
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
