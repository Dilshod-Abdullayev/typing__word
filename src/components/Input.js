import React from "react";
import '../App.css'
export default function Input({ data, setcount }) {
  function handle(e) {
    if (data == e.target.value) {
      setcount((prev) => prev + 1);
      e.target.value = "";
    }
  }

  return (
    <div>
      <h1 className="word__new">{data}</h1>
      <input className="input" onChange={handle} type={"text"} />
    </div>
  );
}
