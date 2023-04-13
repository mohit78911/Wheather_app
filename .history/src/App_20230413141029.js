import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const URL = "https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=e307084c4507dcec68f39adf684659b9&units=metric" 
  const getData = () =>{
    axios.get()
  }
  return (
    <>
    <h2>Hi,Mohit Suthar</h2>
    </>
  );
}

export default App;
