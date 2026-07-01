const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-20 py-24 bg-[#0b1020]"
    >
      <h2 className="text-5xl font-bold text-purple-500 mb-12">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-10 rounded-3xl">

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-[#151030] text-white outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-[#151030] text-white outline-none"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-[#151030] text-white outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;