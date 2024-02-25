import Timeline from "../components/Timeline";
import { diplomas, jobs } from "../data/achievements";

const AboutMe = () => {
  return (
    <div className="pages-common-style bg-[#00BFFF]">
      <div className="p-6">
        <h2 className="mb-1 text-blue-50">Hi I'm Rita!</h2>
        <p className="text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          odit at dolorem similique ex vel laborum optio, nemo vero officiis
          autem? Obcaecati aperiam suscipit facere laborum quia libero dicta
          quibusdam?
        </p>
      </div>

      <div className="p-6 bg-[#7CFC00]">
        <h2 className="mb-6 text-green-50">Education</h2>
        <Timeline achievements={diplomas} />
      </div>

      <div className="flex flex-col gap-2 p-6 bg-[#ff686b]">
        <h2 className="mb-6 text-red-50">Experience</h2>
        <Timeline achievements={jobs} />
      </div>
    </div>
  );
};

export default AboutMe;
