import React, {useState, useEffect} from 'react';
import {View, Text, Switch, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/AntDesign';

const SubPage = styled.ScrollView`
  flex: 1;
  margin-top: 20;
`;

const PushSetting = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PushList = styled.View`
  margin-top: 20;
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
const Content = styled.View``;

const ContentContainer = styled.View`
  margin: 0;
  padding: 0;
  height: 80;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentText = styled.Text`
  font-weight: bold;
  font-size: 16;
  margin: 0px 10px 0px 10px;
  flex: 9;
`;
const ContentArrowCon = styled.View`
  align-items: center;
  flex: 1;
  margin-right: 5px;
`;
const ContentImageCon = styled.View`
  margin-right: 10px;
  margin-left: 10px;
`;

const ContentImage = styled.Image`
  width: 100%;
  resize-mode: stretch;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const NotiSubPage = () => {
  const langState = useSelector(state => state.langReducer);
  const [isEnabled, setIsEnabled] = useState(false);
  const [expand, setExpand] = useState([
    {id: 0, isExpand: false},
    {id: 1, isExpand: false},
  ]);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onExpand = i => {
    setExpand(
      expand.map(info =>
        info.id === i ? {...info, isExpand: !info.isExpand} : info,
      ),
    );
  };

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
        <Content>
          <ContentContainer>
            <ContentText>
              2020학년도 1학기 입사자 유의사항 및 안내사항(04.17.영문추가)
            </ContentText>
            <ContentArrowCon>
              {expand[0].isExpand === false ? (
                <Icon name="up" size={13} onPress={() => onExpand(0)} />
              ) : (
                <Icon name="down" size={13} onPress={() => onExpand(0)} />
              )}
            </ContentArrowCon>
          </ContentContainer>
          {expand[0].isExpand === true ? (
            <ContentImageCon>
              <ContentImage
                source={require('../../Assets/Images/noti.png')}
                style={{resizeMode: 'stretch'}}
              />
            </ContentImageCon>
          ) : null}
        </Content>
        <Content>
          <ContentContainer>
            <ContentText>2021학년도 1학기 대학생활원 동장 모집</ContentText>
            <ContentArrowCon>
              {expand[1].isExpand === false ? (
                <Icon name="up" size={13} onPress={() => onExpand(1)} />
              ) : (
                <Icon name="down" size={13} onPress={() => onExpand(1)} />
              )}
            </ContentArrowCon>
          </ContentContainer>
          {expand[1].isExpand && (
            <ContentImageCon>
              <ContentImage
                source={require('../../Assets/Images/noti2.png')}
                style={{resizeMode: 'stretch'}}
              />
            </ContentImageCon>
          )}
        </Content>
      </PushList>
    </SubPage>
  );
};

export default NotiSubPage;
