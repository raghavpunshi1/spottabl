import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CustomIframe from '../iframe/CustomIframe';
import ChipList from '../chip/ChipList';

import classes from './SearchBox.module.css'

function SearchBox(props) {

    const [wordEntered, setWordEntered] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [finalStrArray, setFinalStrArray] = useState([]);
    const [flag, setFlag] = useState(0);
    const [flagVar, setflagVar] = useState(1);

    if (localStorage.length > 0) {
        var obj = {};
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) !== 'chipItems')
                obj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
        }
        var result = Object.keys(obj).map((key) => [key, JSON.parse(obj[key])]);
    }

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = result.filter((value) => {

            return (value[0].toLowerCase().includes(searchWord.toLowerCase()) || value[1][0][2].toLowerCase().includes(searchWord.toLowerCase()));
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
        setFinalStrArray([]);
        bhejde();
    };
    function changeFlag() {
        if (flag === 0) setFlag(1);
        else setFlag(0);
    }


    useEffect(() => {
        console.log("updating..");;
    }, [finalStrArray, flag]);

    function removeFromStr(name) {
        console.log("kardo remove=", name);
        console.log("remove karne pe=", finalStrArray);
        props.chipListFunc(finalStrArray);
        bhejde();
    }

    function addToStr(str) {
        setFinalStrArray([...finalStrArray, str]);
        props.chipListFunc(finalStrArray);
        bhejde();
    }
    localStorage.setItem('chipItems', (finalStrArray))


    function bhejde() {
        changeFlag();

    }

    function clearStr() {
        props.addKardo();
        localStorage.removeItem('chipItems');
        setFinalStrArray([]);
        setflagVar(0);
    }


    function tempFunc() {
        props.chipListFunc(finalStrArray);
    }

    return (
        <div>
            <ChipList list={finalStrArray} tempFunc={tempFunc} removeFromStr={removeFromStr} />
            <div>
                <div className={classes.mainBox}>
                    <input className={classes.inputBox} type="text" placeholder='Search....'
                        value={wordEntered}
                        onChange={handleFilter}
                    ></input>
                    <div className={classes.searchIcon}>
                        {filteredData.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}
                    </div>
                    <div>
                        <button className={classes.addButton} onClick={clearStr}>Add CSM</button>
                    </div>
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div>

                    {flagVar &&
                        <CustomIframe Data={filteredData} StrFunc={addToStr}>
                        </CustomIframe>
                    }
                </div>
            )}
        </div>
    )
}


export default SearchBox;