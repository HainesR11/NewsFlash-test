import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../styles/assets/Newsflash_Logo_HighRes.png"


const styles = {
    wordStyle: {
        textAlign: "center",
        color: "#F6FFE4",
        fontSize: "2em"
    },
    button: {
        width: '200px',
        height: "2em",
        background: "#78be20",
        color: "white",
        borderRadius: "5px",
        marginBottom: "1em"
    }
}

const LoginForm = () => {

    const navigate = useNavigate()

    return (
        <div style={ { width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignContent: "center", paddingTop: "10vh" } }>
            <div style={ { width: "80vw", height: "80vh", backgroundColor: "#525252", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } }>
                <div style={ { flex: "2", display: "flex", alignItems: "center" } }>
                    <img src={ Logo } style={ { width: "18em", height: "18em" } } />
                </div>
                <div style={{duisplay:"flex", flex:"1", alignItems:"center"}}>
                    <div style={ { ...styles.button, ...styles.wordStyle, textDecoration: "none", marginBottom: "5vh" } } onClick={ () => navigate('/Loading') }>Sign in</div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm