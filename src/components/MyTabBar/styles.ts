import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;  
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 62px;

  padding: 0 60px;
`;

export const TabButton = styled.TouchableOpacity``;

export const TabIcon = styled.View`
  z-index: 5;
`;
