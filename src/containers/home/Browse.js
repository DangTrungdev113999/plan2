/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Block, Body, Button, Card, Loading, Text} from '~/components';
import theme from '~/config/theme';

import {fetchCategory} from '~/modules/home/action';
import {
  categorySelector,
  fetchCategoryLoadingSelector,
} from '~/modules/home/selectors';

import {fetchProfile} from '~/modules/user/actions';
import {
  profileSelector,
  fetchProfileLoadingSelector,
} from '~/modules/user/selector';

const Image = styled.Image`
  width: ${theme.typo.base * 2.2}px;
  height: ${theme.typo.base * 2.2}px;
`;

const tabs = ['Products', 'Inspirations', 'Shop'];

const Browse = ({navigation}) => {
  const [tabActive, setTabActive] = useState('Products');

  const category = useSelector((state) => categorySelector(state, tabActive));
  const profile = useSelector(profileSelector);
  const fetchCategoryLoading = useSelector(fetchCategoryLoadingSelector);
  const fetchProfileLoading = useSelector(fetchProfileLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProfile());
  }, []);

  const goToProfile = () => {
    navigation.navigate('settings_screen');
  };

  const goToExplore = () => {
    navigation.navigate('explore_screen');
  };

  const handleTab = (tab) => {
    setTabActive(tab);
  };

  const renderTab = (tab) => {
    return (
      <Button
        key={`key-${tab}`}
        m="0 32px 0 0"
        p="0 0 20px"
        borderBottomWidth={tab === tabActive && 3}
        borderColor={tab === tabActive && theme.colors.secondary}
        onPress={() => handleTab(tab)}>
        <Text color={tab === tabActive ? 'secondary' : 'gray'} size={16} medium>
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
          {fetchProfileLoading ? (
            <Loading color="black" size={30} />
          ) : (
            <Image source={profile && profile.avatar} />
          )}
        </Button>
      </Block>

      <Block>
        <Block row>{tabs.map((tab) => renderTab(tab))}</Block>
        <Block h={1} bg="gray" m="-1px 0 0" />
      </Block>
      <Block m="30px -10px 0" shadow>
        {fetchCategoryLoading ? (
          <Loading color="black" size={30} />
        ) : (
          <FlatList
            data={category}
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
        )}
      </Block>
    </Body>
  );
};

export default Browse;
