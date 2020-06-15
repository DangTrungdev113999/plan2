import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import theme from '../../config/theme';

const RightIcon = ({navigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <Button m="0 0 0 20px" onPress={goBack} middle center>
      <Icon
        type="ionicons"
        name="ios-arrow-round-back"
        size={50}
        color={theme.colors.gray}
      />
    </Button>
  );
};

export default RightIcon;
