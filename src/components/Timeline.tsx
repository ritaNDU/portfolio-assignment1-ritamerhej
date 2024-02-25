import { AchievementStructure } from "../data/achievements";
import AchievementCard from "./AchievementCard";

interface Props {
  achievements: AchievementStructure[];
}

const Timeline: React.FC<Props> = ({ achievements }) => {
  return (
    <ol className="relative border-s border-gray-900 overflow-hidden">
      {achievements.map((achievement) => {
        return (
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-900"></div>
            <AchievementCard
              name={achievement.name}
              description={achievement.description}
              date={`${achievement.startingDate} - ${achievement.endingDate}`}
            />
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
