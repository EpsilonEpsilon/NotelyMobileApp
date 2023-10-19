import styled from 'styled-components/native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useWindowDimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
interface Props {
  scrollOffset: SharedValue<number>;
  index: number;
}
export const Indicator = (props: Props) => {
  const {width} = useWindowDimensions();
  const animation = useAnimatedStyle(() => {
    const input = props.scrollOffset.value / width;
    const inputRange = [props.index - 1, props.index, props.index + 1];
    return {
      transform: [
        {
          scale: interpolate(input, inputRange, [1, 1.3, 1], Extrapolate.CLAMP),
        },
      ],
      backgroundColor: interpolateColor(input, inputRange, [
        'rgba(217, 97, 76, 0.5)',
        '#D9614C',
        'rgba(217, 97, 76, 0.5)',
      ]),
    };
  });
  return <Dot style={animation} />;
};
const Dot = styled(Animated.View)`
  width: ${moderateScale(15)}px;
  border-radius: ${scale(5)}px;
  height: ${verticalScale(15)}px;
  margin-right: ${scale(5)}px;
  margin-left: ${scale(5)}px;
  background: red;
`;
