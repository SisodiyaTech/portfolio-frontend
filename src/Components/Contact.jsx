import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact",
        formData,
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      const data = res.data;
      if (data.success) alert("Message sent!");
      else alert("Failed to send message.");
      setFormData({ name: "", email: "", phone: "", msg: "" });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className='px-1 py-3 my-5  bg-white' id='Contact'>
      <h1 className="text-4xl text-center font-bold">Contact Me</h1>
      <div className='flex lg:flex-row justify-center p-5 lg:gap-[5%] flex-col items-center'>
        <form
          onSubmit={handleSubmit}
          className='flex lg:basis-[40%] md:basis-[40%] flex-col w-full bg-gray-100 text-center gap-5 border border-slate-300 p-5 rounded'
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Your Full Name'
            className='bg-white p-2 border border-slate-300 outline-none rounded'
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your Email'
            className='bg-white p-2 border border-slate-300 outline-none rounded'
            required
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter your Number'
            className='bg-white p-2 border border-slate-300 outline-none rounded'
          />
          <textarea
            name="msg"
            value={formData.msg}
            onChange={handleChange}
            placeholder='Enter Your Message'
            className='bg-white p-2 h-30 border border-slate-300 outline-none rounded'
            required
          />
          <button
            type='submit'
            className='bg-fuchsia-700 p-2 text-white rounded font-bold'
          >
            Send Message
          </button>
        </form>

        <div className='p-2 py-5 flex lg:basis-[40%] md:basis-[40%] flex-col gap-5'>
          <h1 className='text-5xl font-bold'>Get in Touch</h1>
          <p>I build clean and reliable web applications with the MERN stack, focusing on performance and user experience.</p>
          <p className='font-semibold'>Have an idea or project? Let’s discuss how we can bring it to life.</p>
          <ul className='flex gap-5'>
            <li><a href="#" className='rounded-full text-blue-700 text-3xl'><FaLinkedin /></a></li>
            <li><a href="#" className='rounded-full text-red-700 text-3xl'><SiGmail /></a></li>
            <li><a href="#" className='rounded-full text-3xl'><FaGithub /></a></li>
            <li><a href="#" className='rounded-full text-3xl text-pink-700'><FaInstagram /></a></li>
            <li><a href="#" className='rounded-full text-blue-700 text-3xl'><FaFacebook /></a></li>
            <li><a href="#" className='rounded-full text-green-700 text-3xl'><FaWhatsapp /> </a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
