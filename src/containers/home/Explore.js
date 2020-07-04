/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useEffect, useState} from 'react';
import {Dimensions, Image as ImageRN, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Block, Body, Button, Input, Text} from '~/components';
import theme from '~/config/theme';
import {fetchImages} from '~/modules/home/action';
import {
  imagesSelector,
  fetchImagesLoadingSelector,
} from '~/modules/home/selectors';

const {width} = Dimensions.get('window');

const Image = styled.Image`
  ${({img}) => {
    const sizes = ImageRN.resolveAssetSource(img);
    const fullWidth = width - theme.typo.padding * 2.5;
    const resize = sizes ? (sizes.width * 100) / fullWidth : fullWidth;
    const imgWidth = resize > 75 ? fullWidth : sizes.width;

    return `
    min-Width: ${imgWidth}px; 
    max-Width: ${imgWidth}px; 
    `;
  }}
  min-Height: 100px;
  max-height: 130px;
  margin-bottom: ${theme.typo.padding}px;
  border-radius: 4px;
`;

const MainImage = styled.Image`
  width: ${width - 80}px;
  margin: 20px 0;
  border-radius: 4px;
`;

const searchInputStyle = {
  fontSize: theme.typo.caption,
  height: theme.typo.base * 3,
  backgroundColor: 'rgba(142, 142, 147, 0.06)',
  borderColor: 'rgba(142, 142, 147, 0.06)',
  paddingLeft: theme.typo.base / 1.333,
  paddingRight: theme.typo.base * 1.5,
};

const Explore = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [flex, setFlex] = useState(0.6);

  const images = useSelector(imagesSelector);
  const loading = useSelector(fetchImagesLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  const handleSearchFocus = (status) => {
    setFlex(status ? 0.8 : 0.6);
  };

  const goToProduct = () => {
    navigation.navigate('product_screen');
  };

  const renderSearch = () => (
    <Fragment>
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
    </Fragment>
  );

  const renderImages = () => (
    <Fragment>
      <Button middle onPress={goToProduct}>
        <MainImage source={images[0]} />
      </Button>
      <Block row wrap justifyContent="space-around">
        {images.slice(1).map((image) => (
          <Button key={`key-${image}`} onPress={goToProduct}>
            <Image source={image} img={image} />
          </Button>
        ))}
      </Block>
    </Fragment>
  );

  const renderFooter = () => (
    <Block absolute right="0" bottom="0">
      <Button gradient w={200} h={50} m="0 70px 10px" round center middle>
        <Text color="white" bold h4>
          Filter
        </Text>
      </Button>
    </Block>
  );

  return (
    <Body flex={1} p="20px" overlay loading={loading}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled">
        <Block row justify="space-between" middle>
          <Text h1 bold>
            Explore
          </Text>
          {renderSearch()}
        </Block>
        {renderImages()}
        {!loading ? renderFooter() : null}
      </ScrollView>
    </Body>
  );
};

export default Explore;
