import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Israel
const IconFlagIL: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  <Flag role="img" aria-label="flag-il" fontSize={fontSize} {...props}>
    🇮🇱
  </Flag>
);

export default IconFlagIL;
