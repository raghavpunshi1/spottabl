import SingleListItem from "./SingleListItem";
function ListCollection(props) {

    var obj = {};
    for (let i = 0; i < localStorage.length; i++) {

        if(localStorage.key(i)!=='chipItems')
        obj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
    }
    var result = Object.keys(obj).map((key) => [key, JSON.parse(obj[key])]);

    return (
        <div>
            <p style={{
                textAlign:"center",
                position:"sticky",
                top:"0",
                backgroundColor:"white", 
                fontWeight:"500",    
                fontSize:"8vh",
                marginTop:"-2vh"
                }} >
                    List of all Employs</p>
            {
                result.map((item) => (
                    // eslint-disable-next-line                   
                    <SingleListItem name={item[1][0][0]} post={item[1][0][1]} email={item[1][0][2]} func={props.func} />
                ))
            }
        </div>
    )
}

export default ListCollection;