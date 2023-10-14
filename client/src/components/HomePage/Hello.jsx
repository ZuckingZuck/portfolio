import React, { useState, useEffect } from "react";

const Hello = () => {
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
    <div className="hidden md:inline-block bg-gray-800 w-[660px] min-w-[340px] h-[100px] p-5 rounded text-2xl mt-16 mr-20 text-green-600">
      <p className="md:text-5xl">{`console.log("${a}");`}</p>
    </div>
  );
};

export default Hello;
