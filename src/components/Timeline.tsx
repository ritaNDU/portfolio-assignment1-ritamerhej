import { AchievementStructure } from "../data/achievements";
import AchievementCard from "./AchievementCard";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

interface Props {
  achievements: AchievementStructure[];
}

const Timeline: React.FC<Props> = ({ achievements }) => {
  const slideIn = keyframes`
    from {
      opacity: 0;
      transform: translateX(10%)
    }

    to {
      opacity: 1;
      transform: translateX(0%)
    }
  `;

  return (
    <ol className="relative border-s border-gray-900 overflow-hidden">
      <Reveal
        keyframes={slideIn}
        cascade
        damping={0.2}
        triggerOnce
        fraction={0.9}
      >
        {achievements.map((achievement) => {
          return (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-6 border border-gray-900"></div>
              <AchievementCard
                name={achievement.name}
                description={achievement.description}
                date={`${achievement.startingDate} - ${achievement.endingDate}`}
              />
            </li>
          );
        })}
      </Reveal>
    </ol>
  );
};

export default Timeline;
