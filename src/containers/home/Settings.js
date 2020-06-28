import React from 'react';
import {Block, Text, Button} from '~/components';
import {useDispatch} from 'react-redux';
import {logout} from '~/modules/auth/action';

const Browse = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Block block bg="white" p="20px">
      <Button onPress={onLogout}>
        <Text h1>Đăng xuất</Text>
      </Button>
    </Block>
  );
};

export default Browse;
