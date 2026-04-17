import React from "react";
import roadmap from "../../assets/roadmap/experience_poorani_2.PNG";

const Experience = () => {
  // const data = [
  //   {
  //     year: "2022 to Present",
  //     title: "Shift Lead",
  //     desc: "Build scalable application using Angular, Backend PostgreSQL",
  //     skills:
  //       "Angular, React, Node JS, PostgreSQL, Git, Bitbucket, Jenkins, API, Figma, Express, MySQL",
  //   },
  //   {
  //     year: "2022",
  //     title: "Web Developer",
  //     desc: "Learned Marketing Landing page using HTML, CSS, JavaScript, PHP, SEO, Performance Optimization",
  //     skills: "HTML, CSS, JS, Hoisting, Pleask, Go-daddy, PHP, MySQL database",
  //   },
  //   {
  //     year: "2021",
  //     title: "AFC-BACKEND SUPPORT(CMRL)",
  //     desc: "Managing backend data(QR data, refund, top-up process using PL/SQL)",
  //     skills:
  //       "PL/SQL,Trigger refund process, Raspberry-pi board configuration, AFC, API",
  //   },
  //   {
  //     year: "2018",
  //     title: "software Developer",
  //     desc: "Exploring HTML, CSS, Ms-Office, PHP, jQuery, SQL for developing college students projects",
  //     skills: "HTML, CSS, JS,PHP, jQuery, Photoshop, Microsoft Office Package",
  //   },
  // ];
  return (
    <>
      <section className="h-full w-full my-1 flex flex-col  justify-center items-center" id="roadmap">
        <div className="heading-1 text-center text-teal my-4 py-4 h-full w-full">
          My Roadmap
        </div>
        <div className="flex flex-col  md:flex-row px-5 md:mx-auto md:justify-center md:items-center w-full">
          <div className="relative p-2 sm:py-4 h-150  md:h-120 sm:h-120 w-250 flex items-start my-10">
            <div
              className="ml-10  border h-110  w-0
          sm:ml-20 sm:mr-20 sm:h-100
          md:h-110 md:ml-10  "
            ></div>
            <div
              className="absolute z-10 flex flex-col justify-center md:justify-between items-start gap-10 text-main 
               -top-1 w-70 left-9 
              sm:-top-6 sm:left-20 sm:w-100
              md:-top-10 md:w-150  md:left-10 
              lg:-top-5 lg:w-130"
            >
              <div className="first-card flex flex-row justify-center items-center">
                <div className="rounded-full h-5 w-5 bg-amber-500 px-2"></div>
                <div className="flex flex-col  w-70 sm:mx-3 p-3 mx-2 bg-gray-900 text-white cursor-pointer shadow-lg shadow-gray-500 hover:shadow-amber-800 rounded-lg transition">
                  <div className="font-bold">HCL Technology</div>
                  <div className="text-white ">
                    Shift Lead | Software Engineer
                  </div>
                  <div className="text-white  ">May 2022 to Present</div>
                </div>
              </div>
              <div className="first-card flex flex-row justify-center items-center">
                <div className="rounded-full h-5 w-5 bg-amber-500 px-2"></div>
                <div className="flex flex-col  w-70 sm:mx-3 p-3 mx-2 bg-gray-900 text-white shadown cursor-pointer shadow-lg shadow-gray-500 hover:shadow-amber-800 rounded-lg transition gap-1">
                  <div className="font-bold">Praba's Vcare Private Limited</div>
                  <div className="text-white">Web Developer</div>
                  <div className="text-white">September 2021 to May 2022</div>
                </div>
              </div>
              <div className="first-card flex flex-row justify-center items-center">
                <div className="rounded-full h-5 w-5 bg-amber-500 px-2"></div>
                <div className="flex flex-col  w-70 sm:mx-3 p-3 mx-2 bg-gray-900 text-white shadown cursor-pointer shadow-lg shadow-gray-500 hover:shadow-amber-800 rounded-lg transition gap-1">
                  <div className="font-bold">Randstand Pvt Lt./CMRL</div>
                  <div className="text-white">AFC-Support</div>
                  <div className="text-white">
                    September 2020 to September 2021
                  </div>
                </div>
              </div>
              <div className="first-card flex flex-row justify-center items-center">
                <div className="rounded-full h-5 w-5 bg-amber-500 px-2"></div>
                <div className="flex flex-col   w-70 sm:mx-3 p-3 mx-2 bg-gray-900 text-white shadown cursor-pointer shadow-lg shadow-gray-500 hover:shadow-amber-800 rounded-lg transition gap-1">
                  <div className="font-bold">
                    Tutor Joe's Software Solutions
                  </div>
                  <div className="text-white">Web Developer | Trainer</div>
                  <div className="text-white">Dec 2018 to March 2020</div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 -top-10">
              <img
                src={roadmap}
                className="hidden md:block h-auto w-auto object-contain"
              />
            </div>
          </div>
          <div className="">
            <img
              src={roadmap}
              className=" block md:hidden h-auto w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
