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

  z-index: 10;
`;
