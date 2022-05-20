import { useRef } from 'react';

import classes from './UserForm.module.css';

function UserForm(props) {
    const personNameRef = useRef();
    const personPostRef = useRef();
    const personEmailRef = useRef();

    var itemsJsonArray = [];

    function AddPerson(event) {
        event.preventDefault();

        const enteredName = personNameRef.current.value;
        const enteredPost = personPostRef.current.value;
        const enteredEmail = personEmailRef.current.value;

        itemsJsonArray = [];
        itemsJsonArray.push([enteredName, enteredPost, enteredEmail]);
        localStorage.setItem(enteredName, JSON.stringify(itemsJsonArray));


        props.funcAdd(1);
    }

    function onDelete() {
        localStorage.clear();
        props.funcDelete(1);
    }

    return (
        <div className={classes.mainBox}>
            <form onSubmit={AddPerson} className={classes.boxItem}>
                <div className={classes.head}>
                    <h3>Add person</h3>
                </div>
                <div>
                    <input placeholder="Name" type="text" required id="name" ref={personNameRef}></input>
                </div>
                <div>
                    <select id="posts" name="posts" ref={personPostRef}>
                        <option value="Client Manager">Client Manager</option>
                        <option value="Senior Manager">Senior Manager</option>
                        <option value="Recruitment Success">Recruitment Success</option>
                        <option value="Senior Recruiter">Senior Recruiter</option>
                        <option value="Talent Acquisition">Talent Acquisition</option>
                    </select>
                </div>
                <div>
                    <input placeholder="Email" type="text" required id="email" ref={personEmailRef}></input>
                </div>
                <div>
                    <input type="submit" value="Add" className='btn btn-success'></input>
                </div>
                <br></br>
                <input type="button" value="clear Storage" onClick={onDelete} className="btn btn-danger"></input>
            </form>
        </div>
    )
}

export default UserForm;

