import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {Block, Text, Body, Input, Button} from '~/components';
import theme from '~/config/theme';

const Explore = () => {
  const [search, setSearch] = useState('');
  const [flex, setFlex] = useState(0.6);

  const handleSearchFocus = (status) => {
    setFlex(status ? 0.8 : 0.6);
  };

  const searchInputStyle = {
    fontSize: theme.typo.caption,
    height: theme.typo.base * 2,
    backgroundColor: 'rgba(142, 142, 147, 0.06)',
    borderColor: 'rgba(142, 142, 147, 0.06)',
    paddingLeft: theme.typo.base / 1.333,
    paddingRight: theme.typo.base * 1.5,
  };

  return (
    <Body flex={1} p="20px">
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <Block row justify="space-between" middle>
          <Text h1 bold>
            Explore
          </Text>
          <Block flex={flex}>
            <Input
              placeholder="Search"
              placeholderTextColor={theme.colors.gray2}
              value={search}
              onChangeText={setSearch}
              style={searchInputStyle}
              onFocus={() => handleSearchFocus(true)}
              onBlur={() => handleSearchFocus(false)}
            />
          </Block>
        </Block>
      </ScrollView>
    </Body>
  );
};

export default Explore;
