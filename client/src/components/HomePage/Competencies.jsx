import React from "react";
import Competencie from "./Competencie";
const Competencies = () => {
  return (
    <div className="flex flex-col items-center md:container mx-auto mt-10">
      <div className="bg-gray-800 text-center text-white text-2xl py-3 px-6 md:w-full font-bold rounded">
        My Competencies
      </div>
      <div className="comps-group items-center mt-5 grid grid-cols-1  sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Competencie
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          title="React"
          desc="I have experience with React about six months."
        />
        <Competencie
          img="https://logowik.com/content/uploads/images/nodejs.jpg"
          title="NodeJs"
          desc="I have experience with NodeJs about three years."
        />
        <Competencie
          img="https://miro.medium.com/v2/resize:fit:1400/1*f7ztMaMM0etsFHpEfkdiwA.png"
          title="ExpressJs"
          desc="I have experience with ExpressJs about three years."
        />
        <Competencie
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/480px-Git_icon.svg.png"
          title="Git"
          desc="I have experience with Git about three months."
        />
        <Competencie
          img="https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp"
          title="MongoDB & Mongoose"
          desc="I have experience with MongoDB about three years."
        />
      </div>
    </div>
  );
};

export default Competencies;
