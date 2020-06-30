import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    list-style-type: none;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    margin: 2rem 0;
    overflow: scroll;
    @media (max-width: 600px){
        display: flex;
        width: 100%;
        flex-wrap: nowrap;
        margin: 0px;
    }
`;

const Li = styled.li`
    font-family: Noto Sans JP;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #9E9E9E;
    cursor: pointer;
    padding: 1rem 0;
    :hover{
        color: #090F31;
    }
    @media (max-width: 600px){
        display: inline;
        padding: 1rem;
    }
`;

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: min-content;
    padding: 2rem;
    // background: lightgrey;
    text-align: left;
    h3{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 16px;
    }
    @media (max-width: 600px){
        width: 100%;
        padding: 1rem;
        height: min-content;
        border-bottom: 1px solid #333;
        padding-bottom: 0;
    }
`;

function Navigation({changeDesign}) {
    return (
        <Nav>
            <div>
                <h3><span style={{color: '#F7542E'}}>Dev</span>Challanges.io</h3>
                <List>
                    <Li onClick={(e) => changeDesign(e.target.innerText)}>Colors</Li>
                    <Li onClick={(e) => changeDesign(e.target.innerText)}>Typography</Li>
                    <Li onClick={(e) => changeDesign(e.target.innerText)}>Spaces</Li>
                    <Li onClick={(e) => changeDesign(e.target.innerText)}>Buttons</Li>
                    <Li onClick={(e) => changeDesign(e.target.innerText)}>Inputs</Li>
                    <Li onClick={(e) => changeDesign(e.target.innerText)}>Grid</Li>
                </List>
            </div>
        </Nav>
    )
}

export default Navigation
