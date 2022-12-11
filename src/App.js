import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Main from "./components/Main";
import "./App.css";
const App = () => {
  const [main, setMain] = useState(false);
  return (
    <div>
      <h1 className="text-center fs-1 animate-charcter">
        Assalomu alaykum🤩🤩.1 daqiqada qancha so'z yozishingizni sinab
        ko'ramizmi
      </h1>
      <TypeAnimation
        sequence={[
          "Yangi so'zlar",
          100,
          "Qiyin bo'lgan ammo foyda beruvchi",
          100,
          "Inglizcha so'zlar royhati",
          100,
          "Qani bo`lmasa ketdik.)))",
          200,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
      {setTimeout(() => {
        setMain(true);
      }, 2000)}
      <br />
      {main ? (
        <Link to={'./main'} class="button-72" role="button">
          Boshladik
        </Link>
      ) : (
        ""
      )}
      <Routes>
         <Route path="/main" element={<Main/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
