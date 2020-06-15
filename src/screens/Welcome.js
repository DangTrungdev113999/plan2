/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Dimensions,
  Animated,
  Modal,
  ScrollView,
} from 'react-native';

import {Button, Block, Text} from '~/components';

const {width, height} = Dimensions.get('window');
const scrollX = new Animated.Value(0);

const Welcome = ({illustrations, navigation}) => {
  const [showTerms, setShowTerms] = useState(false);

  const showModal = () => setShowTerms(true);
  const closeModal = () => setShowTerms(false);

  const renderTerms = () => (
    <Modal
      visible={showTerms}
      animationType="slide"
      onRequestClose={closeModal}>
      <Block p="50px 25px" center middle>
        <Text h2 light>
          Terms of Service
        </Text>

        <ScrollView style={{marginVertical: 25}}>
          <Text caption color="gray" height={24} m="0 0 16px">
            1. Your use of the Service is at your sole risk. The service is
            provided on an "as is" and "as available" basis.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            2. Support for Expo services is only available in English, via
            e-mail.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            3. You understand that Expo uses third-party vendors and hosting
            partners to provide the necessary hardware, software, networking,
            storage, and related technology required to run the Service.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            4. You must not modify, adapt or hack the Service or modify another
            website so as to falsely imply that it is associated with the
            Service, Expo, or any other Expo service.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            5. You may use the Expo Pages static hosting service solely as
            permitted and intended to host your organization pages, personal
            pages, or project pages, and for no other purpose. You may not use
            Expo Pages in violation of Expo's trademark or other rights or in
            violation of applicable law. Expo reserves the right at all times to
            reclaim any Expo subdomain without liability to you.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            6. You agree not to reproduce, duplicate, copy, sell, resell or
            exploit any portion of the Service, use of the Service, or access to
            the Service without the express written permission by Expo.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            7. We may, but have no obligation to, remove Content and Accounts
            containing Content that we determine in our sole discretion are
            unlawful, offensive, threatening, libelous, defamatory,
            pornographic, obscene or otherwise objectionable or violates any
            party's intellectual property or these Terms of Service.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            8. Verbal, physical, written or other abuse (including threats of
            abuse or retribution) of any Expo customer, employee, member, or
            officer will result in immediate account termination.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            9. You understand that the technical processing and transmission of
            the Service, including your Content, may be transferred unencrypted
            and involve (a) transmissions over various networks; and (b) changes
            to conform and adapt to technical requirements of connecting
            networks or devices.
          </Text>
          <Text caption color="gray" height={24} m="0 0 16px">
            10. You must not upload, post, host, or transmit unsolicited e-mail,
            SMSs, or "spam" messages.
          </Text>
        </ScrollView>

        <Button
          w={300}
          h={50}
          center
          middle
          gradient
          round
          onPress={closeModal}>
          <Text color="white">I understand</Text>
        </Button>
      </Block>
    </Modal>
  );

  const renderIllustrations = () => (
    <FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToAlignment="center"
      data={illustrations}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({item}) => (
        <Image
          source={item.source}
          resizeMode="contain"
          style={{width, height: height / 2, overflow: 'visible'}}
        />
      )}
      onScroll={Animated.event([
        {
          nativeEvent: {contentOffset: {x: scrollX}},
        },
      ])}
    />
  );

  const renderSteps = () => {
    const stepPosition = Animated.divide(scrollX, width);
    return (
      <Block row absolute bottom={16 * 3}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.1, 1, 0.1],
            extrapolate: 'clamp',
          });
          return (
            <Block
              animated
              key={`step-${index}`}
              w={5}
              h={5}
              borderRadius={5}
              m="2.5px 0"
              opacity={opacity[index]}
              bg="gray"
            />
          );
        })}
      </Block>
    );
  };

  return (
    <Block block>
      <Block column middle justifyContent="flex-start" m="50px 0 0" flex={0.4}>
        <Text h1 bold>
          Your home.{' '}
          <Text h1 bold color="primary">
            Greener.
          </Text>
        </Text>
        <Text h3 color="gray2" m="12.5px 0 0">
          Enjoy the experience.
        </Text>
      </Block>

      <Block center middle>
        {renderIllustrations()}
        {renderSteps()}
      </Block>

      <Block middle flex={0.5} p=" 0 20px">
        <Button
          gradient
          shadow
          round
          w={280}
          h={50}
          center
          middle
          onPress={() => navigation.navigate('login_screen')}>
          <Text color="white" semibold h3>
            Login
          </Text>
        </Button>
        <Button
          shadow
          round
          w={280}
          h={50}
          m="10px 0 0"
          bg="white"
          center
          middle
          onPress={() => navigation.navigate('signUp_screen')}>
          <Text semibold>Signup</Text>
        </Button>
        <Button center m="10px 0 0" onPress={showModal}>
          <Text color="gray" caption semibold>
            Terms of service
          </Text>
        </Button>
      </Block>
      {renderTerms()}
    </Block>
  );
};

Welcome.defaultProps = {
  illustrations: [
    {id: '1', source: require('@assets/images/illustration_1.png')},
    {id: '2', source: require('@assets/images/illustration_2.png')},
    {id: '3', source: require('@assets/images/illustration_3.png')},
  ],
};

export default Welcome;
