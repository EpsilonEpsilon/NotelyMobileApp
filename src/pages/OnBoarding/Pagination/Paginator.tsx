import React from 'react';
import {useWindowDimensions} from 'react-native';
import styled from 'styled-components/native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Indicator} from './Indicator';

interface IProps {
  itemCount: number;
  scrollX: SharedValue<number>;
}
export const Paginator = (props: IProps) => {
  const {width} = useWindowDimensions();
  const animatedStyles = useAnimatedStyle(() => {
    const value = props.scrollX.value / width;
    return {};
  });

  return (
    <Container>
      {new Array(props.itemCount).fill(0).map((_, index) => (
        <Indicator index={index} scrollOffset={props.scrollX} key={index} />
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;
