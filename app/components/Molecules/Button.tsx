import React from 'react';
import { TouchableOpacity } from 'react-native';

import Text from '../Atoms/Text';
import View from '../Atoms/View';

interface ButtonType {
  children?: any;
  width?: string;
  minWidth?: string;
  height?: string;
  minHeight?: string;
  background?: string;
  position?: string;
  bottom?: string;
  top?: string;
  left?: string;
  right?: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  marginHorizontal?: number;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  stylePadding?: string;
  onPress?: any;
  marginRight?: string;
  fontWeight?: string;
  elevation?: number;
  flex?: number;
}

const Button = ({
  children,
  width,
  minWidth,
  height,
  minHeight,
  background,
  position,
  bottom,
  right,
  left,
  top,
  fontSize,
  fontFamily,
  color,
  marginHorizontal,
  borderRadius,
  borderWidth,
  borderColor,
  fontWeight,
  stylePadding,
  onPress,
  marginRight,
  elevation,
  flex,
}: ButtonType): JSX.Element => {
  return (
    <View
      flex={flex}
      style={{ paddingHorizontal: marginHorizontal || 0 }}
      width={width || '100%'}
      minWidth={minWidth}
      top={top}
      left={left}
      marginRight={marginRight}
      right={right}
      overflow='visible'
      zIndex={100}
      bottom={bottom}
    >
      <View
        overflow='visible'
        background={background}
        borderRadius={borderRadius}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            console.log(`버튼 : ${String(children)}`);
            onPress && onPress();
          }}
          style={{ overflow: 'visible' }}
        >
          <View
            height={height}
            minHeight={minHeight}
            stylePadding={stylePadding}
            alignItems='center'
            justifyContent='center'
            background={background}
            borderWidth={borderWidth}
            borderColor={borderColor}
            overflow='visible'
            borderRadius={borderRadius}
          >
            <Text
              fontSize={fontSize}
              fontFamily={fontFamily || 'PreRegular'}
              fontWeight={fontWeight}
              color={color}
            >
              {children}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;
