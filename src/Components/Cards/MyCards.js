import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function MyCards(props){
  const dataCards = props.data  
  return (
        <Grid container spacing={4}>
        {dataCards.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image= {card.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  '{card.title}'
                </Typography>
                <Typography>
                  '{card.text}''
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Veja Mais</Button>
                <Button size="small">Editar</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
}

export default MyCards;