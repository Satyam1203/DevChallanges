import React from 'react'
import styled from 'styled-components';

const StayTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    font-family: Montserrat;
`;

function Stay() {
    return (
        <StayTitleWrapper>
            <h2>Stays in Finland</h2>
            <p style={{color: '#4F4F4F'}}>12+ stays</p>
        </StayTitleWrapper>
    )
}

export default Stay
