import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Twitter } from "lucide-react";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://portfolio-backend-uhpx.onrender.com/api/contact";
      const res = await axios.post(
        backendUrl,
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
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-12 relative z-10">
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] text-white">
              LET&apos;S <br /> COLLAB <br />{" "}
              <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">SYSTEM.</span>
            </h2>

            <div className="flex flex-col gap-6">
              <p className="text-xl text-muted max-w-md leading-relaxed">
                Have an optimized project or concept in mind? I&apos;d love to build it. Send a message and let&apos;s execute something great.
              </p>

              <div className="flex gap-6 mt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-primary/20 bg-primary/5 text-primary rounded-full hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all duration-300"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-primary/20 bg-primary/5 text-primary rounded-full hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all duration-300"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-primary/20 bg-primary/5 text-primary rounded-full hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all duration-300"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card-bg/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-primary/20 shadow-[0_0_30px_rgba(57,255,20,0.05)] relative z-10">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-primary font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Full Name"
                  className="bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-all duration-300 text-lg text-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-primary font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Email"
                  className="bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-all duration-300 text-lg text-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-primary font-bold">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Message"
                  className="bg-transparent border-b border-primary/20 py-4 focus:outline-none focus:border-primary transition-all duration-300 text-lg text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-primary cursor-pointer text-black py-6 rounded-full font-display font-bold text-xl shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_35px_rgba(57,255,20,0.8)] hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-muted text-sm uppercase tracking-widest relative z-10">
          <p>© 2026 ABHISHEK PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
