// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data,setData]=useState({})

  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=sirohi&appid=e307084c4507dcec68f39adf684659b9&units=metric";
  const getData = () => {
    axios
      .get(URL)
      .then((resp) => setData(resp.data))
      .catch((error) => console.log(error));
  };
const newData
  useEffect(() => {
    getData();
  });
  return (
    <>
      <h2>Hi,Mohit Suthar</h2>
      <div>{data.name}</div>
      <div>{data.main.temp}</div>

    </>
  );
}

export default App;
