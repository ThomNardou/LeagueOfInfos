import { SlArrowDown } from "react-icons/sl";

function LobbyHeader() {
    return (

        <>
            <div className="lobby-header">
                <h1 className="title">HERE THE SITE NAME</h1>
                <a className="direction-link" href="https://google.ch">
                    <span className="loader">
                        <SlArrowDown className="arrow-down-animated"/>
                    </span>
                </a>
            </div>
        </>
    )
}

export default LobbyHeader