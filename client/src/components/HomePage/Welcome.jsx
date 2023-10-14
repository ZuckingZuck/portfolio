import React, { useEffect, useState } from "react";

const Welcome = () => {
  const text = "Hello World...";
  const [a, setA] = useState("");
  const [sayi, setSayi] = useState(0);
  useEffect(() => {
    if (a.length > text.length) {
      setSayi(0);
      setA("");
    }
    setTimeout(() => {
      setA(a + text[sayi]);
      setSayi(sayi + 1);
    }, 150);
  }, [a, sayi]);
  return (
    <div className="flex justify-between mt-5">
      <div className="ml-28 mt-5">
        <img src="img/programming.svg" alt="" />
      </div>
      <div className="max-w-[900px] mt-5 mr-28 text-white">
        <div className="bg-gray-700 w-[650px] h-[100px] p-5 rounded text-2xl mt-20 mr-20">
          <p className="text-5xl">{`console.log("${a}")`}</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
