import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface Props extends RectButtonProps {
  color?: string;
  iconName?: string;
  icon?: React.FC<SvgProps>;
}

export function FloatingButton({
  color,
  ...rest
}: Props) {
  const theme = useTheme();

  function handleFloatingButton() {
    console.log('Botão pressionado!');
  }

  return (
    <S.Container 
      color={color ? color : theme.colors.primary80}
      onPress={handleFloatingButton}
      {...rest}
    >
      <AntDesign name="plus" size={40} color={theme.colors.shape} /> 
    </S.Container>
  );
}
