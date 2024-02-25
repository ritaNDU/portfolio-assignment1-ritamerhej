import { useRef } from "react";
import Timeline from "../components/Timeline";
import { diplomas, jobs } from "../data/achievements";

const AboutMe = () => {
  const topRef = useRef<HTMLDivElement>(null);

  const handleGoToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="pages-common-style">
      <div className="p-6 w-screen bg-[#00008B]" ref={topRef}>
        <h2 className="mb-1 text-white">Hi I'm Rita!</h2>
        <p className="text-lg w-10/12 text-blue-50 font-medium">
          I am a highly motivated individual with a deep passion for software
          development.
          <br />
          Having started programming at a young age, I have eagerly delved into
          various fields of Computer Science both during my university studies
          and through practical work experiences. I possess a relentless drive
          to continuously learn and enhance my skills in pursuit of personal and
          professional growth.
        </p>
      </div>

      <div className="px-6 py-10">
        <h2 className="mb-6 text-black">Education</h2>
        <Timeline achievements={diplomas} />
      </div>

      <div className="flex flex-col gap-2 px-6 py-10">
        <h2 className="mb-6 text-black">Experience</h2>
        <Timeline achievements={jobs} />
      </div>
      <button
        className="btn-primary place-self-start ml-3 mb-1"
        onClick={handleGoToTop}
      >
        Go back to top
      </button>
    </div>
  );
};

export default AboutMe;
