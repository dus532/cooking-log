import { useColorScheme } from 'react-native-appearance';

import COLORS from '@/constants/colors';

interface ColorType {
  grayColor: string;
  redColor: string;
  backgroundColor: string;
  color: string;
  lineColor: string;
  subColor: string;
  primaryColor: string;
  primaryLightColor: string;
  colorScheme: string;
}

const useColor = (): ColorType => {
  const colorScheme = useColorScheme();

  return {
    redColor: COLORS.redColor[colorScheme],
    grayColor: COLORS.gray[colorScheme],
    backgroundColor: COLORS.base[colorScheme],
    color: COLORS.color[colorScheme],
    lineColor: COLORS.lineColor[colorScheme],
    subColor: COLORS.subColor[colorScheme],
    primaryColor: COLORS.primaryColor[colorScheme],
    primaryLightColor: COLORS.primaryLightColor[colorScheme],
    colorScheme,
  };
};

export default useColor;
