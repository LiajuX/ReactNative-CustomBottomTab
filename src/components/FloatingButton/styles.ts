import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  color: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 12px;
  left: ${Dimensions.get('window').width / 2 - 35}px;

  width: 70px;
  height: 70px;
  border-radius: 37px;

  background-color: ${({ color }) => color};

  z-index: 5;
`;

export const ScanButtonContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: 62px;
  height: 62px;
  border-radius: 31px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScanButton = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors.attention};
`;
