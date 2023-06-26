import React, { useContext, useState } from 'react'
import { ColorContext} from '../context/ColorContext'
import { PlayerContext } from '../context/PlayerContext'
import { FormControl, MenuItem, Select } from '@mui/material'

const SelectColor = () => {

    const { colors, setColors } = useContext(ColorContext)
    const { player, players, setPlayers } = useContext(PlayerContext)

    const [previousValue, setPreviousValue] = useState('');
    const [currentValue, setCurrentValue] = useState('none');


    const handleChange = (event) => {
        const selectedValue = event.target.value; // Get the selected value from the event
        const selectedColor = colors.find((color) => color.id == selectedValue)?.color; // Find the color based on the selected value
        setPlayers(players.map((p) => p.id === player.id ? {...player, color: selectedColor} : p))
        setColors(colors.map((color) => color.id == event.target.value || color.id == currentValue ? {...color, select: !color.select} : color))
        setPreviousValue(currentValue);
        setCurrentValue(event.target.value);
    };



  return (
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FormControl>
        <Select name="color" value={currentValue} onChange={handleChange}>
          <MenuItem value="none" disabled>
            Select a color
          </MenuItem>
          {colors.map((color) => (
            <MenuItem key={color.id} value={color.id} disabled={color.select}>
              {color.color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectColor
