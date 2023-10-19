interface ProjectDataProps {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
  techStack: string[];
}

const projectsData: ProjectDataProps[] = [
  {
    title: "ING x Backstage",
    description:
      "Part of a team that introduced backstage and created multiple custom plugins for backstage.",
    href: "/projects",
    imgSrc: "/static/images/backstage.png",
    techStack: ["React", "TypeScript", "Lit", "Postgress", "OpenShift", "Azure DevOps"],
  },  {
    title: "ING Console",
    description:
      "Part of a team that introduced backstage and created multiple custom plugins for backstage.",
    href: "/projects",
    imgSrc: "/static/images/backstage.png",
    techStack: ["React", "TypeScript", "Lit", "Postgress", "OpenShift", "Azure DevOps"],
  },
];

export default projectsData;
