const skills = [
  "Java",
  "Spring Boot",
  "React",
  "MySQL",
  "REST API",
  "HTML",
  "CSS",
  "Bootstrap",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-20 py-24 bg-[#0b1020]">
      <h2 className="text-5xl font-bold text-purple-500 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white/5 backdrop-blur-md p-6 rounded-3xl text-center hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;