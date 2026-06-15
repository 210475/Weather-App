import SearchBox from  "./SearchBox.jsx";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
    city:"Delhi",
    feelsLike:24.84,
    temp:25.05,
    temp_min:25.05,
    temp_max:25.05,
    humidity:47,
    weather:"haze",

 }

);

let updateInfo=(newInfo)=>{
    setweatherInfo(newInfo);
}

    return (
     <div style={{textAlign:"center"}}>
        <h2>Weather App </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
     </div>
    )
}