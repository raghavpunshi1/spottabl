import classes from './Header.module.css';
import logo from '../../images/logo.jpg'

function Header() {

    function info() {
        window.alert("Step 1: Fill the Add Person form to add employs to the local storage\nList of all employs will be displayed in the box adjacent to it\n clicking on Delete icon deletes the entry of that employ from the local storage\nStep 2: After filling in the details of teh employs in the local storage, search for the name or the email in the search box, suggestions will be displayed on the screen.\nStep 3: click on the desired selection to selecte the employ.\nStep 4: Click on add CSM button to add the selections in the final list");
    }
    return (
        <div className={classes.back}>

            <div className={classes.headerBox}>
                <div>
                    <img src={logo} alt="logo" className={classes.logo} />
                </div>
                <div className={classes.headerItem}>
                    <h1 id="mainText">YOUR SPOTTABL TEAM</h1>
                    <h5 id="subText">Spottabl supports you all throughout</h5>
                </div>
                <div className={classes.info}>
                    <button className="btn" onClick={info}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>


    )
}

export default Header;