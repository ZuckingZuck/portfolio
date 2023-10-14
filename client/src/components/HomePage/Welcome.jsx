import React from "react";
import Introduce from "./Introduce";
import Hello from "./Hello";

const Welcome = () => {
  
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:flex md:justify-between mt-5">
      <div className="md:ml-28 mt-5">
        <img src="img/programming.svg" className="min-w-[300px]" alt="" />
      </div>
      <div className="max-w-[900px] md:mr-28">
        <Introduce />
        <Hello />
      </div>
    </div>
  );
};

export default Welcome;
