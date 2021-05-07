import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const DomitoryContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  margin: 5px 5px 50px 5px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 50;
  height: 70;
`;

const TextView = styled.Text`
  font-weight: bold;
`;

const DomitoryRules = ({config, navigation}) => {
  return (
    <DomitoryContainer
      onPress={() =>
        navigation.navigate('DormitorySubPage', {name: config.main_title4})
      }>
      <Logo source={require('../../Assets/Images/icon4.png')} />
      <TextView>{config.main_title4}</TextView>
    </DomitoryContainer>
  );
};

export default DomitoryRules;
