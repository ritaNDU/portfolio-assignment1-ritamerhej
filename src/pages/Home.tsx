import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="pages-common-style gap-5 bg-[#00BFFF] h-screen">
      <section className="flex flex-col place-items-center justify-center p-3 bg-[#ff686b] w-screen h-1/2 gap-5">
        <Fade>
          <p className="text-xl lg:text-3xl text-white font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-md lg:text-xl text-[#ffb3c6] font-semibold">
            Iste obcaecati magni repellat praesentium quia dolorum recusandae.
          </p>
          <p className="text-sm lg:text-lg text-[#ffe5ec]">
            Voluptatum iure quos, optio, natus mollitia nulla. Magni, quaerat.
          </p>
        </Fade>
      </section>
      <section className="flex flex-col gap-5 p-6 lg:flex-row lg:gap-10">
        <Fade>
          <h3 className="lg:text-8xl text-6xl">💻</h3>
        </Fade>
        <div className="flex flex-col gap-1">
          <Slide>
            <h2 className="text-white lg:text-4xl">Skills</h2>
            <p className="text-md lg:text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in
              rem nulla adipisci aut soluta corrupti quidem similique provident
              sint quas cum, veritatis quos sit pariatur iste mollitia optio?
              Itaque.
            </p>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default Home;
