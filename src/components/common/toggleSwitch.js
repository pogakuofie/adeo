import React, { useState } from 'react';
import styled from 'styled-components';

// components

const ToggleSwitch = ({ label }) => {
    const [checkbox, setChecked] = useState(false);

    return (
        <ToggleContainer checked={checkbox} className="container">
            <Toggle checked={checkbox} className="toggle-switch">
                <Input
                    onClick={({ currentTarget }) => {
                        setChecked(currentTarget.checked);
                    }}
                    type="checkbox"
                    className="checkbox"
                    name={label}
                    id={label}
                />
            </Toggle>
        </ToggleContainer>
    );
};

const ToggleContainer = styled.div`
    background-color: ${({ checked }) => (checked ? '#2A9CEA' : '#bebebe')};
    height: 20px;
    width: 40px;
    border-radius: 30px;
    margin: 5px;
    transition: all 0.3s ease-in 0s;
`;

const Input = styled.input`
    // visibility: hidden;
    border: none;
    border-color: red;
    transition: all 0.3s ease-in 0s;
`;

const Toggle = styled.div`
    position: relative;
    display: inline-block;
    height: 19px;
    width: 19px;
    border-radius: 30px;
    background-color: white;
    border: 1px solid #bebebe;
    transition: all 0.3s ease-in 0s;
    float: ${({ checked }) => (checked ? 'right' : 'left')};
`;

const Label = styled.label``;

export default ToggleSwitch;
