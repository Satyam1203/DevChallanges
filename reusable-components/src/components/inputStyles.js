import styled from 'styled-components';

const IconInside = styled.div`
position: absolute;
padding: 10px;
top: 50%;
transform: translateY(-50%);
color: #333;
z-index: 1;
`;

const InputDiv = styled.div`
display: flex;
flex-direction: column;
div{
    margin: 0;
}
`;

const Label = styled.label`
display: inline-grid;
font-family: Noto Sans JP;
font-size: 12px;
line-height: 17px;
text-align: left;
color: #333333;
`;

const DesignInput = styled.input`
// background: grey;
width: 200px;
position: relative;
padding: 18px 12px;
color: #333;
margin: 4px 0;
border: 1px solid #828282;
border-radius: 8px;
font-family: Noto Sans JP;
font-weight: 500;
font-size: 14px;
line-height: 20px;
outline-width: 2px;
:hover{
    opacity: 0.8;
}
`;

const TextArea = styled.textarea`
width: 200px;
padding: 18px 12px;
margin: 4px 0;
border: 1px solid #828282;
border-radius: 8px;
font-family: Noto Sans JP;
font-weight: 500;
font-size: 14px;
line-height: 20px;
resize: none;
outline-width: 2px;
:hover{
    opacity: 0.8;
}
`;

const HelperSpan = styled.span`
font-family: Noto Sans JP;
font-size: 10px;
line-height: 14px;
color: #828282;
`;

export {
    IconInside, InputDiv, HelperSpan, Label, TextArea, DesignInput
}