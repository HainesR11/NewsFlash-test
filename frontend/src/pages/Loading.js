import React, { } from "react";
import Logo from '../styles/assets/Newsflash_Logo_HighRes.png'
import { Oval } from "react-loader-spinner";
import { Navigate } from "react-router";

const Loading = () => {

    const display = () => {
        return (
            // <div style={ { width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignContent: "center", paddingTop: "10vh" } }>
            //     <div style={ { width: "80vw", height: "80vh", backgroundColor: "#525252", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } }>
            //         <div style={{flex:"2", display: "flex", alignItems: "center"}}>
            //             <img style={{ width: "18em", height: "18em"}} src={ Logo } />
            //         </div>
            //         <div style={ { display: "flex", flexDirection: "row", justifyContent: "center", flex:"1" } }>
            //             <div style={ { marginTop: "1.5vh" } }>
            //                 <Oval color="#78be20" secondaryColor="#525252"  height={ 45 } width={ 45 } />
            //             </div>
            //             <p style={ { fontSize: "25px", paddingLeft: "1em", color: "#78be20" } }>Loading ...</p>
            //         </div>
            //     </div>
            // </div>
            <Navigate to="/ActionList"/>
        )
    }

    return (
        <div>
            { display() }
        </div>
    )
}




export default Loading;