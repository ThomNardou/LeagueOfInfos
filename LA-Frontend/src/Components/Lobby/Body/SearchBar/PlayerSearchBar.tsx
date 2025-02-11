import {motion} from "motion/react";
import {AiOutlineSearch} from "react-icons/ai";

function PlayerSearchBar() {

    const regions: string[] = ['EUW', 'EUNE', 'NA', 'BR', 'KR', 'JP', 'OCE', 'TR', 'RU', 'LAN', 'LAS'];
    return (
        <>
            <div id="search" className="lobby-body-search" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                <div className="search-container">
                    <motion.h1
                        initial={{x: '-25%', opacity: 0}}
                        whileInView={{x: 0, opacity: 1, transition: {duration: 0.5}}}
                        className="search-title">Rechercher un joueur ou un champion</motion.h1>
                    <motion.img
                        src="/decorator-hr.png"
                        initial={{width: 0, opacity: 0}}
                        whileInView={{width: '80%', opacity: 1, transition: {duration: 0.5, ease: 'easeInOut'}}}
                        className="decorator-hr"
                    />

                    <motion.div
                        className="search-bar"
                        initial={{x: '-25%', opacity: 0}}
                        whileInView={{x: 0, opacity: 1, transition: {duration: 0.5}}}
                    >
                        <select className="region-select">
                            {regions.map((region, index) => (
                                <option key={index} value={region}>{region}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Rechercher un joueur ou un champion"
                        />

                        <button className="search-button">
                            <AiOutlineSearch />
                        </button>

                    </motion.div>
                </div>

                <img src="/League-of-Legends-Embleme.png" alt="League of Legends Embleme" className="emblem" />

                <motion.img
                    src="/Akali-default.png"
                    initial={{x: '25%', opacity: 0}}
                    whileInView={{x: 0, opacity: 1, transition: {duration: 0.75}}}
                    className="search-image"
                />
            </div>
        </>
    )
}

export default PlayerSearchBar;