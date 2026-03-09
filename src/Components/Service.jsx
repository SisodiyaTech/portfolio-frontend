// import Card from "./Card";
// import Frontend from "./../assets/frontend.jpg"
// import Backend from "./../assets/backend.jpg"
// import UIUX from "./../assets/UIUX.jpg"
// import Database from "./../assets/database.jpg"
// import Deploy from "./../assets/deployment.jpg"

// function Service() {
//   return (
//     <div id="Services" className="px-1 py-3 my-5 max-w-7xl m-auto">
//       <h1 className="text-4xl mb-10 text-center  font-bold">My Services</h1>
//       <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5 justify-items-center px-5">
//         <Card
//           title="UI/UX Design"
//           description="I create Mobile-first responsive and modern stylish looks web ui/ux that deliver a smooth user experience."
//           image={UIUX}
//         />
//         <Card
//           title="Frontend Development"
//           description="I create fast, Mobile-first, responsive,and optimized performance that deliver a smooth user experience."
//           image={Frontend}
//         />
//         <Card
//           title="Backend & API Developmentt"
//           description="I design secure and well-structured backend systems that power modern web applications."
//           image={Backend}
//         />
//         <Card
//           title="Database Design & Management"
//           description="I design efficient databases that ensure fast data access and long-term scalability. Schema design and validation, Query optimization and indexing"
//           image={Database}
//         />
//         <Card
//           title="Deployment & Development Workflow"
//           description="I follow professional workflows to deliver production-ready applications."
//           image={Deploy}
//         />
//       </div>
//     </div>
//   );
// }

// export default Service;

import React from 'react'

const Service = () => {

  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "End-to-end web application development using modern technologies. I build scalable, secure, and high-performance applications from frontend to backend.",
      highlights: [
        "MERN Stack (MongoDB, Express, React, Node.js)",
        "REST API Development",
        "Authentication & Authorization",
        "Database Design"
      ]
    },
    {
      id: 2,
      title: "Modern Frontend Development",
      description:
        "Responsive, fast, and visually engaging interfaces built with clean code and smooth animations.",
      highlights: [
        "React.js & Component Architecture",
        "Tailwind CSS & Responsive Design",
        "GSAP & Scroll Animations",
        "Performance Optimization"
      ]
    },
    {
      id: 3,
      title: "Backend & API Development",
      description:
        "Robust server-side architecture designed for scalability, security, and performance.",
      highlights: [
        "Node.js & Express.js",
        "JWT Authentication",
        "Secure API Integration",
        "Database Management (MongoDB)"
      ]
    },
    {
      id: 4,
      title: "UI/UX to Code",
      description:
        "Transforming Figma or design concepts into pixel-perfect, fully responsive websites.",
      highlights: [
        "Pixel Perfect Implementation",
        "Mobile First Approach",
        "Clean Semantic HTML",
        "Cross-Browser Compatibility"
      ]
    },
    {
      id: 5,
      title: "Performance & Optimization",
      description:
        "Improving website speed, SEO, and user experience for better engagement and conversions.",
      highlights: [
        "Speed Optimization",
        "SEO Best Practices",
        "Code Refactoring",
        "Lighthouse Improvements"
      ]
    },
    {
      id: 6,
      title: "Custom Web Solutions",
      description:
        "Tailor-made web applications designed specifically for business goals and user needs.",
      highlights: [
        "Admin Panels",
        "Dashboards",
        "Portfolio Websites",
        "Business Websites"
      ]
    }
  ];


  return (
    <div className='p-5 sm:p-16'>
      <h1 className='text-5xl font-bold text-center text-[#6f1d1b] my-10'>My Services</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {services.map((service) => (
          <div key={service.id} className="card p-5 border rounded-2xl bg-white/30 backdrop-blur-md border-[#bb9457] shadow">
            <h2 className='text-2xl sm:text-2xl font-extrabold text-[#6f1d1b]'>{service.title}</h2>
            <p className='text-base text-[#432818] sm:text-lg'>{service.description}</p>
            <ul className='list-disc text-base px-5 sm:text-lg text-[#432818] mt-3'>
              {service.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service

