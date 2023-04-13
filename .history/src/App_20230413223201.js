// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  // const [newTemp, setNewTemp] = useState({});
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q=mu&appid=e307084c4507dcec68f39adf684659b9&units=metric";
  const getData = () => {
    axios
      .get(URL)
      .then((resp) => setData(resp.data))
      .catch((error) => console.log(error));
  };
  // const newData = () => {
  //   axios
  //     .get(URL)
  //     .then((response) => setNewTemp(response.data.main))
  //     .catch((error) => console.log(error));
  // };
  useEffect(() => {
    getData();
  });
  return (
    <>
      <h2>Hi,<br/>This Is Wheather App</h2>
      <div>CityName : {data.name}</div>
      {/* <div>Temp Of City : {data.main.temp}</div>
      <div>Min Temp Is : {data.main.temp_min}</div> */}
    </>
  );
}

export default App;
