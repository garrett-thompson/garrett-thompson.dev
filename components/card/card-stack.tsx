import React from "react";
import { motion } from "framer-motion";
import { moveBackward, moveForward } from "../../utils/move";
import { Card, CardProps } from "./card";
import classNames from "classnames";
import { CardStackControls } from "./controls";

const TOP_OFFSET = 15;
const LEFT_OFFSET = 120;
const SCALE_FACTOR = 0.12;
const SHADOW_FACTOR = 9;

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
      <ul className="relative h-full my-8">
        {cards.map((card, index) => {
          const top = index * TOP_OFFSET;
          const left = index * (1 + SCALE_FACTOR) * LEFT_OFFSET;
          const scale = 1 - index * SCALE_FACTOR;
          const zIndex = cards.length - index;
          const opacity = 0 + (index * SHADOW_FACTOR) / 100;

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
                overlay={<Overlay opacity={opacity} />}
              />
            </motion.li>
          );
        })}
      </ul>
      <CardStackControls onNext={nextCard} onPrev={prevCard} />
    </div>
  );
};

interface OverlayProps {
  /**
   * Value between 0-1
   */
  opacity: number;
  className?: string;
}
const Overlay = ({ opacity, className }: OverlayProps) => (
  <motion.div
    className={classNames(
      "w-full h-full rounded-xl absolute left-0 top-0 z-0 bg-gray-900",
      className
    )}
    animate={{ opacity }}
    transition={{ duration: 0.4 }}
  ></motion.div>
);
