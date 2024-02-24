import { keyframes } from "@emotion/react";
import Reveal, { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%)
  }

  to {
    opacity: 1;
    transform: translateX(50%)
  }
`;
  return (
    
  );
};

export default Home;
