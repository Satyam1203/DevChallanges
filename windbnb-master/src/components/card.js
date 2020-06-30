import React from 'react';
import styled from 'styled-components';
import Star from '@material-ui/icons/Star';

const CardDiv = styled.div`
    max-width: 480px;
    margin: 1rem;
    font-family: Montserrat
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 2px;
`;

const Host = styled.div`
    display: inline;
    font-size: 12px;
    color: #4F4F4F;
    padding: 6px 10px;
    margin-right: 12px;
    border: 1px solid #4F4F4F;
    border-radius: 12px;
    font-weight: bold;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 20px;
`;

function Card(props) {
    const { superHost, type, beds, rating, photo, title} = props;
    return (
        <CardDiv>
            <Img width="100%" height="320px" alt="" src={photo} />
            <Flex>
                <div style={{color: '#828282'}}>
                    {superHost ? <Host>SUPER HOST</Host> : null}
                    {type}
                    {beds ? ` . ${beds} beds` : null}
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Star style={{color:"rgba(235, 87, 87, 0.72)"}} />
                    <span style={{color: '#4F4F4F'}}>{rating}</span>
                </div>
            </Flex>
            <Flex style={{textAlign: 'left'}}>{title}</Flex>
        </CardDiv>
    )
}

export default Card
