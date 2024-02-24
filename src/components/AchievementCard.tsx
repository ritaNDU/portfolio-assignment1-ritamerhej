import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

interface Props {
  name: string;
  description: string;
  date: string;
}

const AchievementCard: React.FC<Props> = ({ name, description, date }) => {
  const slideIn = keyframes`
    from {
      opacity: 0;
      transform: translateX(100%)
    }

    to {
      opacity: 1;
      transform: translateX(0%)
    }
  `;

  return (
    <Reveal keyframes={slideIn}>
      <>
        <time className="mb-1 text-sm font-normal text-gray-500">{date}</time>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mb-4 text-base font-normal text-gray-600 ">
          {description}
        </p>
      </>
    </Reveal>
  );
};

export default AchievementCard;
