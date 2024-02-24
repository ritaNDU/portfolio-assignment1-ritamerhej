interface Props {
  title: string;
}

const PageHeading: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeading;
