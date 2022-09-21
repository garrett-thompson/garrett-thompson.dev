import React from "react";
import { motion } from "framer-motion";
import { moveBackward, moveForward } from "../../utils/move";
import { Card, CardProps } from "./card";
import classNames from "classnames";
import { CardStackControls } from "./controls";

const TOP_OFFSET = 15;
const LEFT_OFFSET = 120;
const SCALE_FACTOR = 0.12;

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
          const scale = 1 - index * SCALE_FACTOR;
          console.log({ scale });
          return (
            <motion.li
              className="absolute h-full"
              key={card.props.token}
              initial={false}
              animate={{
                top: index * TOP_OFFSET,
                left: index * LEFT_OFFSET,
                scale,
                width: "540px",
                zIndex: cards.length - index,
              }}
            >
              <Card
                {...card.props}
                className={classNames(card.props.className, "h-full")}
              />
            </motion.li>
          );
        })}
      </ul>
      <CardStackControls onNext={nextCard} onPrev={prevCard} />
    </div>
  );
};
