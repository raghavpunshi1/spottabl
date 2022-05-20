import classes from './CustomIframe2.module.css';
import SingleListItem2 from '../listitem/SingleListItem2';

function Check(props) {

    return (
        <div className={classes.mainBox}>
            {props.Data.slice(0, 15).map((value, key) => {

                return (
                    <div className={classes.resultitem}>
                        {console.log("hanji fer=",value)
                            
                        }
                        <SingleListItem2
                         name={value} 
                         post={JSON.parse(localStorage.getItem(value))[0][1]} 
                         email={JSON.parse(localStorage.getItem(value))[0][2]} 
                         addToStrFunc={props.StrFunc}/>
                    </div>
                );
            })}
        </div>
    )
}
export default Check;