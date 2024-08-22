import React, { useEffect, useState } from 'react';
import './Jewellery.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css'

function Jewellery() {
  const [jewel, setJewel] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery').then((response) => response.json()).then((jewel) => {
      console.log('Fetched data:', jewel); // Log fetched data
      setJewel(jewel);
    }).catch((e) => {
      console.log("there is something wrong")
    })
  }, [])
  return (
    <div id='overall'>
      <h1><u>Jewellery</u></h1>
      <div  style={{ marginLeft:'40px'}}>
      {jewel && (
        <Grid container spacing={3} justifyContent="center" marginBottom={5} marginTop={1}>
          {jewel.map((top) => (
            <Grid item xs={12} sm={8} md={2} key={top.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: '#f5f5f5', // Light background for contrast
                  borderRadius: '15px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
                  transition: 'transform 0.2s', // Smooth hover effect
                  '&:hover': {
                    transform: 'scale(1.05)', // Slight scale on hover
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height:400,                
                    borderRadius: '15px 15px 0 0',
                    objectFit: 'contain',
                  }}
                  image={top.image}
                  title={top.title}
                />
                <CardContent sx={{ paddingBottom: '16px' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 'bold' }} // Bold title for emphasis
                  >
                    RM {top.price}
                  </Typography>
                  <Typography
                    id="desc"
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: '16px' }}
                  >
                    {top.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', paddingBottom: '16px' }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#1976d2', // Primary color button
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#1565c0', // Darker shade on hover
                      },
                    }}
                  >
                    <ShoppingCartIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: '#1976d2',
                      borderColor: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0', // Darker shade on hover
                        color: '#1565c0',
                      },
                    }}
                  >
                    More Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
          </div>
    </div>
  )
}

export default Jewellery