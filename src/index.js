import React from 'react';
import { useTheme } from 'react-native-paper';
import styled, { css } from 'styled-components/native';
import ToggleSwitch from 'toggle-switch-react-native';

const StyledSwitch = styled(ToggleSwitch)`
    ${({ disabled }) => !!disabled && css`opacity: 0.6;`}
`;

export const Switch = ({
    value,
    onChange,
    disabled
}) => {
    const theme = useTheme();

    return (
        <StyledSwitch
            isOn={value}
            onToggle={onChange}
            disabled={disabled}
            onColor={theme.colors.accent}
            offColor={theme.colors.switchOffColor}
        />
    );
};
