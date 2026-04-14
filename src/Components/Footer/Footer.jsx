import React from "react";
import { IoCloudDownload } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";

import linkedin from "../../assets/icons/linkedin.png";
// import twitter from "../../assets/icons/twitter.png";
import facebook from "../../assets/icons/facebook.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import gmail from "../../assets/icons/gmail.png";
import instagram from "../../assets/icons/instagram.png";
import phone from "../../assets/icons/phone.png";
import git from "../../assets/icons/git.png";
import bitbucket from "../../assets/icons/bitbucket.png";
// import video from "../../assets/icons/video.png";
import resume from "../../assets/resume/POORANI.docx";

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/poorani-gunasekaran-dev/",
      icon: linkedin,
    },
    {
      id: 2,
      name: "GitHub",
      url: "https://github.com/poorani-design",
      icon: git,
    },
    // {
    //   id: 3,
    //   name: "Twitter",
    //   url: "https://twitter.com/poorani_gunasekaran",
    //   icon: twitter,
    // },
    {
      id: 4,
      name: "Facebook",
      url: "https://www.facebook.com/Arulpoorani",
      icon: facebook,
    },
    {
      id: 5,
      name: "WhatsApp",
      url: "https://wa.me/8526021884",
      icon: whatsapp,
    },
    {
      id: 6,
      name: "Gmail",
      url: "mailto:arulpoorani88@gmail.com",
      icon: gmail,
    },
    {
      id: 7,
      name: "Instagram",
      url: "https://www.instagram.com/pooranivijaynila/",
      icon: instagram,
    },
    { id: 9, name: "Phone", url: "tel:+918526021884", icon: phone },
    {
      id: 10,
      name: "Bitbucket",
      url: "https://bitbucket.org/poorani_fed_1997/",
      icon: bitbucket,
    },
    // { id: 11, name: "Video", url: "", icon: video },
  ];
  return (
    <footer>
      <div>
        <h1 className="heading-1   uppercase font-bold text-center my-3 mb-8 gap-2 leading-relaxed py-4">
          Ready to create Something <span className="text-teal">Amazing ?</span>
        </h1>
        <div className="flex  flex-col sm:flex-row justify-center gap-10  mx-20 md:mx-auto my-4 ">
          <a href={resume} download>
            <div className="flex border  border-gray-700  rounded-full backdrop-blur-md bg-teal-800 px-10 py-2 justify-center items-center gap-2 font-semibold  btn-transparent">
              Download My resume <IoCloudDownload className="text-3xl" />
            </div>
          </a>
          <a href="tel:+91 8526021884">
            <div className="btn btn-secondary flex justify-center items-center">
              Get In Touch <MdOutlineTouchApp className="text-3xl" />
            </div>
          </a>
        </div>
        {/* <div className='hidden md:block border w-10/12 backdrop-blur-md border-gray-700 -z-10 absolute md:top-35 lg:top-37 mx-[20%]'></div> */}
      </div>
      <div className="my-10">
        <h1 className="text-muted  text-center uppercase font-bold my-3 mb-8 gap-2 leading-relaxed py-4">
          Let's Connect <span className="text-teal">Together</span>
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] justify-items-center md:w-[40%] lg:w-[30%] sm:w-[50%] mx-auto">
          {socialMedia.map((social) => {
            return (
              <div
                className="flex flex-col align-center justify-center content-center "
                key={social.id}
              >
                <a
                  key={social.id}
                  href={social.url}
                  className="drop-shadow-sm hover:drop-shadow-yellow-500 transition duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="text-2xl m-2 object-cover h-10 w-10"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <section className="dark:bg-white dark:text-black bg-gray-900 text-white text-sm py-4 text-center flex flex-row gap-2 px-30 justify-between">
        <div className="">
          Developed by{" "}
          <span className="text-yellow-500 font-bold ">
            Poorani Gunasekaran
          </span>
        </div>
        <div>Copyright &copy; 2026 All rights reserved.</div>
      </section>
    </footer>
  );
};

export default Footer;
