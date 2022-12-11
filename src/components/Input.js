import React from "react";
export default function Input({ data, setcount }) {
  function handle(e) {
    if (data == e.target.value) {
      setcount((prev) => prev + 1);
      e.target.value = "";
    }
  }

  return (
    <div>
      <h1>{data}</h1>
      <input onChange={handle} type={"text"} />
    </div>
  );
}
