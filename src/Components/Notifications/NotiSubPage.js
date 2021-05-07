import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {WebView} from 'react-native-webview';

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

  return (
    <SubPage>
      <PushSetting>
        <PushSettingText>{langState.sub_page1_t1}</PushSettingText>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
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
