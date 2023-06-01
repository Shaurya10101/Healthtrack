import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from './data.json';

function Features() {
  return (
    <Grid container spacing={1}>
      {data.map((entry, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}>
            <CardMedia
              component="img"
              alt="card image"
              height="140"
              image={entry.imgdir}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {entry.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {entry.details}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Try out</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Features;
