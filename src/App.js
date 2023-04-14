import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { TextField } from "@mui/material";

function App() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const URL = `https://api.weatherapi.com/v1/current.json?key=7ca2e0536cbb4412aa293215231204&q=${search}&aqi=no`;

  const getData = () => {
    axios
      .get(URL)
      .then((resp) => setData(resp.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <br />
      <div className="container">
        <h2 className="fontfamily">Hey, Weather Checking App</h2>
        <br />

        <TextField
          fullWidth
          label="Enter Your Location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        <br />
        {data.location && <div>CityName: {data.location.name}</div>}
        {data.current && <div>Temp Of City: {data.current.temp_c}</div>}
        {data.current && (
          <div>
            Temp Of City: {data.current.temp_c}
            Icon:
            <img src={data.current.condition.icon} alt="Weather Icon" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
