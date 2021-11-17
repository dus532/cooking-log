import { Edit, Home, Recipt } from '@/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import { Animated } from 'react-native';

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
                screen.width, // Focused, but offscreen in the beginning
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

const styleA = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontFamily: 'PreMedium',
  },
  cardStyleInterpolator: forSlide,
  headerTitleAllowFontScaling: false,
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
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
