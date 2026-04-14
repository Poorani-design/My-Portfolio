import React from "react";
import hero from "../../assets/main_girl.png";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row py-3 justify-between my-6  content-center transparent bg-cover items-center bg-center z-10" >
        <div className="md:w-1/2 px-4 flex flex-col gap-1 justify-center content-center">
          <div className="heading-3">Full Stack Developer</div>
         
            <div className="heading-1 text-yellow">6+ YEARS CRAFTING</div>
            <div className="heading-3">DIGITAL EXPERIENCES:</div>
            <div className="heading-2">
              FRONTEND TO <span className="text-yellow heading-1 font-bold">FULL STACK</span>
            </div>
            <div className="text-muted">Designing & building modern, user-friendly web applications</div>
            <a href='#projects' ><button className=" text-left mt-5 btn-primary ">Explore my work</button></a>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src={hero}
            alt="Poorani Gunasekaran"
            className="object-cover  rounded-full "
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
