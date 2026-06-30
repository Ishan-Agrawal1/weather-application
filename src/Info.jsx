import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Info.css'

export default function Info({info}) {
   return (
    <div className='InfoBox'>
        <h2>Weather Info</h2>
        <div className='CardContainer'>
            <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="175"
                image="https://images.unsplash.com/photo-1604424288891-7f0871867e09?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                    <p>Temperature : {info.temperature}&deg;C</p>
                    <p>Humidity : {info.humidity}</p>
                    <p>Min Temp : {info.tempMin}&deg;C</p>
                    <p>Max Temp : {info.tempMax}&deg;C</p>
                    <p>The weather feels like {info.feelslike}&deg;C</p>

                </Typography>
            </CardContent>
            </Card>
        </div>
    </div> 
    );
}