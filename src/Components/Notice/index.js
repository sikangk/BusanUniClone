import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const NoticeContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  margin: 5px 5px 50px 5px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 50;
  height: 50;
`;

const TextView = styled.Text`
  font-weight: bold;
`;

const Notice = ({config, navigation}) => {
  return (
    <NoticeContainer
      onPress={() =>
        navigation.navigate('NoticeSubPage', {name: config.main_title3})
      }>
      <Logo source={require('../../Assets/Images/icon2.png')} />
      <TextView>{config.main_title3}</TextView>
    </NoticeContainer>
  );
};

export default Notice;
