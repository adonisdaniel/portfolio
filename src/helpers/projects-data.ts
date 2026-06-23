import type { IProject } from "../components/interfaces/projects.interfaces";

export const projectsData: IProject[] = [
  {
    title: "CENTER HORSES BO",
    description:
      "Back Office for center horses game. Here the game can be configured, client, currencies. Also see reports and download them.",
    stack: ["VUE 3", "PINIA", "AXIOS", "SOCKET IO"],
    category: "BACKOFFICE",
    image: "projects/ch-admin.webp",
    alt: "Center Horses back office dashboard showing configuration panels, client management and downloadable reports.",
  },
  {
    title: "CENTER HORSES WEB",
    description:
      "Frontend for center horses game. Here the game can be played. A real-time wagering platform built for high-concurrency and visual fidelity.",
    stack: ["VUE 3", "PINIA", "AXIOS", "SSE"],
    category: "FRONTEND",
    image: "projects/ch-web.webp",
    alt: "Center Horses player interface: real-time wagering screen with live race visualization.",
  },
  {
    title: "SPRINT GAMING BO 2.0",
    description:
      "Back Office for the sprint gamings game suite. Here the games can be configured, client, operators, currencies. Also see reports and download them",
    stack: ["VUE 3", "PINIA", "AXIOS", "SOCKET IO"],
    category: "BACKOFFICE",
    image: "projects/sprint-admin-2.webp",
    alt: "Sprint Gaming 2.0 back office: multi-game configuration panel with operators, currencies and reports.",
  },
  {
    title: "SPRINT GAMING BO",
    description:
      "Back Office for the sprint gamings game suite. Here the games can be configured, client, operators, currencies. Also see reports and download them",
    stack: ["VUE 2", "VUEX", "AXIOS", "SOCKET IO"],
    category: "BACKOFFICE",
    image: "projects/sprint-admin.webp",
    alt: "Sprint Gaming legacy back office: Vue 2 admin for configuring games, clients and operators.",
  },
  {
    title: "SPRINT GAMING - AWARD ADMIN",
    description:
      "Frontend for the sprint gamings game suite. Here crupiers can close rounds sending the results to the backend.",
    stack: ["SVELTE", "AXIOS"],
    category: "FRONTEND",
    alt: "Sprint Gaming Award Admin: Svelte-built croupier tool for closing rounds and submitting results.",
  },
  {
    title: "SPRINT GAMING API",
    description:
      "Here I worked creating queries to mongo db, recieving data from another project in c# that send us rounds for a game. The project in builded with Hexagonal Architecture, or DDD.",
    stack: ["ADONIS JS v5", "MONGOOSE", "REDIS", "AXIOS", "SOCKET IO"],
    category: "BACKEND",
    alt: "Sprint Gaming API: AdonisJS v5 backend with MongoDB and Redis, built on hexagonal / DDD architecture.",
  },
  {
    title: "CENTER HORSES API",
    description:
      "Here I worked creating queries to postgres db, also the logic of the game. Configs for clients, users, limits, etc.",
    stack: ["ADONIS JS v6", "POSTGRES", "REDIS", "AXIOS", "SSE"],
    category: "BACKEND",
    alt: "Center Horses API: AdonisJS v6 backend with PostgreSQL and Redis, handling game logic and client configuration.",
  },
];
