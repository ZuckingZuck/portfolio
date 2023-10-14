import React from "react";

const Introduce = () => {
  return (
    <div className="bg-gray-800 w-full max-w-[660px] min-w-[340px] p-5 rounded text-2xl text-gray-200 flex mt-5">
      <div className="mr-5 flex items-center">
        <img
          className="hidden md:inline-block rounded-full w-40 h-40 border-2"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Mithat's Profile"
        />
      </div>
      <div className="flex-1">
        <p className="mb-5 text-center">
          <span className="text-green-500">"</span> Hello, I'm Mithat, a 21-year-old programmer with 4 years of
          experience. I specialize in web development and am proficient in C#,
          JavaScript, Python, C/C++. I'm skilled in essential web technologies
          like Node.js, Express, React, and more. <span className="text-green-500">"</span>
        </p>
      </div>
    </div>
  );
};

export default Introduce;
