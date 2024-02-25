export interface ProjectsStructure {
  name: string;
  description: string;
}

const projects: ProjectsStructure[] = [
  {
    name: "Safe Authentication Interface",
    description:
      "The Safe Authentication Interface is a robust Authentication interface that effectively safeguards against the ten most prevalent cyber attacks",
  },
  {
    name: "CHIP 8 Emulator",
    description:
      "This project aims to recreate the functionality of the CHIP-8 virtual machine, allowing users to experience classic games from the 1970s and 1980s on modern devices.",
  },
  {
    name: "XO Game",
    description:
      "This React-based XO (Tic-Tac-Toe) game project brings the classic game to life with modern flair.",
  },
  {
    name: "Portfolio Website",
    description:
      "The portfolio website project is a dynamic showcase of my skills and projects, built with React, Tailwind CSS, and other React libraries.",
  },
  {
    name: "Space Rocket Software",
    description:
      "The space rocket project has been creaete to operate a super secret rocket aimed to get out of our galaxy, faster than the speed of light.",
  },
  {
    name: "Battlefield Game",
    description:
      "It's a terminal-based version of the game. It has been developed using C++ as part of a university project.",
  },
  {
    name: "Omar",
    description:
      "Omar is an LLM chatbot developed to understand and answer complex questions.",
  },
];

export default projects;
