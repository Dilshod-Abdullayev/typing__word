import React, { useEffect, useLayoutEffect, useState } from "react";
import Input from "./Input";
import Time from "./Time";
import "../App.css";
export default function Word() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => setText(data));
    console.log("render");
  }, [count]);
  return (
    <div className="word">
      <h2 className="result">Siz {count} so'z topdingiz</h2>
      {console.log(text.word)}
      <Time />
      {text && <Input setcount={setCount} data={text[0]} />}
    </div>
  );
}
