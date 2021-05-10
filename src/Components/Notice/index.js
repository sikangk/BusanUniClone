import React from 'react';
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
  width: 60;
  height: 80;
`;
const TextContainer = styled.View`
  width: 100;
  height: 50;
`;

const TextView = styled.Text`
  font-weight: bold;
  text-align: center;
`;

const Notice = ({config, navigation}) => {
  return (
    <NoticeContainer
      onPress={() =>
        navigation.navigate('NoticeSubPage', {name: config.main_title3})
      }>
      <Logo source={require('../../Assets/Images/icon3.png')} />
      <TextContainer>
        <TextView>{config.main_title3}</TextView>
      </TextContainer>
    </NoticeContainer>
  );
};

export default Notice;
