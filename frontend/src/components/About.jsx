const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-20 py-24 bg-[#0b1020]"
    >
      <h2 className="text-5xl font-bold text-purple-500 mb-10">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Education
          </h3>

          <p>
            B.E Computer Science and Engineering
          </p>

          <p>
            Cambridge Institute of Technology North Campus
          </p>

          <p>
            CGPA: 8.6
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4">
            Internships
          </h3>

          <ul className="space-y-3">
            <li>ParvaM Software Solutions</li>
            <li>Sasken Technologies</li>
            <li>JPMorgan Chase Forage</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;