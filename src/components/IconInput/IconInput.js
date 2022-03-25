import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInputStyles = {
  small: {
    strokeWidth: 1,
    '--icon-size': 16,
    '--border-width': 1 + 'px',
    '--font-size': 14 / 16 + 'rem',
    '--padding': 4 + 'px',
    '--padding-left': 8 + 16 + 'px'
  },
  large: {
    strokeWidth: 2,
    '--icon-size': 24,
    '--border-width': 2 + 'px',
    '--font-size': 18 / 16 + 'rem',
    '--padding': 7 + 'px',
    '--padding-left': 12 + 24 + 'px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = IconInputStyles[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ ...styles }}>
        <Icon id={icon} size={styles['--icon-size']} strokeWidth={styles.strokeWidth}></Icon>
      </IconWrapper>
      <Input width={width} placeholder={placeholder} style={{ ...styles }}></Input>
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: ${props => props.width + 'px'};
  padding: var(--padding);
  padding-left: var(--padding-left);
  appearance: none;
  border: none;
  border-bottom: solid black;
  border-bottom-width: var(--border-width);
  font-size: var(--font-size);
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
  }

  &:not(:placeholder-shown) {
    font-weight: 700;
  }
`;

const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: var(--padding);
  pointer-events: none;
`;
