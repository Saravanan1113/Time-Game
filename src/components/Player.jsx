import { useState, useRef } from "react";

export default function Player() {
  const userInput = useRef();
  const [playerName, setPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  // let initialName = "unknown entity";
  // const changeHandler = (e) => {
  //   setSubmitted(false);
  //   setPlayerName(e.target.value);
  // };

  const clickHandler = () => {
    setPlayerName(userInput.current.value);
    userInput.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={userInput}
          type="text"
          // onChange={changeHandler}
          // value={playerName}
        />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
