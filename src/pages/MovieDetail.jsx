import { Box, Button, CardMedia, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { data, movieSomingSoonData } from '../data'
function MovieDetail() {
  const param = useParams()
  const movieId = param.id
  const movie = data.find((d) => {
    return d.id === movieId
  })
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginBottom: '20px' }}>
      <Box sx={{ width: { xs: '100%', md: '66%' }, backgroundColor: '#1c1c1c', padding: '0 20px 20px 20px' }}>
        <Box sx={{ position: 'relative', width: '100%' }}>
          <CardMedia
            component="img" sx={{ width: '100%', display: 'block', margin: '30px auto', userSelect: 'none' }}
            alt={movie.title}
            image={movie.image}
          />
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', position: 'absolute', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.6)', paddingTop: '10px', paddingBottom: '10px' }}>
            <Button sx={{ backgroundColor: 'green', width: { xs: '35%', sm: '20%' }, color: 'white' }}>Watch</Button>
            <Button sx={{ backgroundColor: 'red', width: { xs: '35%', sm: '20%' }, color: 'white' }}>Download</Button>
          </Box>
        </Box>
        <Typography variant='h5' sx={{ color: '#fff', width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          Name: {movie.title}
        </Typography>
        <Typography variant='h5' sx={{ color: '#fff', width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          Nation: {movie.nation}
        </Typography>
        <Typography variant='h5' sx={{ color: '#fff', width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          Year: {movie.year}
        </Typography>
        <Typography variant='subtitle1' sx={{ color: '#fff', width: '100%', textAlign: { xs: 'center', sm: 'left' } }}>
          Description: {movie.des}
        </Typography>
        <Stack spacing={1} sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Typography variant='h6' sx={{ color: 'white', marginTop: '8px', marginRight: '5px' }}>
            Rating:
          </Typography>
          <Rating name="half-rating-read" defaultValue={movie.star} precision={1} readOnly />
        </Stack>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' }, width: '26%', backgroundColor: '#1c1c1c' }}>
        <Typography variant='h5' textAlign='center' color='white' marginTop='25px' marginBottom='10px'>
          Movies Coming Soon
        </Typography>
        <Box width='100%'>
          {movieSomingSoonData.map((mcs) => (
            <Box key={mcs.id} width='100%' sx={{display:'flex'}}>
              <CardMedia component='img' src={mcs.image} alt={mcs.title} sx={{width:'40%', padding:'0 10px', marginBottom:'10px'}} />
              <Box>
                <Typography variant='h6' color='white'>{mcs.title}</Typography>
                <Typography variant='h6' color='white'>{mcs.year}</Typography>
              <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={mcs.star} precision={1} readOnly />
              </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box >
  )
}

export default MovieDetail