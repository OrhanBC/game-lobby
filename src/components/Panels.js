import React, { useState } from 'react'
import Panel from './Panel';
import { PlayerContext } from '../context/PlayerContext';
import { Grid } from '@mui/material';

const Panels = () => {

    const [players, setPlayers] = useState([
        {
            id: 1,
            color: ''
        },
        {
            id: 2,
            color: ''
        },
        {
            id: 3,
            color: ''
        },
        {
            id: 4,
            color: ''
        }
    ]);
  return (
    <Grid container direction='row' justifyContent='center' spacing={4} marginTop={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {players.map((player) => {
        return (
            <PlayerContext.Provider value = { {player, players, setPlayers } }>
                
                    <Panel key={player.id}/>
                
                
            </PlayerContext.Provider>
        )
      })}
    </Grid>
  )
}

export default Panels
