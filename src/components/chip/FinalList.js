import { useState, useContext } from 'react';
import CustomIframe from '../iframe/CustomIframe'


const FinalList = (props) => {

    const info = localStorage.getItem(props.name);
    function flagchange() {
        props.func();
    }

    return (
        <div>
            <p>{info}</p>
            {
                flagchange()
            }
        </div>
    )
}

export default FinalList;