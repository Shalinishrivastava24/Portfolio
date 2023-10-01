import React from "react"

const Skills = () => {
  return (
    <div className="container pt-32">
        <div className="grid md:grid-cols-2 gap-20 items-center" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <div>
                <h2 className="text-4xl font-black md:text-5xl">Technologies I work with......</h2>
               
            </div>
    <div className="grid grid-cols-3 font-thin text-white text-2xl sm:text-2xl">
        <div className=" space-y-2">
            <h2>Next.js</h2>
            <h2>Tailwind</h2>
            <h2>CSS</h2>
            <h2>React</h2>
        </div>

        <div className="space-y-2">
            <h2>Data Structures </h2>
            <h2>Algorithms</h2>
            <h2>MySQL</h2>
        </div>

        <div className="space-y-2">
            <h2>StarUML</h2>
            <h2>JScript </h2>
            <h2>Web Development </h2>
        </div>


    </div>
        </div>
      
    </div>
  )

  
};

export default Skills;
