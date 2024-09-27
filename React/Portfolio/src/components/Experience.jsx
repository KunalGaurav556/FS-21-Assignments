import React from 'react'
import css from '../assets/css.jpg'
import express from '../assets/express.png'
import node from '../assets/node.png'
import mongo from '../assets/mongodb.jpg'
import react from '../assets/reactjs.png'
// import springBoot from '../assets/springBoot.png'
import java from '../assets/java.png'
import js from '../assets/javascript.png'
import html from '../assets/html (1).png'

function Experience() {
    const cardItem = [
        {
          id: 1,
          logo: mongo,
          name: "MongoDB",
        },
        {
          id: 2,
          logo: express,
          name: "Express",
        },
        {
          id: 3,
          logo: react,
          name: "ReactJS",
        },
        {
          id: 4,
          logo: node,
          name: "NodeJS",
        },
        {
          id: 5,
          logo: js,
          name: "Python",
        },
        {
          id: 6,
          logo: java,
          name: "Java",
        },
        {
            id: 7,
            logo: css,
            name: "CSS",
        },
          {
            id: 8,
            logo: html,
            name: "HTML",
          },
      ];
  return (
    <div
    name="Experience"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
  >
    <div>
      <h1 className="text-3xl font-bold mb-5">Experience</h1>
      <p className="text-xl font-light ">
        I've more than 1 years of experience in below technologies....
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
        {cardItem.map(({ id, logo, name }) => (
          <div
            className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img src={logo} className="w-[150px] rounded-full" alt="" />
            <div>
              <div className="">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <br />
    <hr />
  </div>
);
}

export default Experience