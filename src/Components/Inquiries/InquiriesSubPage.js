import React from 'react';
import {View, Text, Linking} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
`;

const Info = styled.View`
  flex: 3;
  margin-left: 10;
`;
const InfoText = styled.Text`
  margin: 15px 5px 0px 5px;
  font-weight: bold;
  font-size: 18;
`;
const InfoSubText = styled.Text`
  margin: 10px 10px 0px 10px;
  font-size: 12;
  color: grey;
`;

const InquiriesMethod = styled.View`
  flex: 7;
  margin-top: 20;
`;

const InquiriesText = styled.Text`
  margin: 0px 5px 0px 5px;
  font-weight: bold;
  font-size: 18;
  margin-left: 10;
`;

const NoticeBoard = styled.View`
  margin: 10px auto;
  background-color: #4a79c0;
  border-radius: 5px;
  width: 98%;
  height: 50;
  justify-content: center;
  align-items: center;
`;
const BoardText = styled.Text`
  font-size: 18;
  color: white;
`;

const BoardSummary = styled.Text`
  font-size: 12;
  margin: 0px 5px 0px 5px;
  color: grey;
`;

const InquiriesSubPage = () => {
  const langState = useSelector(state => state.langReducer);
  return (
    <Container>
      <Info>
        <InfoText>{langState.sub_page5_t1}</InfoText>
        <InfoSubText>{langState.sub_page5_t1_t1}</InfoSubText>
        <InfoSubText>{langState.sub_page5_t1_t2}</InfoSubText>
      </Info>
      <InquiriesMethod>
        <InquiriesText>{langState.sub_page4_t1}</InquiriesText>
        <NoticeBoard>
          <BoardText
            onPress={() => Linking.openURL('https://dorm.pusan.ac.kr')}>
            {langState.sub_page4_b1}
          </BoardText>
        </NoticeBoard>
        <BoardSummary>{langState.sub_page4_b1_t}</BoardSummary>
        <NoticeBoard>
          <BoardText
            onPress={() => Linking.openURL('https://dorm.pusan.ac.kr')}>
            {langState.sub_page4_b2}
          </BoardText>
        </NoticeBoard>
        <BoardSummary>{langState.sub_page4_b2_t}</BoardSummary>
        <NoticeBoard>
          <BoardText
            onPress={() => {
              Linking.openURL('tel:0515107257');
            }}>
            {langState.sub_page4_b3}
          </BoardText>
        </NoticeBoard>
        <BoardSummary>{langState.sub_page4_b3_t}</BoardSummary>
      </InquiriesMethod>
    </Container>
  );
};

export default InquiriesSubPage;
