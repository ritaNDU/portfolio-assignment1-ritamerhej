interface Props {
  name: string;
  description: string;
  date: string;
}

const AchievementCard: React.FC<Props> = ({ name, description, date }) => {
  return (
    <div className="bg-white px-3 py-1 w-80 shadow-lg rounded-lg max-sm:w-11/12 border ">
      <time className="mb-1 text-sm font-normal text-gray-800">{date}</time>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mb-4 text-base font-normal text-gray-700 ">{description}</p>
    </div>
  );
};

export default AchievementCard;
