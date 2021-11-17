/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import styled from 'styled-components/native';

import useColor from '@/hooks/useColor';

const StyledText: any = styled.Text<React.CSSProperties>`
  ${({ width }: any) => (width ? `width : ${width};` : '')}
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
  ${({ padding }: any) => (padding ? `margin : ${padding};` : '')}
  ${({ fontSize }: any) => (fontSize ? `font-size : ${fontSize};` : '')}
  ${({ fontWeight }: any) => (fontWeight ? `font-weight : ${fontWeight};` : '')}
  ${({ fontFamily }: any) => (fontFamily ? `font-family : ${fontFamily};` : '')}
  ${({ color }: any) => (color ? `color : ${color};` : '')}
  ${({ textAlign }: any) => (textAlign ? `text-align : ${textAlign};` : '')}
  ${({ lineHeight }: any) => (lineHeight ? `line-height : ${lineHeight};` : '')}
`;

const Text = (props: any) => {
  const { color } = useColor();

  return (
    <StyledText
      fontFamily='PreRegular'
      color={props.color || color}
      allowFontScaling={false}
      {...props}
    >
      {props.children}
    </StyledText>
  );
};

export default Text;
