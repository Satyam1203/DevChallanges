import React from 'react';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';


const DesignBtn = styled.button`
    display: flex;
    align-items: center;
    background: #E0E0E0;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    padding: 8px 16px;
    border: none;
    outline: 0;
    cursor: pointer;
    font-family: Noto Sans JP;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    :hover{
        opacity: 0.8
    }
    :focus{
        opacity:0.8
    }
`;

function Button({children, color, textColor, size, startIcon, endIcon, disabled, variant, disableShadow, text}) {
    const chooseColor = (color)=>{
        if(color === 'default') return '#E0E0E0';
        else if(color === 'primary') return '#2962FF';
        else if(color === 'secondary') return '#455A64';
        else if(color === 'danger') return '#D32F2F';
        else if(color) return color;
        else return null;
    }


    return (
        <DesignBtn 
            style={{
                background: variant==='text' || variant==='outline' ? 'transparent' : chooseColor(color),
                color: chooseColor(textColor),
                boxShadow: disableShadow || variant === 'text' ? 'none' : null, 
                border: variant === 'outline' ? `1px solid ${textColor ? chooseColor(textColor) : '#333'}` : '0px',
                padding: size === 'sm' ? '6px 12px' : (size === 'lg' ? '11px 22px' : '8px 16px' ),
            }} 
            disabled={disabled}
        >
            {startIcon ? <Icon style={{marginRight: '8px', fontSize: '18px'}}>{startIcon}</Icon> : null} 
            {text ? text : 'Default' } 
            { endIcon ? <Icon style={{marginLeft: '8px', fontSize: '18px'}}>{endIcon}</Icon> : null}
        </DesignBtn>
    )
}

export default Button
