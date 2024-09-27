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



function Portfolio() {
    const cardItem = [
        {
          id: 1,
          logo: mongo,
          name: "MongoDB_Projects",
        },
       
        {
          id: 2,
          logo: react,
          name: "ReactJS_Projects",
        },
        {
          id: 3,
          logo: js,
          name: "JavaScript_projects",
        },
        {
            id: 4,
            logo: css,
            name: "CSS",
        },
          {
            id: 5,
            logo: html,
            name: "HTML",
          },
      ];
  return (
        <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
        <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 ">
            {cardItem.map(({ id, logo, name }) => (
            <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 flex flex-col items-center "
                key={id}
            >
                <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                alt=""
                />
                <div>
                <div className="px-2 font-bold text-xl mb-2 mx-auto text-center">{name}</div>
                <p className="px-2 text-gray-700 text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                </div>
                <button className="bg-green-600 hover:bg-green-800 text-white font-bold px-4 py-2 rounded my-4 ">
                    GitHub Repo
                </button>
            </div>
            ))}
        </div>
        </div>
        <br />
        <hr />  
    </div>
    );
}

export default Portfolio