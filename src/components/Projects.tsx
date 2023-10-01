import React from "react";
import Heading from "./Heading";
import Card from "./Card";
const data = [
{
    id: 0,
    title:"Quiz Master",
    desc:" A basic Cpp functioning quiz game that will help you test your general knowledge",
    img:"/quiz-time.jpg",
    tags:["Cpp","Data Structures ", "Algorithm"],
},


{
    id: 1,
    title:"Frontend Code editor",
    desc:" A React.js project that will  help in creating, editing and mrunning a program ",
    img:"/front.png",
    tags:["HTML", "CSS","ReactJS" ,"Front-End Web Development"],
},

{
    id: 2,
    title:"Instagram Clone",
    desc:" A React native project that will  help in socialising people world wide ",
    img:"/insta.jpg",
    tags:[ "React Native", "Javascript", "Tailwind CSS", "Firebase"],
},

{
    id: 3,
    title:"Portfolio",
    desc:" A React and Next.Js project that will introduce myself ",
    img:"/bannner_jpg.jpg",
    tags:["Next.Js","React","Tailwind CSS"],
},


]

const Projects = () => {
  return (
    <div className="container pt-32">
        <Heading title="My Projects" />
      <div className="grid gap-9  xl:gap-y-8 md:grid-cols-1 lg:grid-cols-2  place-items-center">


        {data.map((el) => (
            <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags= {el.tags}
             />
        )) }
      </div>
    </div>
  )
}

export default Projects;
