
import Image from "next/image";
import React from "react";

interface propsType {
    title:string;
    desc:string;
    img:string;
    tags:string[];
}

const Card: React.FC<propsType> = ({title,desc,img,tags}) => {
  return (
    <div className="border border-white w-[250px]  sm:w-[250px]" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
        <div>
            <Image 
            className="w-[250px]  sm:w-[250px] h-auto"
            src={img}
            width={350}
            height={100}
            alt={title}
            />
        </div>

        <div className="p-4 space-y-4">
        <div className="text-4xl font-extralight">{title}</div>
        <div>{desc}</div>
        <div>
        {tags.map(el => <div className="tags" key={el}>
            {el}
        </div>
            )}
        
        </div>
        </div>
    </div>
  );
};

export default Card;
