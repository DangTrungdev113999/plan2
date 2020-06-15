import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import theme from '~/config/theme';

const LinearGradientStyled = styled(LinearGradient)`
  ${({block}) => block && 'flex: 1;'}
  ${({flex}) => flex && `flex: ${flex};`}
  ${({w}) => w && `width: ${w}px;`}
  ${({h}) => h && `height: ${h}px;`}
  ${({m}) => m && `margin: ${m};`}
  ${({p}) => p && `padding: ${p};`}
  ${({absolute}) => absolute && 'position: absolute;'}
  ${({relative}) => relative && 'position: relative;'}
  ${({top}) => top && `top: ${top}px;`}
  ${({bottom}) => bottom && `bottom: ${bottom}px;`}
  ${({right}) => right && `right: ${right}px;`}
  ${({left}) => left && `right: ${left}px;`}
  ${({round}) => round && `border-radius: ${theme.typo.radius}px;`}
  ${({borderWidth}) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({borderColor}) => borderColor && `border-color: ${borderColor};`}
  ${({borderRadius}) => borderRadius && `border-radius: ${borderRadius}px`}
  ${({row}) => row && `flex-direction: ${row};`}
  ${({column}) => column && `flex-direction: ${column};`}
  ${({center}) => center && 'justify-content: center;'}
  ${({middle}) => middle && 'align-items: center;'}
  ${({justifyContent}) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({alignItems}) => alignItems && `align-items: ${alignItems};`}
  ${({alignSelf}) => alignSelf && `align-self: ${alignSelf};`}
  ${({disabled}) => disabled && `background-color: ${theme.colors.gray};`}
    ${({shadow}) =>
      shadow &&
      `
    box-shadow: 3px 3px 10px ${theme.colors.gray};
    elevation: 2;
  `}
`;

export default ({
  colors,
  start = {x: 0, y: 0},
  end = {x: 1, y: 1},
  locations = [0.1, 0.9],
  disabled,
  shadow,
  children,
  ...props
}) => {
  return (
    <LinearGradientStyled
      start={start}
      end={end}
      locations={locations}
      disabled={disabled}
      colors={colors || [theme.colors.primary, theme.colors.secondary]}
      {...props}
      dis>
      {children}
    </LinearGradientStyled>
  );
};
