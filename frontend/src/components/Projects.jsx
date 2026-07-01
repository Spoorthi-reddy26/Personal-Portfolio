import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Library Book Issue System",
    category: "Full Stack Project",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
    desc: "A full-stack library management system with role-based login, book issue and return, fine calculation, student dashboard, and admin features.",
    github: "#",
    demo: "#",
  },
  {
    title: "Employee Management System",
    category: "Full Stack Project",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    desc: "A CRUD-based employee management application to add, update, view, and delete employee records with database integration.",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather App",
    category: "API Project",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    desc: "A weather application that fetches real-time weather data using an API and displays city, temperature, and weather conditions.",
    github: "#",
    demo: "#",
  },
  {
    title: "Amazon Clone",
    category: "Frontend Project",
    tech: ["HTML", "CSS"],
    desc: "A responsive frontend clone of Amazon homepage with navbar, banner, product sections, and clean layout design.",
    github: "#",
    demo: "#",
  },
  {
    title: "Ice Cream Website",
    category: "Frontend Project",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive ice cream website with modern UI, menu section, product showcase, and attractive landing page design.",
    github: "#",
    demo: "#",
  },
  {
    title: "Tic Tac Toe Game",
    category: "JavaScript Project",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "An interactive Tic Tac Toe game with winner detection, reset functionality, and responsive design.",
    github: "#",
    demo: "#",
  },
  {
    title: "Stone Paper Scissors Game",
    category: "JavaScript Project",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A fun browser-based game with score tracking and user-versus-computer gameplay.",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-10 lg:px-20 py-24 bg-[#050816]">
      <p className="text-purple-400 text-lg font-semibold">My Work</p>

      <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>

      <p className="text-gray-400 max-w-3xl mb-12">
        Here are some of my projects that showcase my skills in full-stack
        development, frontend design, API integration, and database-driven
        applications.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-purple-500 hover:-translate-y-3 transition duration-300"
          >
            <div className="h-40 rounded-2xl bg-gradient-to-br from-purple-600/40 to-blue-500/20 flex items-center justify-center mb-6">
              <h3 className="text-2xl font-bold text-center px-4">
                {project.title}
              </h3>
            </div>

            <p className="text-purple-400 text-sm mb-3">
              {project.category}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm border border-purple-500 hover:bg-purple-500 px-4 py-2 rounded-full"
              >
                <FaExternalLinkAlt />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;