import React, { useRef, useState } from "react";
import cirle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";
import winSound from "../assets/win.mp3";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTac = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const soundRef = useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' class = "w-10 h-10 m-auto"/>`;

      data[num] = "x";

      setCount(count + 1);

      checkWin();
    } else {
      e.target.innerHTML = `<img src='${cirle_icon}' class = "w-10 h-10 m-auto" />`;

      data[num] = "o";

      setCount(count + 1);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `CONGRATULATION : <img src='${cross_icon}' class = "w-8 h-8 ml-2 mt-2 mr-1"/> WINS`;
      soundRef.current.play();
    } else {
      titleRef.current.innerHTML = `CONGRATULATION : <img src='${cirle_icon}' class = "w-8 h-8 ml-2 mt-2 mr-1"/> WINS`;
      soundRef.current.play();
    }
  };

  const reset = () => {
    location.reload();
  };

  return (
    <div className="container text-center">
      <h1
        className="mt-7 text-white flex justify-center items-center font-semibold md:text-3xl sm:text-2xl lg:text-4xl"
        ref={titleRef}
      >
        TIC TAC GAME IN <span className="pl-4 text-[#26ffcb]">REACT</span>
      </h1>
      <audio src={winSound} ref={soundRef}></audio>
      <div className="h-[400px] w-[564px] flex m-auto justify-center mt-2 items-center">
        <div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>

        <div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>

        <div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="flex h-25 w-25 bg-[#1f3540] rounded border border-[#0f1b21] cursor-pointer"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="w-50 h-15 bg-[#1f3540] text-2xl text-[#26ffcb] mt-6 mb-12 rounded-full items-center uppercase cursor-pointer -tracking-[-2px] font-medium border border-[#26ffcb]"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTac;
