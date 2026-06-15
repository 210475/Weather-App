import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import Typography from '@mui/material/Typography';


 import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
  import AcUnitIcon from '@mui/icons-material/AcUnit';
  import SunnyIcon from '@mui/icons-material/Sunny';

 
export default function InfoBox({info}){
 
  

    const INIT_URL="https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=400";

  const Hot_URL="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg";
    const Cold_URL =
  "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg";

const Rain_URL =
  "https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg";

    return (
        <div className="InfoBox">
          
            <div className="CardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80
      ? Rain_URL
      : info.temp > 15
      ? Hot_URL
      : Cold_URL
  }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
           info.humidity>80 ?<ThunderstormIcon/>:info.temp>15?<SunnyIcon />:< AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' } } component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <br></br>
          <p>Humidity={info.humidity}</p>
          <br></br>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <br></br>
          <p>max Temp={info.tempMax}&deg;C</p>
          <br></br>
          
   <p>
    The weather can be described as <i>{info.weather}</i> and feels Like {info.feelsLike}&deg;C

   </p>

        </Typography>
      </CardContent>
     
    </Card>
</div>
        </div>
    )
}