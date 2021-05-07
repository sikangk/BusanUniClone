import React, {useState, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {WebView} from 'react-native-webview';
import {Icon} from 'react-native-elements';

const Container = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  flex: 1;
  border: 1px solid grey;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoTextContainer = styled.View`
  flex-direction: row;
  margin: 5px 0px 0px 15px;
`;

const HeaderImage = styled.Image`
  width: 50;
  height: 50;
`;

const TextContainer = styled.View`
  margin-left: 10;
`;

const HeaderText = styled.Text`
  font-size: 17;
  color: #4a79c0;
  font-weight: bold;
`;

const HeaderSubText = styled.Text`
  font-size: 18;
  font-weight: bold;
`;
const HamburgerContainer = styled.TouchableOpacity`
  border: 1px solid black;
  margin: 10px 5px 10px 0px;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1;
  height: 30;
`;
const Login = styled.View`
  flex: 1;
  border-right-width: 1;
  border-right-color: grey;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.Text`
  color: grey;
  font-size: 12;
`;

const LogOut = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BodyContainer = styled.View`
  flex: 6;
`;

const BodyHeader = styled.View`
  flex: 2;
  margin: 10px 10px 0px 10px;
`;

const BodyTitle = styled.View`
  flex: 3;
  margin: 10px 10px 0px 10px;
`;

const BodyTitleText = styled.Text`
  font-size: 26;
  border-bottom-width: 1;
  border-bottom-color: grey;
  color: grey;
`;

const BodyContent = styled.View`
  flex: 8;
  margin: 10px 10px 0px 10px;
  padding-bottom: 20px;
`;

const BodyContentText = styled.Text`
  font-size: 18;
  color: #4a79c0;
  font-weight: bold;
`;

const BodyList = styled.View`
  flex: 1;
`;

const BodyItem = styled.View`
  flex: 1;
  border: 1px solid grey;
`;

const BodyItemText = styled.Text`
  margin-top: 15;
  margin-left: 10;
  padding: 0;
  font-size: 16;
`;

const BodyButtonContainer = styled.View`
  flex-direction: row;
`;

const BodyItemButton = styled.View`
  width: 40;
  height: 40;
  border: 1px solid black;
  margin-left: 10;
`;

const FooterContainer = styled.View`
  flex: 2.5;
  margin-top: 15px;
  border-top-width: 1;
  border-top-color: grey;
`;
const PnuLinkContainer = styled.View`
  flex: 1.3;
  align-items: flex-end;
`;
const PnuLinkBox = styled.View`
  width: 80;
  height: 100%;
  margin-right: 50;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.View`
  flex: 3;
`;

const DomitorySubPage = () => {
  const langState = useSelector(state => state.langReducer);
  const [isMenu, setIsMenu] = useState(false);
  const [slideAnim, setSlideAnim] = useState(new Animated.Value(180));

  /*const event = () => {
    Animated.timing(slideAnim, {
      toValue: 2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  let aaa = slideAnim.interpolate({
    inputRange: [0, 180],
    outputRange: [200, 100],
  });*/

  return (
    <Container>
      {/*<HeaderContainer>
        <LogoTextContainer>
          <HeaderImage source={require('../../Assets/Images/58.png')} />
          <TextContainer>
            <HeaderText>부산대학교 대학생활원</HeaderText>
            <HeaderSubText>부산캠퍼스</HeaderSubText>
          </TextContainer>
        </LogoTextContainer>
        <HamburgerContainer onPress={() => setIsMenu(!isMenu)}>
          <View>
            <Icon name="menu" />
          </View>
        </HamburgerContainer>
      </HeaderContainer>*/}
      <WebView
        source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401'}}
      />
      {/*<LoginContainer>
        <Login>
          <LoginText>로그인</LoginText>
        </Login>
        <LogOut />
      </LoginContainer>
      <BodyContainer>
        <Animated.View
          style={{
            width: '100%',
            height: isMenu ? slideAnim : 0,
            borderBottomColor: '#4a79c0',
            borderBottomWidth: 2,
            position: 'absolute',
            zIndex: 1,
            backgroundColor: 'white',
          }}>
          <Text>1521512</Text>
        </Animated.View>
        <BodyHeader>
          <Text>Home / 생활안내 / 원생수칙</Text>
        </BodyHeader>
        <BodyTitle>
          <BodyTitleText>{langState.main_title4}</BodyTitleText>
        </BodyTitle>
        <BodyContent>
          <BodyContentText>문서목록</BodyContentText>
          <BodyList>
            <BodyItem>
              <BodyItemText>2020학년도 대학생활원 원생수칙</BodyItemText>
              <BodyButtonContainer>
                <BodyItemButton>
                  <Text>돋보기</Text>
                </BodyItemButton>
                <BodyItemButton>
                  <Text>다운</Text>
                </BodyItemButton>
              </BodyButtonContainer>
            </BodyItem>
            <BodyItem>
              <BodyItemText>[ENG]Dorm regulations(2020)</BodyItemText>
              <BodyButtonContainer>
                <BodyItemButton>
                  <Text>돋보기</Text>
                </BodyItemButton>
                <BodyItemButton>
                  <Text>다운</Text>
                </BodyItemButton>
              </BodyButtonContainer>
            </BodyItem>
          </BodyList>
        </BodyContent>
      </BodyContainer>
      <FooterContainer>
        <PnuLinkContainer>
          <PnuLinkBox>
            <Text>PNULINK</Text>
          </PnuLinkBox>
        </PnuLinkContainer>
        <FooterContent>
          <Text>개인정보처리방침</Text>
        </FooterContent>
        </FooterContainer>*/}
    </Container>
  );
};

export default DomitorySubPage;
