import React from "react";
import Logo from '../styles/assets/Newsflash_Logo_HighRes.png'

const UnderMaintenance = () =>{ 
    return(
        <div style={ { width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignContent: "center", paddingTop: "10vh" } }>
            <div style={ { width: "80vw", height: "80vh", backgroundColor: "#333333" } }>
                <img src={Logo}/>
                <h3>This page is under maintenance. Please check back later</h3>
            </div>
        </div>
    )
}

export default UnderMaintenance