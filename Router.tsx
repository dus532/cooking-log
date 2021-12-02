import * as Atoms from '@/components/Atoms';

import { Edit, Home, Recipt } from '@/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { Animated, Image } from 'react-native';
import ICON_CLOSE from '@/assets/icon_close_black.png';

const Stack = createStackNavigator();

const forSlide: any = ({
  current,
  next,
  inverted,
  layouts: { screen },
}: any) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused,  ut offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  };
};

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            options={{ headerShown: false }}
            name='Home'
            component={Home}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}
            name='Recipt'
            component={Recipt}
          />
          <Stack.Screen
            options={{
              cardStyleInterpolator:
                CardStyleInterpolators.forModalPresentationIOS,
              headerTitle: '레시피',
              headerBackImage: () => (
                <Image
                  style={{ width: 24, height: 24, marginLeft: 16 }}
                  source={ICON_CLOSE}
                />
              ),
              headerBackTitleVisible: false,
              headerRight: () => {
                return (
                  <>
                    <Atoms.Text marginRight='16px'>저장</Atoms.Text>
                  </>
                );
              },
            }}
            name='Edit'
            component={Edit}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
