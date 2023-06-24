import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import React from 'react'
// import { DatePicker } from 'antd';

import { Button, Input } from 'antd'


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
   
      <br />
        <br />
        <h3> 
        Recipe Management App
        </h3>
        <br />
        <br />

        <Input size="small" width="20" placeholder="Search for Recipe" / >
        <br />
        <br />


        <Button type="primary" ghost> Add Recipe </Button>


        <br />
        <br />
        <br />
        <Button type="primary" ghost> Update Recipe </Button>
        <br />
        <br />
        <br />
        <Button type="primary" ghost> Delete Recipe </Button>
        <br />
        <br />
        <br />
        <Button type="primary" ghost> Show All Recipes </Button>


    </div>
  );
}

export default App;
