import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, Text, View} from 'react-native';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {OnBoarding} from './pages/OnBoarding/OnBoarding';
import theme from './theme';
import styled, {ThemeProvider} from 'styled-components/native';

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#00000000',
    primary: 'rgb(255, 45, 85)',
  },
};

enum Screens {
  onBoarding = 'onboarding',
}

function App() {
  const mode = 'light';
  return (
    <ThemeProvider theme={theme[mode]}>
      <AppContainer>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
              <Stack.Screen
                name={Screens.onBoarding}
                component={OnBoarding}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </AppContainer>
    </ThemeProvider>
  );
}
const Stack = createNativeStackNavigator();

const AppContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
`;
export default App;
