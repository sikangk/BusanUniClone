import React from 'react';
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
  width: 62;
  height: 83;
`;

const TextContainer = styled.View`
  width: 100;
  height: 50;
`;

const TextView = styled.Text`
  font-weight: bold;
  text-align: center;
`;

const DomitoryRules = ({config, navigation}) => {
  return (
    <DomitoryContainer
      onPress={() =>
        navigation.navigate('DormitorySubPage', {name: config.main_title4})
      }>
      <Logo source={require('../../Assets/Images/icon4.png')} />
      <TextContainer>
        <TextView>{config.main_title4}</TextView>
      </TextContainer>
    </DomitoryContainer>
  );
};

export default DomitoryRules;
