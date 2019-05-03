import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './PokemonAvatar.css';

const pokemonAvatar = (props) => {
    let renderAvatar = null;
    const type = props.type;
    const name = props.name;

    if (type === 'normal'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-normal'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'fire'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-fire'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'water'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-water'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'grass'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-grass'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'electric'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-electric'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'ice'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-ice'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'fighting'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-fighting'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'poison'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-poison'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'ground'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-ground'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'flying'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-flying'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'psychic'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-psychic'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'bug'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-bug'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'rock'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-rock'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'ghost'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-ghost'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'dark'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-dark'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'dragon'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-dragon'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'steel'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-steel'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    if (type === 'fairy'){
        renderAvatar = (
            <Avatar aria-label="P" className='type-fairy'>
              {name.charAt(0).toUpperCase()}
            </Avatar>
        );
    }

    return (
        <div>
            {renderAvatar}
        </div>
    );
}

export default pokemonAvatar;
