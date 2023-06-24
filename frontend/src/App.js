import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import React from 'react'
import addingRecipe from "./Components/addingRecipe";


function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>{data}</h1> 
      <addingRecipe/>      
    </div>
  );
}

export default App;
