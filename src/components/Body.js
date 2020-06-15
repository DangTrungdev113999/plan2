import React from 'react';
import styled from 'styled-components';

import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';

import theme from '~/config/theme';

const View = styled.View`
  ${({flex}) => flex && `flex: ${flex};`}
  background-color: ${({bg}) => {
    if (bg) return bg;
    return theme.colors.white;
  }}
    ${({center}) =>
      center &&
      `
      align-items: center;
      justify-content: center;
  `}
    ${({p}) => p && `padding: ${p};`}
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  ${({flex}) => flex && `flex: ${flex};`}
  background-color: ${({bg}) => {
    if (bg) return bg;
    return theme.colors.white;
  }};
  ${({center}) =>
    center &&
    `
    align-items: center;
    justify-content: center;
  `}
  ${({p}) =>
    p &&
    `
    padding: ${p};
  `}
`;

const Body = ({children, keybordAvoid, ...rest}) => {
  if (keybordAvoid) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={60}
          {...rest}>
          {children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
  return <View {...rest}>{children}</View>;
};

export default Body;
