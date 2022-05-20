

function SingleListItem(props) {

    function onDelete() {
        localStorage.removeItem(props.name);
        props.func();
    }

    return (
        <div>

            <div style={{
                border: "1.5px solid #e0e0eb",
                display: "flex",
                flexDirection: "row",
                height: "9vh"

            }}>


                <div style={{
                    marginTop: "1.5vh",
                    color: "rgb(114, 160, 250)"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 18 17">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </div>



                <div>

                    <div style={{
                        marginBottom: "-10vh",
                        marginTop: "-1vh"
                    }}>
                        <p style={{
                            fontSize: "4vh",
                            fontWeight: "600",

                        }}>
                            {props.name}</p>
                    </div>
                    <div style={{
                        color: "grey",
                        fontSize:"2vh",
                        marginTop:"10vh"
                    }}>
                        <p>{props.post}</p>
                    </div>

                </div>

                <div style={{
                    marginTop: "3vh",
                    display: "flex",
                    position: "absolute",
                    right: "1vh",
                    color: "rgb(0, 51, 153)"
                }}>
                    <svg onClick={onDelete} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 20 20">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                </div>
            </div>



        </div>
    )
}

export default SingleListItem;