import React from 'react'
import { useTheme } from 'styled-components';
import Svg, { SvgProps, Path } from 'react-native-svg'
import { Dimensions } from 'react-native';

export function TabBarBg(props: SvgProps) {
  const theme = useTheme();

  return (
    <Svg
      width={Dimensions.get('screen').width}
      height={64}
      viewBox="0 0 414 62"
      fill="none"
      style={{ position: 'absolute', }}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0C6.716 0 0 6.716 0 15v49h414V15c0-8.284-6.716-15-15-15H284c-21.188 0-30.815 15.425-39.255 28.947-3.68 5.896-7.134 11.43-11.222 15.166-5.904 6.66-15.362 10.976-26.023 10.976-10.443 0-19.733-4.142-25.658-10.572-3.993-3.395-7.237-8.92-10.772-14.941C163.125 16.042 153.707 0 131 0H15z"
        fill={theme.colors.shape}
      />
    </Svg>
  );
}
