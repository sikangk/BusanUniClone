import {CHANGE_LANG} from '../actions/langAction';

const len = {
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
};

const langReducer = (state = len, action) => {
  console.log(action.langtype);
  switch (action.type) {
    case CHANGE_LANG:
      return (state = action.langtype);
    default:
      return state;
  }
};

export default langReducer;
