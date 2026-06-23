import type { IProject } from "../components/interfaces/projects.interfaces";

export const projectsData: IProject[] = [
  {
    title: "CENTER HORSES BO",
    description:
      "Back Office for center horses game. Here the game can be configured, client, currencies. Also see reports and download them.",
    stack: ["VUE 3", "PINIA", "AXIOS", "SOCKET IO"],
    category: "BACKOFFICE",
    image: "projects/ch-admin.webp",
  },
  {
    title: "CENTER HORSES WEB",
    description:
      "Frontend for center horses game. Here the game can be played. A real-time wagering platform built for high-concurrency and visual fidelity.",
    stack: ["VUE 3", "PINIA", "AXIOS", "SSE"],
    category: "FRONTEND",
    image: "projects/ch-web.webp",
  },
  {
    title: "SPRINT GAMING BO 2.0",
    description:
      "Back Office for the sprint gamings game suite. Here the games can be configured, client, operators, currencies. Also see reports and download them",
    stack: ["VUE 3", "PINIA", "AXIOS", "SOCKET IO"],
    category: "BACKOFFICE",
    image: "projects/sprint-admin-2.webp",
  },
  {
    title: "SPRINT GAMING BO",
    description:
      "Back Office for the sprint gamings game suite. Here the games can be configured, client, operators, currencies. Also see reports and download them",
    stack: ["VUE 2", "VUEX", "AXIOS", "SOCKET IO"],
    category: "BACKOFFICE",
    image: "projects/sprint-admin.webp",
  },
  {
    title: "SPRINT GAMING - AWARD ADMIN",
    description:
      "Frontend for the sprint gamings game suite. Here crupiers can close rounds sending the results to the backend.",
    stack: ["SVELTE", "AXIOS"],
    category: "FRONTEND",
  },
  {
    title: "SPRINT GAMING API",
    description:
      "Here I worked creating queries to mongo db, recieving data from another project in c# that send us rounds for a game. The project in builded with Hexagonal Architecture, or DDD.",
    stack: ["ADONIS JS v5", "MONGOOSE", "REDIS", "AXIOS", "SOCKET IO"],
    category: "BACKEND",
  },
  {
    title: "CENTER HORSES API",
    description:
      "Here I worked creating queries to postgres db, also the logic of the game. Configs for clients, users, limits, etc.",
    stack: ["ADONIS JS v6", "POSTGRES", "REDIS", "AXIOS", "SSE"],
    category: "BACKEND",
  },
];
