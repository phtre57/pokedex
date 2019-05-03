import React from 'react';

import './PokemonTypes.css';

const pokemonTypes = (props) => {
    let renderType = null;
    const type = props.type;

    if (type === 'normal'){
        renderType = (
            <div className='t-type type-normal'>NORMAL</div>
        );
    }

    if (type === 'fire'){
        renderType = (
            <div className='t-type type-fire'>FIRE</div>
        );
    }

    if (type === 'water'){
        renderType = (
            <div className='t-type type-water'>WATER</div>
        );
    }

    if (type === 'grass'){
        renderType = (
            <div className='t-type type-grass'>GRASS</div>
        );
    }

    if (type === 'electric'){
        renderType = (
            <div className='t-type type-electric'>ELECTRIC</div>
        );
    }

    if (type === 'ice'){
        renderType = (
            <div className='t-type type-ice'>ICE</div>
        );
    }

    if (type === 'fighting'){
        renderType = (
            <div className='t-type type-fighting'>FIGHTING</div>
        );
    }

    if (type === 'poison'){
        renderType = (
            <div className='t-type type-poison'>POISON</div>
        );
    }

    if (type === 'ground'){
        renderType = (
            <div className='t-type type-ground'>GROUND</div>
        );
    }

    if (type === 'flying'){
        renderType = (
            <div className='t-type type-flying'>FLYING</div>
        );
    }

    if (type === 'psychic'){
        renderType = (
            <div className='t-type type-psychic'>PSYCHIC</div>
        );
    }

    if (type === 'bug'){
        renderType = (
            <div className='t-type type-bug'>BUG</div>
        );
    }

    if (type === 'rock'){
        renderType = (
            <div className='t-type type-rock'>ROCK</div>
        );
    }

    if (type === 'ghost'){
        renderType = (
            <div className='t-type type-ghost'>GHOST</div>
        );
    }

    if (type === 'dark'){
        renderType = (
            <div className='t-type type-dark'>DARK</div>
        );
    }

    if (type === 'dragon'){
        renderType = (
            <div className='t-type type-dragon'>DRAGON</div>
        );
    }

    if (type === 'steel'){
        renderType = (
            <div className='t-type type-steel'>STEEL</div>
        );
    }

    if (type === 'fairy'){
        renderType = (
            <div className='t-type type-fairy'>FAIRY</div>
        );
    }

    return (
        <div className='type-container'>
            {renderType}
        </div>
    );
}

export default pokemonTypes;
