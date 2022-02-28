import React from "react";
import { Route, BrowserRouter, Routes,  NavLink } from "react-router-dom";
import {ActionList, Login, Loading, UnderMaintenance} from "../pages";
import styled, { css } from "styled-components";

const borderBottom = css`
    padding-bottom: 0.5em;
    border-bottom: 2px solid black;
`

const SharedStyle = css`
    color: #000;
    margin-right: 2em;
    font-size: 15px;
    width: 100px
    text-decoration: none;
    text-transform: uppercase;
    &.active {
        color: #000000;
        display: inline;
        font-weight: 600;
        ${borderBottom}   
    }   
`

const StyledNavLink = styled(NavLink)`
    ${SharedStyle}
    text-align: center;
    margin-bottom: 4vh;
    color: #000000
`;

const Navigation = () => {

    const NavLinks = () =>{
        return(
            <div style={{width: "20vw", height: "100vw", backgroundColor: "white"}} >

            </div>
        )
    }

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/Loading" element={ <Loading/> } />
                    <Route path="/ActionList" element={<ActionList/>}/>
                    <Route path="/UnderMaintenance" element={<UnderMaintenance/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navigation