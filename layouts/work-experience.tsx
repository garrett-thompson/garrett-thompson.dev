import React from "react";
import { motion } from "framer-motion";
import { Card } from "../components/card/card";
import classNames from "classnames";
import { CardStackControls } from "../components/card/controls";
import workExperience, { RoleDataWithKey } from "../data/work-experience";
import { List } from "../components/list";
import { ExperienceHeader } from "../components/typography/experience-header";
import { Body } from "../components/typography";

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

  const cards = workExperience.flatMap((exp) => {
    return exp.roles.map((role) => {
      return { ...role, company: exp.company };
    });
  });

  return (
    <div className={classNames("flex flex-col justify-between", className)}>
      <ul className="relative h-full my-4 lg:my-8">
        {cards.map((card, index) => (
          <WorkExperienceCard
            {...card}
            key={card.key}
            index={index}
            cardPosition={cardPosition}
            setCardPosition={setCardPosition}
            numberOfCards={cards.length}
          />
        ))}
      </ul>
      <CardStackControls
        setCardPosition={setCardPosition}
        cardPosition={cardPosition}
        numberOfCards={cards.length}
      />
    </div>
  );
};

interface WorkExperienceCardProps extends RoleDataWithKey {
  company: string;
  setCardPosition: (i: number) => void;
  // Used for animations
  index: number;
  cardPosition: number;
  numberOfCards: number;
}

const WorkExperienceCard = ({
  company,
  title,
  dates,
  achievements,
  index,
  cardPosition,
  setCardPosition,
  numberOfCards,
}: WorkExperienceCardProps) => {
  const position = index - cardPosition;
  const x =
    position < 0
      ? `${position * 100}vw`
      : position * (1 + SCALE_FACTOR) * LEFT_OFFSET;
  const y = position * TOP_OFFSET;
  const scale = position < 0 ? 1 : 1 - position * SCALE_FACTOR;
  const zIndex = numberOfCards - position;
  const brightness = position < 0 ? 1 : 1 - (position * SHADOW_FACTOR) / 100;

  return (
    <motion.li
      className={classNames(
        "absolute h-full",
        index > cardPosition ? "cursor-pointer" : null
      )}
      initial={false}
      animate={{
        x,
        y,
        scale,
      }}
      style={{ zIndex }}
      transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
      onClick={() => setCardPosition(index)}
    >
      <Card
        className="h-full max-w-[calc(100vw-48px)] w-[calc(100vw-48px)] lg:w-[640px]"
        initial={false}
        animate={{
          filter: `brightness(${brightness})`,
        }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <ExperienceHeader dates={dates} company={company} title={title} />
          <List.UL className="mt-3">
            {achievements.map((ach) => (
              <List.LI key={ach.key}>
                <Body>{ach.value}</Body>
              </List.LI>
            ))}
          </List.UL>
        </div>
      </Card>
    </motion.li>
  );
};
