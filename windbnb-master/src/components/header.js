import React from 'react';
import styled from 'styled-components';
import logo from '../data/logo.png';

import FilterNav from './filterNav';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    @media (max-width: 768px){
        flex-direction: column;
    }
`;

function Header() {
    return (
        <HeaderDiv>
            <div>
                <img src={logo} alt="title-logo"/>
            </div>
            <FilterNav />
        </HeaderDiv> 
    )
}

export default Header
