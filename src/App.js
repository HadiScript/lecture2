import React, { useState } from "react";
import Heading from "./App/Heading";

const data = [
  {
    name: "hadi",
    age: "23",
    status: "developer",
  },
  {
    name: "Wali",
    age: "23",
    status: "Python Developer",
  },
  {
    name: "Sherazi",
    age: "20",
    status: "AI Developer",
  },
];

const App = () => {
  const [list, setlist] = useState(data);

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [age, setAge] = useState(0);

  const addElementInListArr = () => {
    const newPerson = {
      name,
      age,
      status,
    };

    setlist([...list, personalbar]);
  };

  return (
    <div className="container">
      <Heading />

      <input className="box inputs" placeholder="type something 🤌" />

      <button className="box btns" onClick={addElementInListArr}>
        Add ELE
      </button>

      {list.map((x) => {
        return (
          <div className="box">
            {" "}
            {x.name} - {x.status} - {x.age}{" "}
          </div>
        );
      })}
    </div>
  );
};

export default App;
