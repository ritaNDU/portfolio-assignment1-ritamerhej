export interface AchievementStructure {
  name: string;
  description: string;
  startingDate: string;
  endingDate: string;
}

const jobs: AchievementStructure[] = [
  {
    name: "Burger King Employee",
    description: "lorem",
    startingDate: "September 26, 2016",
    endingDate: "May 10, 2019",
  },
  {
    name: "Robotics Teacher",
    description: "lorem",
    startingDate: "July 7, 2021",
    endingDate: "October 31, 2023",
  },
  {
    name: "Front-End Development Internship",
    description: "lorem",
    startingDate: "November 1, 2023 ",
    endingDate: "December 10, 2023",
  },
];

const diplomas: AchievementStructure[] = [
  {
    name: "High Shool Diploma - Mont La Salle Ain Saadeh",
    description: "lorem",
    startingDate: "October, 2001 ",
    endingDate: "June, 2016",
  },
  {
    name: "BS. In Computer Sciences -NDU",
    description: "lorem",
    startingDate: "October, 2016 ",
    endingDate: "May, 2021",
  },
];

export { jobs, diplomas };
