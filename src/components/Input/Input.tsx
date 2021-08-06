import React, { useCallback, useState } from "react";
import { Button, Grid, Paper, TextField, WithStyles } from "@material-ui/core";
import styles from './styles';
import { Player } from "../../types/player";

type Props = {
    addPlayers: (player: Player) => void;
} & WithStyles<typeof styles>;

const initialPlayer = {
    name: '',
    points: 0
}

const Input: React.FC<Props> = (props) => {
    const {
        classes,
        addPlayers
    } = props;

    const [player, setPlayer] = useState<Player>(initialPlayer)

    const handlePlayerChange = useCallback(
        ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
            if (name) {
                setPlayer((prevPlayer: Player) => ({
                    ...prevPlayer,
                    [name]: value,
                }));
            }
        }, [])

    const addNewPlayer = () => {
        addPlayers(player)
        setPlayer(initialPlayer)
    }

    return (
        <Grid item xs={6} sm={6}>
            <Paper className={classes.inputPaper}>
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}
                        value={player.name}
                        onChange={handlePlayerChange}
                        id="outlined-basic"
                        label="Player name"
                        variant="outlined"
                        name='name'
                    />
                </Grid >
                <Grid item xs={12}>
                    <TextField
                        className={classes.input}

                        type='number'
                        value={player.points}
                        onChange={handlePlayerChange}
                        id="outlined-basic"
                        label="Player score"
                        variant="outlined"
                        name='points'
                    />
                </Grid >
                <Button onClick={addNewPlayer}>
                    add Player
                </Button>
            </Paper>
        </Grid>
    )

}

export default React.memo(Input);