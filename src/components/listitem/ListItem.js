import { useState, useEffect } from 'react';
import Frame from 'react-frame-component';
import UserForm from "../userForm/UserForm";
import classes from './ListItem.module.css';
import ListCollection from './ListCollection';
import SearchBox from '../search/SearchBox';
import CustomIframe2 from '../iframe/CustomIframe2';

function ListItem() {
    const [flagAdd, setFlagAdd] = useState();
    const [flagDelete, setFlagDelete] = useState();
    const [finalList, setFinalList] = useState([]);

    function flagChangeAdd(boolTemp) {
        if (flagAdd === 1) {
            setFlagAdd(0);
        }
        else {
            setFlagAdd(1);
        }
    }
    function flagChangeDelete(boolTemp) {
        if (flagDelete === 1) {
            setFlagDelete(0);
        }
        else {
            setFlagDelete(1);
        }
    }

    useEffect(() => {
        console.log("render again");
        // eslint-disable-next-line
    }, [flagAdd, flagDelete, finalList])



    function chipListDedo(chipList) {
        setFinalList(chipList);
        setFlagAdd(0);
    }
    // eslint-disable-next-line
    const res="";
    function addKardo(){
        // eslint-disable-next-line
        res=localStorage.getItem('chipItems');
        setFlagAdd(0);
    }

    return (
        <div>
            <div className={classes.mainArea}>
                <div>
                    <h2>Customer Success Managers</h2>
                    <SearchBox chipListFunc={chipListDedo} addKardo={addKardo} />

                    <div className={classes.finalList}>
                        {
                            <CustomIframe2 Data={finalList}/>
                        }

                    </div>
                </div>
            </div>
            <div className={classes.sideFunc}>

                <UserForm funcAdd={flagChangeAdd} funcDelete={flagChangeDelete} />
                <Frame className={classes.frame}>
                    {<ListCollection func={flagChangeDelete} />}
                </Frame>

            </div>
        </div>
    )

}

export default ListItem;