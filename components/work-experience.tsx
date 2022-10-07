import React from "react";
import { motion } from "framer-motion";
import { Card } from "./card/card";
import classNames from "classnames";
import { CardStackControls } from "./card/controls";
import cardStyles from "./card.module.scss";
import workExperience, {
  RoleData,
  WorkExperienceData,
} from "../data/work-experience";

// Increasing this makes cards down the stack further from the top
const TOP_OFFSET = 20;
// Increasing this makes cards down the stack further to the right
const LEFT_OFFSET = 150;
// Increasing this makes cards down the stack smaller
const SCALE_FACTOR = 0.12;
// Increasing this makes cards down the stack more shadowed
const SHADOW_FACTOR = 7;

interface WorkExperienceProps {
  className?: string;
}
export const WorkExperience = ({ className }: WorkExperienceProps) => {
  const [cardPosition, setCardPosition] = React.useState(0);
  const nextCard = () => {
    setCardPosition((state) =>
      state < workExperience.length - 1 ? state + 1 : state
    );
  };
  const prevCard = () => {
    setCardPosition((state) => (state > 0 ? state - 1 : state));
  };
  const selectCard = (index: number) => setCardPosition(index);

  const cards = workExperience.flatMap((exp) => {
    return exp.roles.map((role) => {
      return { ...role, company: exp.company };
    });
  });

  return (
    <div className={classNames("flex flex-col justify-between", className)}>
      <ul className="relative h-full my-4 lg:my-8">
        {cards.map((card, index) => {
          return (
            <WorkExperienceCard
              {...card}
              key={card.key}
              index={index}
              cardPosition={cardPosition}
              nextCard={nextCard}
              prevCard={prevCard}
              selectCard={selectCard}
            />
          );
        })}
      </ul>
      <CardStackControls
        onNext={nextCard}
        onPrev={prevCard}
        cardPosition={cardPosition}
        numberOfCards={workExperience.length}
      />
    </div>
  );
};

interface WorkExperienceCardProps extends RoleData {
  company: string;
  // Used for animations
  index: number;
  cardPosition: number;
  // used for navigating between cards
  prevCard: () => void;
  nextCard: () => void;
  selectCard: (i: number) => void;
}

const WorkExperienceCard = ({
  company,
  title,
  dates,
  achievements,
  index,
  cardPosition,
  prevCard,
  nextCard,
  selectCard,
}: WorkExperienceCardProps) => {
  const position = index - cardPosition;
  const top = position * TOP_OFFSET;
  let left: string | number = position * (1 + SCALE_FACTOR) * LEFT_OFFSET;
  if (position < 0) left = left * 10;
  const scale = 1 - position * SCALE_FACTOR;
  const zIndex = workExperience.length - position;
  const brightness = 1 - (position * SHADOW_FACTOR) / 100;

  return (
    <motion.li
      className={classNames(
        "absolute h-full",
        index > cardPosition ? "cursor-pointer" : null
      )}
      initial={false}
      animate={{
        top,
        left,
        scale,
        zIndex,
      }}
      transition={{ duration: 0.3, type: "tween", ease: "easeInOut" }}
      onClick={() => selectCard(index)}
    >
      <Card
        className={classNames(
          "h-full max-w-[calc(100vw-48px)] w-[calc(100vw-48px)] lg:w-[640px] overflow-scroll",
          cardStyles.card
        )}
        initial={false}
        animate={{
          filter: `brightness(${brightness})`,
        }}
      />
    </motion.li>
  );
};
