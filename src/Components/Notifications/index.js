import React from 'react';
import styled from 'styled-components';

const NotiContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  margin: 15px 10px 15px 5px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 70;
  height: 80;
`;
const TextContainer = styled.View`
  margin-top: 10px;
  width: 100;
  height: 20;
`;

const TextView = styled.Text`
  font-weight: bold;
  text-align: center;
`;

const Notifications = ({config, navigation}) => {
  return (
    <NotiContainer
      onPress={() => {
        navigation.navigate('NotiSubPage', {name: config.main_title1});
      }}>
      <Logo source={require('../../Assets/Images/icon1.png')} />
      <TextContainer>
        <TextView>{config.main_title1}</TextView>
      </TextContainer>
    </NotiContainer>
  );
};

export default Notifications;
