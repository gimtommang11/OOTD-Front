import React from 'react';
import * as S from './style';
import { CommentItem } from '../../atoms/Feeds/index';

const CommentWrapper: React.FC = () => {
  const commentData = [
    {
      userProfileImg:
        'data:image/jpeg;base64,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',
      userName: '김사람',
      commentDate: '2020.04.14',
      comment:
        '미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 그리고 극장판 에 카카시앞에 운석날라오는 거대한 걸 사스케가 갑자기 순식간에 나타나서 부숴버리곤 개간지나게 나루토가 없다면 마을을 지킬 자는 나밖에 없다 라며 바람처럼 사라진장면은 진짜 나루토처음부터 본사람이면 안울수가없더라 진짜 너무 감격스럽고 보루토를 최근에 알았는데 미안하다.. 지금20화보는데 진짜 나루토세대나와서 너무 감격스럽고 모두어엿하게 큰거보니 내가 다 뭔가 알수없는 추억이라해야되나 그런감정이 이상하게 얽혀있다',
    },
    {
      userProfileImg:
        'data:image/jpeg;base64,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',
      userName: '김사람',
      commentDate: '2020.04.14',
      comment: 'asdfqwer \n qwerasdfqwer',
    },
  ];
  return (
    <S.CommentWrapper>
      {commentData.map((commentDataItem, index) => {
        return (
          <CommentItem
            key={index}
            userProfileImg={commentDataItem.userProfileImg}
            userName={commentDataItem.userName}
            commentDate={commentDataItem.commentDate}
            comment={commentDataItem.comment}
          />
        );
      })}
    </S.CommentWrapper>
  );
};

export default CommentWrapper;
