import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Rightbar from '../Components/Rightbar'
import { newsAboutMovies } from '../data'
function News() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
      <Rightbar />
      <Box sx={{ width: '75%', backgroundColor: '#e1c9c9', padding: '10px' }}>
        <Box sx={{ width: '100%', padding: '10px 0' }}>
          <CardMedia
            sx={{ width: '100%', margin: '0 auto', cursor: 'pointer' }}
            component='img'
            src='https://media.cnn.com/api/v1/images/stellar/prod/221006163039-super-mario-bros-movie.jpg?c=original'
            alt='news-img'
          />
          <Typography width='80%' marginLeft='10%' sx={{ fontSize: { xs: '14px', sm: '30px' } }}>
            The Super Mario Bros. Movie: Visit The Mushroom Kingdom In The First Teaser
          </Typography>
        </Box>
        <hr />
        {newsAboutMovies.map((n) => (
          <Box key={n.id} sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginBottom: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
            <CardMedia
              sx={{ width: { xs: '100%', sm: '50%' }, cursor: 'pointer' }}
              component='img'
              src={n.newsImg}
              alt='news-img'
            />
            <Typography variant='h5' sx={{ width: { xs: '100%', sm: '50%' }, fontSize: { xs: '12px', sm: '20px' } }} marginLeft='10px'>
              {n.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default News