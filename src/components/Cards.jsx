import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards({data}) {
    return (
        <>
        <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={data.imgdir}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.details}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Try out</Button>
            </CardActions>
        </Card>
        </>
    )
}
export default Cards;