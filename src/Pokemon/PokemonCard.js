import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';
import red from '@material-ui/core/colors/red';

import PokemonTypes from '../PokemonType/PokemonTypes';
import PokemonAvatar from '../PokemonAvatar/PokemonAvatar';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 200
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardDivider:{
      padding: 15
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: '0',
    width: '150px',
    paddingTop: '56.25%' // 16:9
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  typeCardContent:{
      padding: '0px',
      paddingTop: '10px',
      display: 'flex',
      flexDirection: 'row'
  }

};

class pokemonCard extends Component{
    state = {
        isLoaded: false
    }

    componentDidMount() {
      fetch(this.props.url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              ...result,
              isLoaded: true
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: false,
              error: error
            });
          }
        )
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.cardDivider}>
                <Card className={classes.card}>
                    <CardHeader
                      avatar={
                          this.state.isLoaded ?
                              <PokemonAvatar
                                  name={this.state.name.charAt(0).toUpperCase()}
                                  type={typeof this.state.types[1] === 'undefined' ?
                                  this.state.types[0].type.name :
                                  this.state.types[1].type.name}/>:
                           null
                      }
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={this.state.isLoaded ?
                          this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1) :
                          null
                      }
                      subheader={this.state.id}
                    />

                    <div className={classes.details}>
                        <CardMedia
                          className={classes.media}
                          image={this.state.isLoaded ? this.state.sprites.front_default : null}
                          src={this.state.isLoaded ? this.state.sprites.front_default : null}
                        />
                    <CardContent className={classes.typeCardContent}>
                            {this.state.isLoaded ?
                                 this.state.types.map((type, index) => {
                                     return <PokemonTypes key={type.type.url} type={type.type.name}/>
                            }) : null }
                        </CardContent>
                    </div>

                    <CardContent>
                        <Typography className={classes.title} color="textPrimary" gutterBottom>
                            Extend
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }

}

pokemonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(pokemonCard);
