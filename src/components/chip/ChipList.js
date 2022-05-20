import { useState, useEffect } from 'react';
import ChipItem from "./ChipItem";



function ChipList(props) {
    const [flag, setFlag] = useState(0);

    function changeFlag() {
        if (flag === 0) setFlag(1);
        else setFlag(0);
    }

    useEffect(() => {
        console.log("rendering2");
        // eslint-disable-next-line
    }, flag);

    console.log("list=", props.list);

    function onCancel(name) {
        const ind = props.list.indexOf(name);
        props.list.splice(ind, 1);
        props.tempFunc();
        changeFlag();
    }

    return (
        <div style={{ marginBottom: "1vh" }}>
            {
                props.list.map((item) => (
                    <ChipItem name={item} onCancel={onCancel} removeFromStr={props.removeFromStr} />

                ))
            }
        </div>
    )
}


export default ChipList;