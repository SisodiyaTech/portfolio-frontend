import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Twitter } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://portfolio-backend-uhpx.onrender.com/api/contact",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      const data = res.data;
      if (data.success) alert("Message sent!");
      else alert("Failed to send message.");
      setFormData({ name: "", email: "", msg: "" });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-12">
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              LET&apos;S <br /> WORK <br />{" "}
              <span className="text-muted">TOGETHER</span>
            </h2>

            <div className="flex flex-col gap-6">
              <p className="text-xl text-muted max-w-md">
                Have a project in mind? I&apos;d love to hear about it. Send me
                a message and let&apos;s start something great.
              </p>

              <div className="flex gap-6 mt-4">
                <a
                  href="#"
                  className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] p-8 md:p-12 rounded-[2rem] border border-white/5">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Full Name"
                  className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Email"
                  className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Message"
                  className="bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-white cursor-pointer text-black py-6 rounded-full font-display font-bold text-xl hover:scale-[1.02] transition-transform"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-muted text-sm uppercase tracking-widest">
          <p>© 2026 ABHISHEK PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
