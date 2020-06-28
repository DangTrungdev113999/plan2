import React from 'react';
import styled from 'styled-components';

import theme from '~/config/theme';

const Loading = styled.ActivityIndicator.attrs(({color, ...rest}) => ({
  color: color ? theme.colors[color] : theme.colors.white,
  ...rest,
}))`
  ${({m}) => m && `margin : ${m};`}
`;

export default Loading;
