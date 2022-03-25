import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <SelectElement value={value} onChange={onChange}>{children}</SelectElement>
      <IconWrapper>
        <Icon id='chevron-down' size={24} strokeWidth={2}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectElement = styled.select`
  padding: 12px;
  padding-right: 52px;
  font-size: 1rem;
  color: inherit;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  appearance: none;
`;

const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  position: absolute;
  top: 0;
  right: 12px;
  bottom: 0;
  pointer-events: none;
`;
