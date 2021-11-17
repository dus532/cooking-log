/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import styled from 'styled-components/native';

import useColor from '@/hooks/useColor';

const StyledLine: any = styled.View<React.CSSProperties>`
  ${({ width }: any) => (width ? `width : ${width};` : '')}
  ${({ height }: any) => (height ? `height : ${height};` : '')}
  ${({ marginTop }: any) => (marginTop ? `margin-top : ${marginTop};` : '')}
  ${({ marginBottom }: any) =>
    marginBottom ? `margin-bottom : ${marginBottom};` : ''}
  ${({ marginLeft }: any) => (marginLeft ? `margin-left : ${marginLeft};` : '')}
  ${({ marginRight }: any) =>
    marginRight ? `margin-right : ${marginRight};` : ''}
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
  ${({ border }: any) => (border ? `border : ${border}` : '')}
  ${({ position }: any) => (position ? `position : ${position}` : '')}
  ${({ top }: any) => (top ? `top : ${top}` : '')}
  ${({ left }: any) => (left ? `left : ${left}` : '')}
  ${({ right }: any) => (right ? `right : ${right}` : '')}
  ${({ bottom }: any) => (bottom ? `bottom : ${bottom}` : '')}
`;

const Line = (props: any) => {
  const { lineColor } = useColor();

  return (
    <StyledLine
      {...props}
      background={lineColor}
      width='100%'
      height={props.height || '1px'}
    />
  );
};

export default Line;
