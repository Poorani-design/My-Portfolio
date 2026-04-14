import React from "react";

import angular from "../../assets/skills/angular.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import node from "../../assets/skills/node.png";
import express from "../../assets/skills/express.png";
import mongo from "../../assets/skills/mongo.png";
import javascript from "../../assets/skills/javascript.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import sql from "../../assets/skills/sql.png";
import mysql from "../../assets/skills/mysql.png";
import typescript from "../../assets/skills/typescript.png";
import tailwindcss from "../../assets/skills/tailwindcss.png";
import git from "../../assets/skills/github.png";
import postgresql from "../../assets/skills/postgresql.png";
import bitbucket from "../../assets/skills/bitbucket.png";
import cicd from "../../assets/skills/cicd.png";
import api from "../../assets/skills/api.png";

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", logo: html },
    { id: 2, name: "CSS", logo: css },
    { id: 3, name: "JavaScript", logo: javascript },
    { id: 4, name: "Bootstrap", logo: bootstrap },
    { id: 5, name: "Tailwind CSS", logo: tailwindcss },
    { id: 6, name: "Angular", logo: angular },
    { id: 7, name: "React", logo: react },
    { id: 8, name: "Typescript", logo: typescript },
    { id: 9, name: "SQL query", logo: sql },
    { id: 10, name: "API", logo: api },
    { id: 11, name: "Node.js", logo: node },
    { id: 12, name: "Express.js", logo: express },
    { id: 13, name: "MongoDB", logo: mongo },
    { id: 14, name: "MySQL", logo: mysql },
    { id: 15, name: "PostgreSQL", logo: postgresql },
    { id: 16, name: "Git", logo: git },
    { id: 17, name: "Bitbucket", logo: bitbucket },
    { id: 18, name: "CI/CD", logo: cicd },
  ];
  return (
    <>
      <section id="skills" className="h-full w-full">
        <div className="heading-1 text-center text-pink my-2 py-4 h-full w-full">
          My Skills
        </div>
        <div className="grid grid-cols-2 mx-5 content-center items-center sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {skills.map((e) => {
            return (
              <div key={e.id}>
                {/* <div className="backdrop-blur-sm shadow-pink-500 border-gray-500  border-3 hover:shadow-lg transition-all duration-300 rounded-full m-3 p-2 mb-2 flex flex-col items-center justify-center w-35 h-35"> */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl h-30 w-30 flex items-center justify-center hover:scale-105 mx-auto transition duration-300 border border-gray-700 hover:border-teal-600 shadow-lg shadow-black drop-shadow hover:shadow-teal-700">
                  <img
                    className="object-contain blur-none"
                    src={e.logo}
                    height="100"
                    width={100}
                    alt={e.name}
                  />
                </div>
                {/*
                  SKILLS PERCENTAGE LEVEL
                <div className="w-full bg-pink-700 h-2 mx-auto my-3 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: 80 + "%" }}
                  />
                </div> */}
                <div className="w-30 mx-auto text-center flex justify-center text-main font-semibold my-3">
                  {e.name}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
