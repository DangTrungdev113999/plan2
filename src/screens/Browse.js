/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {ScrollView, FlatList} from 'react-native';
import styled from 'styled-components';

import {Body, Text, Button, Card, Block} from '~/components';
import {profile, categories} from '~/mocks';
import theme from '~/config/theme';

const Image = styled.Image`
  width: ${theme.typo.base * 2.2}px;
  height: ${theme.typo.base * 2.2}px;
`;

const tabs = ['Products', 'Inspirations', 'Shop'];

const Browse = ({profile, categories, navigation}) => {
  const [active, setActive] = useState('Products');
  const [categoriesPr, setCategoriesPr] = useState(categories);

  const goToProfile = () => {
    navigation.navigate('settings_screen');
  };

  const goToExplore = () => {
    navigation.navigate('explore_screen');
  };

  const handleTab = (tab) => {
    setActive(tab);
    setCategoriesPr(
      categories.filter((category) =>
        category.tags.includes(tab.toLowerCase()),
      ),
    );
  };

  const renderTab = (tab) => {
    return (
      <Button
        key={`key-${tab}`}
        m="0 32px 0 0"
        p="0 0 20px"
        borderBottomWidth={tab === active && 3}
        borderColor={tab === active && theme.colors.secondary}
        onPress={() => handleTab(tab)}>
        <Text color={tab === active ? 'secondary' : 'gray'} size={16} medium>
          {tab}
        </Text>
      </Button>
    );
  };

  return (
    <Body flex={1} p="20px">
      <Block row justify="space-between">
        <Text m="0 0 30px" h1 bold>
          Browse
        </Text>
        <Button onPress={goToProfile}>
          <Image source={profile && profile.avatar} />
        </Button>
      </Block>

      <Block>
        <Block row>{tabs.map((tab) => renderTab(tab))}</Block>
        <Block h={1} bg="gray" m="-1px 0 0" />
      </Block>

      <Block m="30px -10px 0" shadow>
        <FlatList
          data={categoriesPr}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
          renderItem={({item}) => (
            <Card
              name={item.name}
              count={item.count}
              image={item.image}
              onPress={goToExplore}
            />
          )}
        />
      </Block>
    </Body>
  );
};

Browse.defaultProps = {
  profile: profile,
  categories: categories,
};

export default Browse;
