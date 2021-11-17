/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from 'styled-components/native';

import View from './View';

const Wrap = styled(View)`
  width: 100%;
  padding: ${({ stylePadding }: any) => stylePadding || '0 32px'};
  background: ${({ background }: any) => background || 'rgba(0, 0, 0, 0)'};
`;

export default Wrap;
