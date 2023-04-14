// import logo from "./logo.svg";
import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import Title from "./Title";
import TextArea from "./TextArea";
import Data from "./Data";
function WheatherData() {
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
        <Title title="Hi,Wheather Checking App" />
        <br />
        <TextArea search={search} setsearch={setSearch} />
        <br />
        <Data data={data} />
      </div>
    </>
  );
}

export default WheatherData;
