import PageHeading from "../components/PageHeading";
import Timeline from "../components/Timeline";
import { diplomas, jobs } from "../data/achievements";

const AboutMe = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <PageHeading title="About me" />

      <h2>I am Rita Merhej</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate odit
        at dolorem similique ex vel laborum optio, nemo vero officiis autem?
        Obcaecati aperiam suscipit facere laborum quia libero dicta quibusdam?
      </p>
      <div>
        <button>Education</button>
        <button>Experience</button>
      </div>

      <h2>Education</h2>
      <Timeline achievements={diplomas} />
      <h2>Experience</h2>
      <Timeline achievements={jobs} />
    </div>
  );
};

export default AboutMe;
