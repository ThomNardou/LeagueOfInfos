import { SlArrowDown } from "react-icons/sl";
import { useEffect, useState } from "react";

function LobbyHeader() {

    const [showStyling, setShowStyling] = useState({ opacity: 0, transition: '.50s' });
    useEffect(() => {

        setTimeout(() => {
            setShowStyling({ opacity: 1, transition: '.35s' });
        }, 600);
    }, []);
    return (

        <>
            <div className="lobby-header">
                <div style={showStyling}>
                    <h1 className="title" >Legends Analyzer</h1>
                    <img src="/decorator.png" alt="decorator" />
                </div>
                <a className="direction-link" href="#search">
                    <span className="loader">
                        <SlArrowDown className="arrow-down-animated"/>
                    </span>
                </a>
            </div>
        </>
    )
}

export default LobbyHeader