import {Image, StyleSheet, useWindowDimensions} from 'react-native';
import styled from 'styled-components/native';
import {Fonts} from '../../styles/fonts';
import Hero from '../../../assets/images/OnBoardingHero.png';
import React from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

export const Preview = () => {
  const {width} = useWindowDimensions();
  return (
    <Container style={{width: width - 20}}>
      <TopContent>
        <HeroImage source={Hero} />
        <Header>World’s Safest And {'\n'} Largest Digital Notebook</Header>
        <Content>
          Notely is the world’s safest, largest and intelligent digital
          notebook. Join over 10M+ users already using Notely.
        </Content>
      </TopContent>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const TopContent = styled.View`
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled(Image)`
  width: ${moderateScale(300)}px;
  height: ${verticalScale(300)}px;
  object-fit: contain;
  margin-top: 15px;
`;

const Header = styled.Text`
  text-align: center;
  font-size: ${scale(25)}px;
  color: ${props => props.theme.secondaryColor};
  font-family: ${Fonts.NunitoBlack};
`;

const Content = styled.Text`
  margin-top: ${scale(10)}px;
  text-align: center;
  font-size: ${scale(18)}px;
  margin-bottom: ${verticalScale(5)}px;
  font-family: ${Fonts.NunitoBold};
  color: #595550;
`;

const styles = StyleSheet.create({});
