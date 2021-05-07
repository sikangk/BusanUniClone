import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const InquiriesContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  margin: 5px 5px 50px 5px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 60;
  height: 80;
`;

const TextView = styled.Text`
  font-weight: bold;
`;

const Inquiries = ({config, navigation}) => {
  return (
    <InquiriesContainer
      onPress={() =>
        navigation.navigate('InquiriesSubPage', {name: config.main_title5})
      }>
      <Logo source={require('../../Assets/Images/icon5.png')} />
      <TextView>{config.main_title5}</TextView>
    </InquiriesContainer>
  );
};

export default Inquiries;
