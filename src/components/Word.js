import React, { useEffect, useLayoutEffect, useState } from "react";
import Input from "./Input";
export default function Word() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [time, setTime] = useState(null);
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => setText(data));
  }, [count]);
  useEffect(() => {
    setTimeout(() => {
      alert("helo");
    }, 8000);
  }, []);
  console.count("render");
  return (
    <div>
      <mark>{text.word}</mark>
      <h2>Siz {count} so'z topdingiz</h2>
      {text && <Input setcount={setCount} data={text[0]} />}
      <button>New word</button>
    </div>
  );
}
