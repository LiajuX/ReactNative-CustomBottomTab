import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props extends RectButtonProps {
  color?: string;
  icon?: React.FC<SvgProps>;
  scanButton?: boolean;
}

export function FloatingButton({
  color,
  scanButton = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <S.Container 
      color={color ? color : (scanButton ? theme.colors.attention : theme.colors.text)}
      {...rest}
    >
      { scanButton 
        ? (
          <S.ScanButtonContainer>
            <S.ScanButton />
          </S.ScanButtonContainer>
        )
        : <AntDesign name="plus" size={40} color={theme.colors.shape} /> 
      }
    </S.Container>
  );
}
