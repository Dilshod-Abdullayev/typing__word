import React from "react";
import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(60);
  useEffect(() => {
    setInterval(() => setTime(time - 1), 1000);
    console.log("render");
  }, []);
  return (
    <div>
      <h1>Sizda qolgan vaqt {time} </h1>
    </div>
  );
};

export default Time;
