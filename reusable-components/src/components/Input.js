import React from 'react';
import Icon from '@material-ui/core/Icon';

import {IconInside, InputDiv, HelperSpan, Label, TextArea, DesignInput} from './inputStyles';

const Input = ({
        label, color, size, fullWidth, error, helperText, outline, multiline, row, col,startIcon, endIcon,  ...props
    }) => {
    return (
        <InputDiv>
            <Label
                style={{
                    color: error ? '#D32F2F' : '#333'
                }}
            >
                {label ? label : "Label"}
            </Label>
            {
                multiline 
                ?
                <TextArea 
                    style={{
                        border: error || props.disabled ? `1px solid ${props.disabled ? '#E0E0E0' : '#D32F2F'}` : null,
                        backgroundColor: props.disabled || color ? (color ? color :'#F2F2F2') : null,
                        width: fullWidth ? '100%' : null,
                        padding: size === 'sm' ? '10px 12px' : (size === 'lg' ? '22px 14px' : '18px 12px' ),
                        outlineColor: outline ? outline : (error ? '#D32F2F' : '#2962FF'),
                    }}
                    rows={row}
                    cols={col}
                    placeholder="Placeholder"
                    {...props}
                />
                :
                <div style={{position: 'relative', width: endIcon ? 'max-content' : null}}>
                    {startIcon ? <IconInside><Icon>{startIcon}</Icon></IconInside> : null}
                    <DesignInput 
                    style={{
                        border: error || props.disabled ? `1px solid ${props.disabled ? '#E0E0E0' : '#D32F2F'}` : null,
                        backgroundColor: props.disabled || color ? (color ? color :'#F2F2F2') : null,
                        width: fullWidth ? '100%' : null,
                        padding: size === 'sm' ? '10px 12px' : (size === 'lg' ? '22px 14px' : '18px 12px' ),
                        paddingLeft: startIcon ? '2.5rem' : null,
                        paddingRight: endIcon ? '2.5rem' : null,
                        outlineColor: outline ? outline : (error || color ? (error ? '#D32F2F' : (color ? null : '#2962FF')) : '#2962FF'),
                    }}
                    placeholder="Placeholder"
                    {...props}
                    />
                    {endIcon ? <IconInside style={{right: '0'}}><Icon>{endIcon}</Icon></IconInside> : null}
                </div>
            }
                <HelperSpan
                style={{
                    color: error ? '#D32F2F' : '#333'
                }}
            >{helperText}</HelperSpan>
        </InputDiv>
    )
}

export default Input