/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {Block, Body, Button, Text} from '~/components';
import {fetchProduct} from '~/modules/home/action';
const {width} = Dimensions.get('window');

const MainImage = styled.Image`
  width: ${width - 30}px;
  max-height: 300px;
`;

const Image = styled.Image`
  flex: 1;
  max-height: 100px;
  margin-right: 20px;
`;

const Browse = () => {
  const product = useSelector((state) => state.home.product);
  const loading = useSelector((state) => state.home.fetchProductLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct({id: 1}));
  }, []);

  if (!product.images) {
    return <Block />;
  }
  return (
    <Body p="20px" bg="white" overlay loading={loading} flex={1}>
      <ScrollView>
        <Block m="0 0 10px" h={300}>
          <MainImage source={product.images[0]} />
        </Block>

        <Block>
          <Text h3 bold>
            {product.name}
          </Text>
          <Block row m="20px 0 30px">
            {product.tags.map((tag) => (
              <Block
                key={tag}
                p="5px 20px"
                m="0 20px 0 0"
                borderWidth={0.5}
                borderColor="#C5CCD6"
                borderRadius={20}>
                <Text>{tag}</Text>
              </Block>
            ))}
          </Block>

          <Text color="gray2">{product.description}</Text>
        </Block>

        <Block h={1} bg="gray2" flex={1} m="20px 0" />
        <Text h4 bold>
          Galaxy
        </Text>
        <Block row>
          <Image source={product.images[1]} />
          <Image source={product.images[2]} />
          <Button bg="gray2" center middle w={80} h={80} borderRadius={10}>
            <Text bold>{product.images.length}+</Text>
          </Button>
        </Block>
      </ScrollView>
    </Body>
  );
};

export default Browse;
