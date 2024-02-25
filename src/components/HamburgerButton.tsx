interface Props {
  onClick: () => void;
}

const HamburgerButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="py-1 burger-button" onClick={onClick}>
      <div className="w-5 border-2 border-black mb-1"></div>
      <div className="w-5 border-2 border-black mb-1"></div>
      <div className="w-5 border-2 border-black"></div>
    </button>
  );
};

export default HamburgerButton;
