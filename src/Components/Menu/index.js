import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const MenuContainer = styled.TouchableOpacity`
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

const Menu = ({config, navigation}) => {
  return (
    <MenuContainer
      onPress={() => {
        navigation.navigate('MenuSubPage', {name: config.main_title2});
      }}>
      <Logo source={require('../../Assets/Images/playstore-icon.png')} />

      <TextContainer>
        <TextView>{config.main_title2}</TextView>
      </TextContainer>
    </MenuContainer>
  );
};

export default Menu;
