import React from "react";
import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Projects = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (direction === "left") {
      container.scrollBy({ left: -200, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const project = [
    {
      id: 0,
      name: "AI Based System Monitoring Failure Prediction Platform",
      skillUsed:
        "React, Axios, Node JS, Express, Mongo DB, Tailwind CSS, HTML, CSS",
      techniques:
        "An AI-powered system monitoring platform that tracks CPU usage, memory consumption, and network traffic in real-time, and predicts potential system failures using intelligent data analysis.",
      imgURL: "",
      altContent: "",
      liveURL: "none",
      sourceCodeURL:
        "https://github.com/Poorani-design/AI-Based-System-Monitoring-Failure-Prediction-Platform",
    },
    {
      id: 1,
      name: "Yuva Interior Design",
      skillUsed: "React, Tailwind CSS, HTML, CSS",
      techniques:
        "Modern interior design portfolio with responsive UI and smooth gallery interactions. Built using reusable React components and optimized for performance.",
      imgURL: "",
      altContent: "",
      liveURL: "https://yuvainteriordesigner.vercel.app/",
      sourceCodeURL:
        "https://github.com/Poorani-design/Yuva-Interior-Design-Deploy",
    },
    {
      id: 2,
      name: "Microwood Enterprises",
      skillUsed: "HTML, CSS, Angular, Bootstrap",
      techniques:
        "Responsive business website using Angular and Bootstrap with clean UI structure. Focused on scalability, SEO-friendly design, and user experience.",
      imgURL: "",
      altContent: "",
      liveURL: "https://microwoodenterprises.netlify.app/",
      sourceCodeURL: "https://github.com/Poorani-design/Microwood-Enterprises",
    },
    {
      id: 7,
      name: "UX - Nila Crunchy Hub",
      skillUsed: "Figma",
      techniques:
        "Designed complete UX flow with wireframes and interactive prototypes. Focused on user-centered design and modern UI/UX patterns.",
      imgURL: "",
      altContent: "",
      liveURL:
        "https://www.figma.com/proto/Tm6dVcwBSMQ3o2s84GFclL/Nila-Crunchy-Hub?node-id=0-1&p=f&t=OKALqWOJRjJXcIL4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=30%3A64",
      sourcodeURL:
        "https://www.figma.com/design/Tm6dVcwBSMQ3o2s84GFclL/Nila-Crunchy-Hub?node-id=0-1&t=pVv6boozzq5oHo5j-1",
    },
    {
      id: 3,
      name: "E-Commerce Shopping - Customer",
      skillUsed:
        "HTML, CSS, Angular, Node JS, Bootstrap, Express JS, MySQL Database",
      techniques:
        "E-commerce platform with cart, orders, and REST API integration. Includes form validation, routing, and responsive UI design.",
      imgURL: "",
      altContent: "",
      liveURL: "none",
      sourceCodeURL:
        "https://bitbucket.org/poorani_fed_1997/ecommerce-customer-ui/src/master/",
    },
    {
      id: 4,
      name: "Admin Dashboard - E-Commerce",
      skillUsed:
        "HTML, CSS, Angular, Node JS, Bootstrap, Express JS, MySQL Database",
      techniques:
        "Admin dashboard with CRUD operations and file upload features. Designed scalable UI with REST API and responsive layout.",
      imgURL: "",
      altContent: "",
      liveURL: "none",
      sourceCodeURL:
        "https://bitbucket.org/poorani_fed_1997/ecommerce-admin-ui/src/master",
    },
    {
      id: 5,
      name: "Siragugal Bridal Studio",
      skillUsed: "HTML, CSS, Angular, Bootstrap",
      techniques:
        "Portfolio website showcasing bridal and makeup work with gallery UI. Designed for responsiveness and smooth visual presentation.",
      imgURL: "",
      altContent: "",
      liveURL: "none",
      sourceCodeURL: "https://github.com/Poorani-design/Siragugal",
    },
    {
      id: 6,
      name: "Outlook- UI Design",
      skillUsed: "HTML, CSS, Vanilla JavaScript, No Third CSS style",
      techniques:
        "Outlook-style UI built using pure HTML, CSS, and JavaScript. Demonstrates strong DOM manipulation and responsive design skills.",
      imgURL: "",
      altContent: "",
      liveURL: "none",
      sourcodeURL: "https://github.com/Poorani-design/OUTLOOK-UI-DESIGN",
    },
    {
      id: 10,
      name: "Responsive Design Using Grid",
      skillUsed: "HTML, CSS",
      techniques:
        "Responsive layout built using CSS Grid and Flexbox without frameworks. Focused on clean structure and mobile-first design.",
      imgURL: "",
      altContent: "",
      liveURL: "none",
      sourcodeURL:
        "https://github.com/Poorani-design/Resposive-Website-Using-Grid",
    },
    {
      id: 11,
      name: "Contact Management System",
      skillUsed: "HTML, CSS, Bootstrap, Angular, Node JS",
      techniques:
        "Contact management app with CRUD operations and REST API integration. Built with Angular and Node.js for scalable architecture.",
      imgURL: "",
      altContent: "",
      liveURL: "none",
      sourcodeURL:
        "https://github.com/Poorani-design/Contact-Management-System/tree/master/contact_Management",
    },
  ];
  return (
    <section className="w-full my-10" id="projects">
      <h2 className="heading-1 text-teal text-center py-5">My Projects</h2>

      <div className="relative max-w-10/12 w-full mx-auto my-5 py-3">
        <div
          ref={scrollRef}
          className="flex min-w-[80%] justify-start items-start flex-row gap-5 overflow-x-auto scrollbar-hide scroll-smooth transition duration-300 "
        >
          {project.map((pro) => {
            return (
              <div
                key={pro.id}
                className="bg-gray min-w-10/12 flex-col md:min-w-6/12 sm:min-w-12/12 lg:min-w-4/12 min-h-80 flex rounded-lg p-4 justify-start items-start h-60  light:shadow-md shadow-amber-400 "
              >
                <div className="text-xl font-semibold md:heading-3 rounded-sm w-full text-yellow top-30 h-20">
                  {/* {pro.id}  */}
                  {pro.name}
                </div>
                {/* <img
                  src={pro.imgURL}
                  alt="{pro.skillUsed}"
                  className="h-40 w-full object-cover rounded-lg bg-gray-600 my-3"
                /> */}
                <div className="h-15 text-main font-bold text-teal mb-2 py-2">
                  {pro.skillUsed}
                </div>
                <div className="h-50 py-4 text-gray-500 line-clamp-2 group-hover:line-clamp-none">
                  {pro.techniques}
                </div>
                <div className="flex flex-col w-full  py-2 gap-4  content-center items-center justify-center sm:flex-row sm:justify-between">
                  {pro.sourceCodeURL !== "none" && (
                    <a
                      href=""
                      className="px-4 my-2 w-full py-2 items-center flex justify-center bg-transparent border  border-gray-500 cursor:pointer rounded-lg hover:shadow-md hover:shadow-amber-400"
                    >
                      View Code
                    </a>
                  )}
                  {pro.liveURL !== "none" && (
                    <a
                      href={pro.liveURL}
                      target="_blank"
                      className="px-4 my-2 w-full py-2 items-center flex justify-center text-main bg-pink-600 border border-pink-800 cursor:pointer rounded-lg hover:shadow-lg cursor-pointer"
                    >
                      Go Live
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => scroll("left")}
          className="card-arrow bg-gray text-teal -left-5 sm:-left-8 md:-left-10 lg:-left-15"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="card-arrow bg-gray text-teal  -right-5 sm:-right-8 md:-right-10 lg:-right-15"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
