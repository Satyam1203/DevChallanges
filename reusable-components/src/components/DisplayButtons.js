import React from 'react';
import styled from 'styled-components';

import DesignBtn from './Button';

const Container = styled.div`
    width: 100%;
    overflow: scroll;
    @media (max-width: 600px){
        width: 100vw;
    }
`;

const Flex = styled.div`
    display: flex;
    margin: 2rem;
    div{
        margin: 0rem 3rem;
        min-width: 225px;
        text-align: left;
    }
    @media (max-width: 600px){
        flex-direction: column;
        margin: 0;
        div{
            margin: 0.5rem 1.5rem;
        }
    }
`;

const Tag = styled.p`
    line-height: 12px;
    font-size: 12px;
    color: #333;
    margin: 12px 0;
    font-family: 'Ubuntu Mono', monospace;
`;

function DisplayButtons() {
    return (
        <Container>
            <Flex><div style={{fontSize: '24px', fontFamily: 'Poppins'}}>Buttons</div></Flex>
            <Flex>
                <div><Tag>&lt;DesignBtn /&gt;</Tag><DesignBtn /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;DesignBtn variant="outline" textColor="#3D5AFE" /&gt;</Tag><DesignBtn variant="outline" textColor="#3D5AFE"/></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;DesignBtn variant="text" textColor="#3D5AFE" /&gt;</Tag><DesignBtn variant="text"  textColor="#3D5AFE"/></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;DesignBtn color="#3D5AFE" textColor="#FFF" disableShadow /&gt;</Tag><DesignBtn color="#3D5AFE" textColor="#FFF" disableShadow /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;DesignBtn disabled /&gt;</Tag><DesignBtn disabled /></div>
                <div><Tag>&lt;DesignBtn variant='text' disabled /&gt;</Tag><DesignBtn variant='text' disabled /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;DesignBtn startIcon="local_grocery_store" /&gt;</Tag><DesignBtn startIcon="local_grocery_store" /></div>
                <div><Tag>&lt;DesignBtn endIcon="local_grocery_store" /&gt;</Tag><DesignBtn endIcon="local_grocery_store" /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;DesignBtn size="sm" <br/>color="#3498DB" textColor="#FFF" /&gt;</Tag><DesignBtn size="sm" color="#3498DB" textColor="#FFF"/></div>
                <div><Tag>&lt;DesignBtn size="md" <br/>color="#3498DB" textColor="#FFF" /&gt;</Tag><DesignBtn size="md" color="#3498DB" textColor="#FFF"/></div>
                <div><Tag>&lt;DesignBtn size="lg" <br/>color="#3498DB" textColor="#FFF" /&gt;</Tag><DesignBtn size="lg" color="#3498DB" textColor="#FFF"/></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;DesignBtn color="default" /&gt;</Tag><DesignBtn color="default" /></div>
                <div><Tag>&lt;DesignBtn color="primary" <br />text="Primary" textColor="#FFF" /&gt;</Tag><DesignBtn color="primary" text="Primary" textColor="#FFF" /></div>
                <div><Tag>&lt;DesignBtn color="secondary"  <br />text="Secondary" textColor="#FFF" /&gt;</Tag><DesignBtn color="secondary" text="Secondary" textColor="#FFF" /></div>
                <div><Tag>&lt;DesignBtn color="danger"  <br />text="Danger" textColor="#FFF" /&gt;</Tag><DesignBtn color="danger" text="Danger" textColor="#FFF" /></div>
            </Flex>
        </Container>
    )
}

export default DisplayButtons
