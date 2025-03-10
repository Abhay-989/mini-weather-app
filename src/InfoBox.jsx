import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
  const INIT_URL=
  "https://media.istockphoto.com/id/1163968623/photo/commuters-cars-drive-through-fog-on-city-street-at-twilight.webp?a=1&b=1&s=612x612&w=0&k=20&c=jZ-pm1LeQYJdRsrhW7mEaguTrmAwKE7k4Zo81r8_Qp4=";
  
const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyfGVufDB8fDB8fHww";
const RAIN_URL="https://images.unsplash.com/photo-1558409057-bbe679023136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className='InfoBox'>
           <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 190 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp> 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp> 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color='text.secondary' component="span" >
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
 
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}