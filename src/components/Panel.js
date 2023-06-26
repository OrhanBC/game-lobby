import React, {useContext} from 'react'
import { PlayerContext } from '../context/PlayerContext'
import SelectColor from './SelectColor'

import { Grid, Typography } from '@mui/material';

const Panel = () => {
    
    const { player } = useContext(PlayerContext)
    console.log(player.color)
  return (
    <Grid container item xs={12} sm={6} height='400px'  justifyContent='center'>
        <Grid item borderRadius='20px' backgroundColor={player.color} width='100%'>
            <Typography variant='h3'component='h2' align='center'>P{player.id}</Typography>
            <SelectColor/>
        </Grid>
      
    </Grid>
  )
}

export default Panel
