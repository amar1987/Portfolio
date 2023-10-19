import Card from "@/components/Card/Card";
import projectsData from "@/data/projectData";

export default function Projects() {
  return (
    <> <div className="divide-y divide-gray-200 dark:divide-gray-700">
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Projects
      </h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        An overview of my projects and assignments.
      </p>
    </div><div className="py-5">
          <div className="flex flex-wrap justify-center gap-8">
      {projectsData.map((data) => (
        <Card
          key={data.title}
          title={data.title}
          description={data.description}
          imgSrc={data.imgSrc}
          href={data.href}
          techStack={data.techStack}
        />
        ))}
        </div>
        </div>
        </div>
    </>
  );
}
