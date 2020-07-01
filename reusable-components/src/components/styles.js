import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    overflow: scroll;
    @media (max-width: 600px){
        width: 100vw;
    }
`;

const Flex = styled.div`
    display: flex;
    margin: 1.8rem 2rem;
    >div{
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

export {
    Container,
    Flex,
    Tag
}