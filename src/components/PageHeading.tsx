interface Props {
  title: string;
  className?: string;
}

const PageHeading: React.FC<Props> = ({ title, className }) => {
  return (
    <div className="h-1 p-3">
      <h1 className={`text-2xl ${className && className}`}>{title}</h1>
    </div>
  );
};

export default PageHeading;
