import { Box, Collapse, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import React from 'react'
import MovieCard from '../Components/MovieCard'
import { data, movieTypesData } from '../data'
function Home() {
    const [open, setOpen] = React.useState(true)

    const handleClick = () => {
        setOpen(!open)
    };
    return (
        <Box display='flex' justifyContent='space-around'>
            <List
                sx={{ display: { xs: 'none', sm: 'block' }, width: '20%', bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Movies Menu
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemText primary="Top trending" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Top new movies" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Types" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {movieTypesData.map((mtd) => (
                            <ListItemButton key={mtd.id} sx={{ pl: 4 }}>
                                <ListItemText primary={mtd.type} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
            <Box sx={{ width: { xs: '100%', sm: '80%' }, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#1c1c1c' }}>
                {data.map((m) => (
                    <MovieCard key={m.id} m={m} />
                ))}
            </Box>
        </Box>
    )
}

export default Home