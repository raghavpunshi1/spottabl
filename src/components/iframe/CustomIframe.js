import classes from './CustomIframe.module.css';
import ResultItem from '../search/ResultItem';

function Check(props) {




    return (
        <div className={classes.mainBox}>
            {props.Data.slice(0, 15).map((value, key) => {

                return (
                    <div className={classes.resultitem}>
                        
                        <ResultItem name={value[1][0][0]} post={value[1][0][1]} email={value[1][0][2]} addToStrFunc={props.StrFunc}/>
                    </div>
                );
            })}
        </div>
    )
}
export default Check;