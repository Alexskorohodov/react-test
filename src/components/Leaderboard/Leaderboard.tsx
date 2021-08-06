import React, { Fragment } from "react";
import { Button, Grid, Paper, TextField, WithStyles } from "@material-ui/core";
import styles from './styles';
import { Player } from "../../types/player";

type Props = {
    players: Player[];
    changeScore: (points: number, index: number) => void;
    deletePlayer: (index: number) => void;
} & WithStyles<typeof styles>;

const Leaderboard: React.FC<Props> = (props) => {
    const {
        classes,
        players,
        changeScore,
        deletePlayer,
    } = props;

    const handlePlayerScoreChange = ({ target: { value, id } }: React.ChangeEvent<HTMLInputElement>) => {
        changeScore(parseInt(value) || 0, parseInt(id))
    }

    return (
        <Grid item xs={6}>
            <Paper className={classes.leaderboardPaper}>
                {players.map((player: Player, index) => (
                    <Fragment key={index}>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input}
                                disabled
                                value={player.name}
                                id="outlined-basic"
                                label="Player name"
                                variant="outlined"
                                name='name'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.input}
                                type='number'
                                value={player.points}
                                onChange={handlePlayerScoreChange}
                                id={index.toString()}
                                label="Player score"
                                variant="outlined"
                                name='points'
                            />
                        </Grid>
                        <Button onClick={() => deletePlayer(index)}>Delete</Button>
                    </Fragment>
                ))}
            </Paper>
        </Grid>
    )

}

export default React.memo(Leaderboard);