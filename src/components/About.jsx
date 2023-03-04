import React from "react";

const About = () => {
  return (
  <div 
  name="about"
   className="w-screen h-screen bg-gradient-to-b from-gray-800 
  to-black text-white md:pb-0 pb-[30%]"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
    justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 
            border-gray-500">
                About
                </p>
        </div>

        <p className="text-xl mt-20">
        I'm very ambitious front-end developer looking for a role in established IT company
        with the opportunity to work with the latest technologies on challenging and diverse projects. I'm quitely confident, naturally curious, and perpetually working on improving my tech skills one design problem at a time. If I need to define myself in one sentence that would be a family person, my interests are finance,music,obsessed with tech!, sports fanantic, and health I love connecting with other people.
        </p>

        <br />

        <p className="text-xl">
           I'm a fellow with the Knowledge House in the Web Development Track acquiring skills in front-end technologies 
            as well as the back-end. To databses with Prisma and testing with postman to creating API app projects as well to deploy familiarity with railway,vercel, and netlify to successfully having my projects deployed.
        </p>
    </div>

    </div>
  );
};


export default About;