import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
width: 20px;
height: 20px;
background: transparent;
border:1px solid #333;
border-radius: 4px;
cursor: pointer;
oultine:0px;
box-shadow: none;
&:active{
    background: lightgrey;
}
`;

const CountDiv = styled.div`
    display: inline;
    padding: 0 10px;
`;

function AddGuests(props) {
    return (
        <div style={{margin: '1rem'}}>
            <h4>{props.type}</h4>
            <p style={{color: '#BDBDBD'}}>{props.desc}</p>
            <div style={{padding: '1rem 0'}}>
                <Button onClick={props.dec}>-</Button>
                <CountDiv>{props.count}</CountDiv>
                <Button onClick={props.inc}>+</Button>
            </div>
        </div>
    )
}

export default AddGuests
