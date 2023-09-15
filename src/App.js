import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Card from "./Components/Cardisplay";
import "bootstrap/dist/css/bootstrap.min.css";

export const myContext = createContext();

const App = () => {
  const [jsonData, SetjsonData] = useState([
    {
      title: "Feedbacks",
      description: "Some quick example text to build on the card title",
      feedbacks: "3 weeks ago",
    },
    {
      title: "Weekly Task",
      description: "Some quick example letter to built on the card Description",
      feedbacks: "1 week ago",
    },
    {
      title: "Lyrics",

      description: "Some small example to built on the card feedbacks",
      feedbacks: "6 weeks ago",
    },
  ]);

  return (
    <div>
      <myContext.Provider value={{ jsonData, SetjsonData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </myContext.Provider>
    </div>
  );
};

export default App;
