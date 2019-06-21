import React from 'react';

import Typography from '@material-ui/core/Typography';

const pokemonBaseStats = (props) => {

    return (
        <div>
            {props.stats != null ? props.stats.map((stat) => {
                return (
                    <Typography color="textPrimary" gutterBottom>
                        {stat.stat.name}: {stat.base_stat}
                    </Typography>
                );
            }) : null}
        </div>
    );
}

export default pokemonBaseStats;
