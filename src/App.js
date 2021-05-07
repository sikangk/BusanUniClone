import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {Text, ImageBackground, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useDispatch} from 'react-redux';
import store from './store/reducers/index';
import SplashScreen from 'react-native-splash-screen';
import {language} from './store/actions/langAction';

import styled from 'styled-components';

import Notifications from './Components/Notifications';
import Menu from './Components/Menu';
import Notice from './Components/Notice';
import DomitoryRules from './Components/DormitoryRules';
import Inquiries from './Components/Inquiries';

import NotiSubPage from './Components/Notifications/NotiSubPage';
import MenuSubPage from './Components/Menu/MenuSubPage';
import NoticeSubPage from './Components/Notice/NoticeSubPage';
import DormitorySubPage from './Components/DormitoryRules/DormitorySubPage';
import InquiriesSubPage from './Components/Inquiries/InquiriesSubPage';

// css 작업
const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

const HeaderView = styled.View`
  flex: 1;
`;

const BodyView = styled.View`
  flex: 3;
`;

const LangContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const LangTitleButton = styled.TouchableOpacity`
  border: 1px solid white;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
  margin-top: 5px;
  margin-right: 5px;
`;

const TitleContainer = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.View`
  margin-left: 10;
`;
const TitleText = styled.Text`
  font-size: 20;
  color: white;
`;

const SubText = styled.Text`
  font-size: 10;
  color: white;
`;

const Logo = styled.Image`
  width: 50;
  height: 50;
`;

const BodyFirstCon = styled.View`
  flex: 1;
  flex-direction: row;
`;

const BodySecondCon = styled.View`
  flex: 1;
  flex-direction: row;
`;
// css 작업 여기까지

const len = {
  kor: {
    main_title1: '알림확인',
    main_title2: '식단안내',
    main_title3: '공지사항',
    main_title4: '원생수칙',
    main_title5: '이용문의',
    sub_page1_t1: '알림설정',
    sub_page1_t2: '알림내역',
    sub_page4_t1: '이용방법 문의',
    sub_page4_b1: '원생게시판 바로가기',
    sub_page4_b1_t: '* 현재 생활원에 거주중인 원생이 이용가능한 게시판입니다.',
    sub_page4_b2: '비원생게시판 바로가기',
    sub_page4_b2_t:
      '* 현재 생활원에 거주중이지 않은 비원생이 이용가능한 게시판입니다.',
    sub_page4_b3: '생활원 전화문의',
    sub_page4_b3_t: '* 행정실 운영시간 : 평일 9시 ~ 18시 / 12시 ~ 13시 제외',
    sub_page5_t1: '어플리케이션 안내 및 알림 수신 방법',
    sub_page5_t1_t1:
      '* 본 어플리케이션은 생활원 공지알림 수신을 위한 PUSH 전용 앱으로 생활원 알림을 수신하고자 하는 모든 분이 이용가능합니다.',
    sub_page5_t1_t2:
      '* Push 알림을 수신하고자 하는 이용자는 메인화면 알림확인 → 알림설정 → ON 선택 바랍니다.',
  },
  eng: {
    main_title1: 'Notifications',
    main_title2: 'Menu',
    main_title3: 'Notice',
    main_title4: 'Dormitory\nRules',
    main_title5: 'Inquiries',
    sub_page1_t1: 'Push Setting',
    sub_page1_t2: 'Push List',
    sub_page4_t1: 'Ways of making inquiries',
    sub_page4_b1: 'Shortcut to Bulletin board for Dorm students',
    sub_page4_b1_t:
      '* This bulletin board is available for students who are currently living in the dormitory.',
    sub_page4_b2: 'Shortcut to Bulletin board for Non-dorm students',
    sub_page4_b2_t:
      '* This bulletin board is available for students who are not living in the dormitory.',
    sub_page4_b3: 'Dormitory telephone inquiries',
    sub_page4_b3_t:
      '* Administration office’s Working hours: 09:00~18:00 on Weekdays / Except 12:00~13:00',
    sub_page5_t1: 'Application guide Ways of receiving notifications',
    sub_page5_t1_t1:
      '* This application is a PUSH app designed to provide notifications of the notice from dormitory, and is available for anyone who would like to receive notifications from dormitory.',
    sub_page5_t1_t2:
      '* Those who want to receive push notifications tap Settings on the main page -> Push settings -> tap Push On',
  },
};

function Home({navigation}) {
  const [changeLang, setChangeLang] = useState(len.kor);
  const [isKor, setIsKor] = useState(true);

  const dispatch = useDispatch();

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('./Assets/Images/main_bg.png')}>
      <HeaderView>
        <LangContainer>
          <LangTitleButton
            style={{backgroundColor: isKor === true ? 'white' : '#0318ff'}}
            onPress={() => {
              setChangeLang(len.kor);
              setIsKor(true);
              dispatch(language(len.kor));
            }}>
            <Text style={{color: isKor === true ? 'black' : 'white'}}>
              한국어
            </Text>
          </LangTitleButton>
          <LangTitleButton
            style={{backgroundColor: isKor === false ? 'white' : '#0318ff'}}
            onPress={() => {
              setChangeLang(len.eng);
              setIsKor(false);
              dispatch(language(len.eng));
            }}>
            <Text style={{color: isKor === true ? 'white' : 'black'}}>ENG</Text>
          </LangTitleButton>
        </LangContainer>
        <TitleContainer>
          <Logo source={require('./Assets/Images/logo.png')} />
          <TextContainer>
            <TitleText>부산대학교 대학생활원</TitleText>
            <SubText>PUSAN NATIONAL UNIVERSITY DORMITORY</SubText>
          </TextContainer>
        </TitleContainer>
      </HeaderView>

      <BodyView>
        <BodyFirstCon>
          <Notifications config={changeLang} navigation={navigation} />
          <Menu config={changeLang} navigation={navigation} />
        </BodyFirstCon>
        <BodySecondCon>
          <Notice config={changeLang} navigation={navigation} />
          <DomitoryRules config={changeLang} navigation={navigation} />
          <Inquiries config={changeLang} navigation={navigation} />
        </BodySecondCon>
      </BodyView>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();

//네비게이션을 위한 APP 컴포넌트 따로
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NotiSubPage"
            component={NotiSubPage}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="MenuSubPage"
            component={MenuSubPage}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="NoticeSubPage"
            component={NoticeSubPage}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="DormitorySubPage"
            component={DormitorySubPage}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen
            name="InquiriesSubPage"
            component={InquiriesSubPage}
            options={({route}) => ({title: route.params.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
