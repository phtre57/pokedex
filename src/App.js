import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from './AppBar/AppBar';
import PokemonCard from './Pokemon/PokemonCard'
import './App.css';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  grid: {
    flexGrow: 1,
    display: 'center',
    paddingTop: '100px',
    padding: theme.spacing.unit * 5,
    justifyContent: 'center'

  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: 'inline',
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
    paddingTop: '100px',
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {
  state = {
      pokemon: [],
      limitPokemon: 'limit=150'
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?" + this.state.limitPokemon)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            pokemon: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render (){
      const { classes } = this.props;
      return (
          <div className={classes.root}>
            <AppBar/>
            <Grid container className={classes.grid} spacing={16}>
                {this.state.pokemon.map((pokemon, index) => {
                    return <PokemonCard key={pokemon.url} url={pokemon.url}/>
                })}
            </Grid>
          </div>
      );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
