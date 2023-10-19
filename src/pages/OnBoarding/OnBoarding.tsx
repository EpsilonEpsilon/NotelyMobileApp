import React from 'react';
import {Preview} from './Preview';
import styled from 'styled-components/native';
import {Button} from '../../components/Button';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {Fonts} from '../../styles/fonts';
import {Paginator} from './Pagination/Paginator';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {scale, verticalScale} from 'react-native-size-matters';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const OnBoarding = () => {
  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.x;
    },
  });
  return (
    <Container>
      <View style={{flex: 2}}>
        <Logo>Notely</Logo>
        <List
          data={new Array(3).fill(0)}
          renderItem={() => <Preview />}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          onScroll={scrollHandler}
        />
      </View>
      <Paginator scrollX={scrollOffset} itemCount={3} />
      <Button
        styles={{
          text: style.buttonText,
          container: style.container,
        }}>
        GET STARTED
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
`;

const Logo = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.secondaryColor};
  margin-top: 20px;
  font-family: ${Fonts.TitanOneRegular};
  text-transform: uppercase;
  align-self: center;
`;

const List = styled(AnimatedFlatList)``;

const style = StyleSheet.create({
  containerNotPressed: {
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: Fonts.NunitoBlack,
    fontSize: scale(20),
    textTransform: 'uppercase',
    color: '#FFFBFA',
  },
  containerPressed: {
    borderRadius: 100,
  },
  container: {
    backgroundColor: '#d9614c',
    marginBottom: scale(20),
    height: scale(50),
  },
});
