import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000";
   
    let HOT_URL = "https://media.istockphoto.com/id/1318767834/photo/double-exposure-portrait-of-young-fitness-woman-hand-wiping-sweat-and-summer-heat-wave-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gug87122xSg-t7LtNRPnyfE0hc2Igg4Dxe62X5qJVec=";
    let COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";
    let RAIN_URL = "https://images.unsplash.com/photo-1501615235604-c0a564831467?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxyYWluJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                              ? RAIN_URL
                              : info.temp > 15
                              ? HOT_URL
                              : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 80
                              ? <ThunderstormIcon />
                              : info.temp > 15
                              ? <SunnyIcon />
                              : <AcUnitIcon />
                        }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temperature :  {info.temp}&deg;C</div>
                        <p>Humidity :  {info.humidity}</p>
                        <p>Min Temp :  {info.tempMin}&deg;C</p>
                        <p>Max Temp :  {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>        
        </div>
    )
};