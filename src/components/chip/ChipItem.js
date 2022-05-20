import * as React from 'react';
import Chip from '@mui/material/Chip';
import classes from './ChipItem.module.css';


export default function DeletableChips(props) {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
        props.onCancel(props.name);
        props.removeFromStr(props.name);
    };

    return (

            <div className={classes.mainBox}>
                <Chip className={classes.chip} label={props.name} onDelete={handleDelete} />
            </div>

    );
}