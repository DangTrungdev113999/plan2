import React from 'react';
import {Image} from 'react-native';

import Text from './Text';
import Block from './Block';
import Button from './Button';

const Card = ({image, name, count, ...rest}) => {
  return (
    <Button
      flex={1}
      center
      middle
      borderRadius={16}
      p="20px 0"
      m="0 10px 20px"
      {...rest}>
      <Block
        w={50}
        h={50}
        borderRadius={25}
        bg="rgba(41,216,143,0.20)"
        center
        middle>
        <Image source={image} />
      </Block>
      <Text color="black" m="10px 0 0">
        {name}
      </Text>
      <Text color="gray2">{count} product</Text>
    </Button>
  );
};

export default Card;
