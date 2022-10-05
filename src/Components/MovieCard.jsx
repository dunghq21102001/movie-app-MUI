import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function MovieCard({ m }) {

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + ' . . .'
        } else {
            return str
        }
    }
    return (
        <>

            <Card sx={{ width: { xs: '100%', sm: '40%', md: '30%' }, marginTop: '30px' }}>
                <Link to={`/movieDetail/${m.id}`}>
                    <CardMedia
                        component="img"
                        alt={m.title}
                        height="240"
                        image={m.image}
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {truncateString(m?.title, 30)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {truncateString(m?.des, 80)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <Link style={{ textDecoration: 'none', color: '#3f76db' }} to={`/movieDetail/${m.id}`}>Detail</Link>
                    </Button>
                    <Button size="small">Information</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default MovieCard