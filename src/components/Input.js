import React, {useState} from 'react';
import styled from 'styled-components';
import {StyleSheet} from 'react-native';

import {Block, Text} from '~/components';
import theme from '~/config/theme';
import Button from './Button';
import Icon from './Icon';

const WrapperInput = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: ${({error}) =>
    error ? theme.colors.accent : theme.colors.black};
  border-radius: ${theme.typo.font};
  height: ${theme.typo.base * 3}px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  font-weight: 500;
  color: ${theme.colors.black};
`;

const Input = ({
  ref,
  error,
  isSecure,
  label,
  onFocus,
  onBlur,
  iconLeft,
  iconRight,
  style,
  ...rest
}) => {
  const [showPass, setShowPass] = useState(true);
  const [focus, setFocus] = useState(false);

  const inputProps = {
    secureTextEntry: showPass && isSecure,
    onFocus: () => {
      setFocus(true);
      onFocus && onFocus();
    },
    onBlur: () => {
      setFocus(false);
      onBlur && onBlur();
    },
    focus,
    ...rest,
  };

  return (
    <Block m={`${theme.typo.base}px 0`}>
      {label ? (
        <Text color={error ? theme.colors.accent : theme.colors.gray2}>
          {label}
        </Text>
      ) : null}
      <WrapperInput row style={style} center middle error={error}>
        {iconLeft ? (
          <Icon
            name={iconLeft.name}
            type={iconLeft.type}
            size={iconLeft.size}
            m="0 10px 0 5px"
          />
        ) : null}
        <TextInput {...inputProps} />
        {isSecure && (
          <Button onPress={() => setShowPass(!showPass)}>
            <Icon
              type="antDesign"
              name={showPass ? 'eye' : 'eyeo'}
              size={25}
              m="0 10px 0 0"
            />
          </Button>
        )}
      </WrapperInput>
      {error ? (
        <Text color="accent" size={12} left m="5px 0 0">
          {error}
        </Text>
      ) : null}
    </Block>
  );
};

export default Input;
