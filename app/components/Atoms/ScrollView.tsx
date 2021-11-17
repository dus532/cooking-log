/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ScrollViewProps } from 'react-native';

import styled from 'styled-components/native';

import View from './View';

const ScrollView = styled.ScrollView<ScrollViewProps | React.CSSProperties>`
  ${({ width }: any) => (width ? `width : ${width};` : '')}
  ${({ minWidth }: any) => (minWidth ? `min-width : ${minWidth};` : '')}
  ${({ height }: any) => (height ? `height : ${height};` : '')}
  ${({ marginTop }: any) => (marginTop ? `margin-top : ${marginTop};` : '')}
  ${({ marginBottom }: any) =>
    marginBottom ? `margin-bottom : ${marginBottom};` : ''}
  ${({ marginLeft }: any) => (marginLeft ? `margin-left : ${marginLeft};` : '')}
  ${({ marginRight }: any) =>
    marginRight ? `margin-right : ${marginRight};` : ''}
  ${({ paddingTop }: any) => (paddingTop ? `padding-top : ${paddingTop};` : '')}
  ${({ paddingBottom }: any) =>
    paddingBottom ? `padding-bottom : ${paddingBottom};` : ''}
  ${({ paddingLeft }: any) =>
    paddingLeft ? `padding-left : ${paddingLeft};` : ''}
  ${({ paddingRight }: any) =>
    paddingRight ? `padding-right : ${paddingRight};` : ''}
  ${({ background }: any) =>
    background ? `background : ${background};` : 'background : rgba(0,0,0,0);'}
  ${({ fontFamily }: any) => (fontFamily ? `font-family : ${fontFamily};` : '')}
  ${({ display }: any) => (display ? `display : ${display};` : '')}
  ${({ flexDirection }: any) =>
    flexDirection ? `flex-direction : ${flexDirection};` : ''}
  ${({ flexDirection }: any) =>
    flexDirection ? `flex-direction : ${flexDirection};` : ''}
  ${({ justifyContent }: any) =>
    justifyContent ? `justify-content : ${justifyContent};` : ''}
  ${({ alignItems }: any) => (alignItems ? `align-items : ${alignItems};` : '')}
  ${({ borderRadius }: any) =>
    borderRadius ? `border-radius : ${borderRadius};` : ''}
  ${({ flex }: any) => (flex ? `flex : ${flex};` : '')}
  ${({ stylePadding }: any) =>
    stylePadding ? `padding : ${stylePadding}` : ''}
  ${({ styleMargin }: any) => (styleMargin ? `margin : ${styleMargin}` : '')}
  ${({ borderBottomColor }: any) =>
    borderBottomColor ? `border-bottom-color : ${borderBottomColor}` : ''}
  ${({ borderBottomWidth }: any) =>
    borderBottomWidth ? `border-bottom-width : ${borderBottomWidth}` : ''}
  ${({ borderColor }: any) =>
    borderColor ? `border-color : ${borderColor}` : ''}
  ${({ borderWidth }: any) =>
    borderWidth ? `border-width : ${borderWidth}` : ''}
  ${({ position }: any) => (position ? `position : ${position}` : '')}
  ${({ top }: any) => (top ? `top : ${top}` : '')}
  ${({ left }: any) => (left ? `left : ${left}` : '')}
  ${({ right }: any) => (right ? `right : ${right}` : '')}
  ${({ bottom }: any) => (bottom ? `bottom : ${bottom}` : '')}
`;

const SV = ({ children, bottomMargn, background }: any) => (
  <ScrollView background={background}>
    {children}
    <View height={bottomMargn ?? '160px'} />
  </ScrollView>
);

export default SV;
