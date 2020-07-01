import React, {useState} from 'react';
import Input from './Input';

import {Container, Flex, Tag} from './styles';

const DisplayInputs = () => {
    const [inputVal, setinputVal] = useState('Text');
    return (
        <Container>
            <Flex><div style={{fontSize: '24px', fontFamily: 'Poppins'}}>Inputs</div></Flex>
            <Flex>
                <div><Tag>&lt;Input /&gt;</Tag><Input /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;Input error /&gt;</Tag><Input error /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;Input disabled /&gt;</Tag><Input disabled /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;Input helperText="Some text" /&gt;</Tag><Input helperText="Some text" /></div>
                <div><Tag>&lt;Input helperText="Some text" error /&gt;</Tag><Input helperText="Some text" error /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;Input startIcon="phone" /&gt;</Tag><Input startIcon="phone" /></div>
                <div><Tag>&lt;Input startIcon="perm_dentity" label="Username" /&gt;</Tag><Input startIcon="perm_identity" label="Username" /></div>
                <div><Tag>&lt;Input endIcon="lock" type="password" /&gt;</Tag><Input endIcon="lock"  type="password"/></div>
                <div><Tag>&lt;Input endIcon="fingerprint" placeholder="Secret Key" /&gt;</Tag><Input endIcon="fingerprint" placeholder="Secret Key" /></div>
                <div><Tag>&lt;Input startIcon="local_grocery_store" label="Enter Item" /&gt;</Tag><Input startIcon="local_grocery_store" label="Enter Item" /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;Input value="Text" /&gt;</Tag><Input value={inputVal} onChange={(e) => setinputVal(e.target.value)} helperText="onChange Handler required (for input tag)" /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;Input size="sm" /&gt;</Tag><Input size="sm" /></div>
                <div><Tag>&lt;Input size="md" /&gt;</Tag><Input size="md" /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;Input color="#74B9FF33" outline="transparent" /&gt;</Tag><Input color="#74B9FF33" outline="transparent" /></div>
                <div><Tag>&lt;Input size="#EA777322" outline="#EA7773" /&gt;</Tag><Input color="#EA777322"  outline="#EA7773AA" /></div>
            </Flex>
            <Flex>
                <div style={{width: '100%'}}><Tag>&lt;Input fullWidth /&gt;</Tag><Input fullWidth /></div>
            </Flex>
            <Flex>
                <div><Tag>&lt;Input multiline row="4" /&gt;</Tag><Input multiline row="4" /></div>
            </Flex>
        </Container>
    )
}

export default DisplayInputs;