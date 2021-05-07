import React, {useState, useEffect} from 'react';
import {View, Text, Switch} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {WebView} from 'react-native-webview';
import axios from 'axios';

const SubPage = styled.View`
  flex: 1;
`;

const PushSetting = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PushList = styled.View`
  flex: 9;
`;

const PushSettingText = styled.Text`
  margin-left: 10;
  font-size: 18;
  font-weight: bold;
`;

const PushListText = styled.Text`
  margin-left: 10;
  font-size: 18;
  font-weight: bold;
`;

const ContentText = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NotiSubPage = () => {
  const langState = useSelector(state => state.langReducer);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    axios
      .post('https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601')
      .then(response => console.log(JSON.stringify(response, null, 2)));
  }, []);

  return (
    <SubPage>
      <PushSetting>
        <PushSettingText>{langState.sub_page1_t1}</PushSettingText>
        <Switch
          trackColor={{false: '#767577', true: '#d5f6f0'}}
          thumbColor={isEnabled ? '#63c3b4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </PushSetting>
      <PushList>
        <PushListText>{langState.sub_page1_t2}</PushListText>
        <ContentText>
          <Text>Content</Text>
        </ContentText>
      </PushList>
    </SubPage>
  );
};

export default NotiSubPage;
