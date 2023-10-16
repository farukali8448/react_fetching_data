import React, { useState } from "react";
import axios from "axios";
import ShowData from "./ShowData";


const WeatherFetch = () => {
  const [city, setcity] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
  });

  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c7e0d49b8adabff96148b2fff5b3da82`
      )
      .then((response) => {
        console.log(response.data)
        setData({
            description:response.data.weather[0].description,
            temp:response.data.main.temp,
            temp_max:response.data.main.temp_max,
            temp_min:response.data.main.temp_min,
            humidity:response.data.main.humidity,
            sunrise:response.data.sys.sunrise,
            sunset:response.data.sys.sunset,
            country:response.data.sys.country,

        })
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <div className="container text-center my-2">
      <h1>Weathers App Using React JS</h1>

      <input
        type="text"
        className="form-control my-3"
        value={city}
        onChange={(e) => {
          setcity(e.target.value);
        }}
        placeholder="Search Your City......."
      />
      <button
        className="btn btn-primary my-2"
        type="submit"
        onClick={handleClick}
      >
        Fetch data
      </button>
</div>

<ShowData text={data}></ShowData>
    </>
  );
};

export default WeatherFetch;
