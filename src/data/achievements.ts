export interface AchievementStructure {
  name: string;
  description: string;
  startingDate: string;
  endingDate: string;
}

const jobs: AchievementStructure[] = [
  {
    name: "Employee - Burger King",
    description:
      "Demonstrated versatility by rotating across various roles at Burger King, including ingredient preparation, burger assembly, cashier duties at the front counter, and assisting customers at the Drive Through.",
    startingDate: "September 26, 2016",
    endingDate: "May 10, 2019",
  },
  {
    name: "EdTech Specialist - PLC",
    description:
      "Instructed young children in a visual-based programming language and facilitated Python programming lessons for older students. Additionally, contributed to the development of website content for the center.",
    startingDate: "July 7, 2021",
    endingDate: "October 31, 2023",
  },
  {
    name: "Web Dev. Internship - Brain2Code",
    description:
      "Completed a front-end development internship and have learned about React, Next.js",
    startingDate: "November 1, 2023 ",
    endingDate: "December 10, 2023",
  },
];

const diplomas: AchievementStructure[] = [
  {
    name: "High Shool Diploma - Mont La Salle",
    description:
      "Obtained with success the French Baccalaureate and the equivalent Lebanese Baccalaureate.",
    startingDate: "October, 2001 ",
    endingDate: "June, 2016",
  },
  {
    name: "BS. In Computer Sciences - NDU",
    description: `Graduated with Cum Laude honors, recognizing exceptional academic achievement.
Executed a senior project by designing and constructing a robust Authentication interface that effectively safeguards against the ten most prevalent cyber attacks.`,
    startingDate: "October, 2016 ",
    endingDate: "May, 2021",
  },
];

export { jobs, diplomas };
