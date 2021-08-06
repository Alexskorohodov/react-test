import { Theme, createStyles } from '@material-ui/core';

const style = (theme: Theme) => createStyles({
  leaderboardPaper: {
    padding: 20,
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentText: {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 55,
  },
  orange: {
    background: 'linear-gradient(65.75deg, #DB5C0E 0.06%, #FFA166 98.73%)',
    color: 'white',
  },
  grey: {
    background: '#8E8B99',
    color: 'white',
  },
  white: {
    background: '#FEFEFE',
    color: 'black',
  },
  // leaderboardPaper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }
  input: {
    margin: 5
  }
});

export default style
