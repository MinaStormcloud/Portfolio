import React from "react";
import { skills } from "../data";

export default function Skills() {
    return(
        <section id="skills" style={{marginLeft:'9rem'}}>
         <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">             
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-blue-900 mb-4">
              My Skills
              </h1>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
             {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
               <div className="bg-gray-900 rounded flex p-4 h-full items-center">                
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
               </div>
              </div>
             ))}
            </div>     
         </div>
        </section>
    );
}