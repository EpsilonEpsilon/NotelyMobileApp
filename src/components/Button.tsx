import {Pressable, StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import React, {ReactElement} from 'react';
import styled from 'styled-components/native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  children: string | ReactElement;
  styles?: {
    container?: StyleProp<TextStyle>;
    text?: StyleProp<TextStyle>;
  };
}

export const Button = (props: IProps) => {
  const color = useSharedValue(0);
  const container = StyleSheet.flatten(props.styles?.container);
  const text = StyleSheet.flatten(props.styles?.text);
  const getContainerAnimation = useAnimatedStyle(() => {
    if (!container.backgroundColor || !text.color)
      throw new Error('Background and color should be provided on props');
    return {
      backgroundColor: interpolateColor(
        color.value,
        [0, 100],
        [container.backgroundColor.toString(), text.color.toString()],
      ),
      borderRadius: interpolate(color.value, [0, 100], [10, 7]),
    };
  });

  const getTextAnimation = useAnimatedStyle(() => {
    if (!container.backgroundColor || !text.color)
      throw new Error('Background and color should be provided on props');
    return {
      color: interpolateColor(
        color.value,
        [0, 100],
        [text.color.toString(), container.backgroundColor.toString()],
      ),
    };
  });

  const handlePressIn = () => {
    color.value = withTiming(color.value + 100, {duration: 100});
  };

  const handlePressOut = () => {
    color.value = withTiming(color.value - color.value, {duration: 200});
  };

  return (
    <Container
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        getContainerAnimation,
        props.styles?.container,
        {
          borderWidth: 3,
          borderColor: container.backgroundColor,
        },
      ]}>
      <Animated.Text style={[props.styles?.text, getTextAnimation]}>
        {props.children}
      </Animated.Text>
    </Container>
  );
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const Container = styled(AnimatedPressable)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
