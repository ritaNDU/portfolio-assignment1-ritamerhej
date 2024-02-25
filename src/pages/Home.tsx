import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="pages-common-style gap-5 bg-[#696969] h-screen">
      <section className="flex flex-col place-items-center justify-center bg-[#ffffff] w-screen h-1/2 gap-5">
        <Fade cascade damping={0.5}>
          <p className="text-3xl max-sm:text-2xl lg:text-4xl md:text-5xl text-black font-bold">
            Hello, I'm Rita
          </p>
          <p className="text-xl lg:text-3xl md:text-3xl max-sm:text-base text-black font-medium">
            A Computer Science Graduate
          </p>
          <p className="text-lg lg:text-xl md:text-xl max-sm:text-sm text-black">
            I'm looking for my first developer job
          </p>
        </Fade>
      </section>

      <section className="p-6 flex flex-col lg:place-items-center lg:flex-row gap-9">
        <Fade cascade damping={0.5} className=" lg:p-10">
          <h3 className="lg:text-9xl text-7xl">💻</h3>
          <div className="flex flex-col gap-1">
            <h2 className="text-white max-sm:text-2xl">Skills</h2>
            <p className="text-base text-white max-sm:text-sm lg:w-11/12 font-semibold">
              I possess a versatile proficiency across various programming
              languages, including but not limited to Python, JavaScript, Java,
              and SQL. My expertise extends to web development frameworks such
              as Django and React, as well as familiarity with version control
              systems like Git. Additionally, I possess a solid understanding of
              data structures and algorithms, enabling me to tackle complex
              problem-solving tasks efficiently. My ability to adapt to new
              technologies swiftly, coupled with a strong foundation in software
              engineering principles, underscores my capability to contribute
              effectively to diverse projects and teams.
            </p>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Home;
