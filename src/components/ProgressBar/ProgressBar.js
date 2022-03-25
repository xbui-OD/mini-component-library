/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarSizing = {
  small: {
    '--height': 8 + 'px',
    '--border-radius': 4 + 'px'
  },
  medium: {
    '--height': 12 + 'px',
    '--border-radius': 4 + 'px'
  },
  large: {
    '--height': 24 + 'px',
    '--border-radius': 8 + 'px',
    '--padding': 4 + 'px'
  }
};

const ProgressBar = ({ value, size }) => {
  return (
    <Bar
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={{ ...ProgressBarSizing[size] }}
    ></Bar>
  );
};

export default ProgressBar;

const Bar = styled.div`
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  &::before {
    --left-border-radius: 4px;
    --remaining-progress: calc(98 - max(98, ${props => props['aria-valuenow']}));
    --abs-remaining-progress: max(var(--remaining-progress), -1 * var(--remaining-progress));
    --right-border-radius: calc(var(--abs-remaining-progress) / 2 * var(--left-border-radius));
    content: '';
    display: block;
    width: ${props => props['aria-valuenow'] + '%'};
    height: 100%;
    background-color: ${COLORS.primary};
    border-top-left-radius: var(--left-border-radius);
    border-bottom-left-radius: var(--left-border-radius);
    border-top-right-radius: var(--right-border-radius);
    border-bottom-right-radius: var(--right-border-radius);
  }
`;
