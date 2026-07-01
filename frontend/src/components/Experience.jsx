const experiences = [
  {
    company: "ParvaM Software Solutions",
    role: "Java Full Stack Developer Intern",
    period: "4 Months",
  },
  {
    company: "Sasken Technologies",
    role: "Java Intern",
    period: "8 Weeks",
  },
  {
    company: "JPMorgan Chase Forage",
    role: "Software Engineering Virtual Experience",
    period: "2026",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-20 py-24 bg-[#0b1020]"
    >
      <h2 className="text-5xl font-bold text-purple-500 mb-12">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white">
              {exp.company}
            </h3>

            <p className="text-purple-400 mt-2">
              {exp.role}
            </p>

            <p className="text-gray-400 mt-2">
              {exp.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;