import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Leaderboard from './components/Leaderboard';
import { Player } from './types/player';

const App: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([])

  const addPlayers = ({ name, points }: Player) => {
    const newPlayer = {
      name,
      points
    }
    setPlayers([...players, newPlayer])
  }

  const changeScore = (points: number, index: number) => {
    const playersCopy = [...players]
    playersCopy[index].points = points
    setPlayers(playersCopy)

  }

  const deletePlayer = (index: number) => {
    setPlayers(players.filter((player, currentIndex) => index !== currentIndex))
  }

  return (
      <Grid container spacing={3} >
        <Input
          addPlayers={addPlayers}
        />
        <Leaderboard
          players={players}
          changeScore={changeScore}
          deletePlayer={deletePlayer}
        />
      </Grid>
  )
}

export default App;
