import React, { useEffect } from 'react';
import * as S from './style';
import WriterInfo from '../WriterInfo';
import FeedImgMoveBtn from '../FeedImgMoveBtn';
import leftMoveButton from '../../../../assets/Feed_icon/left_move_button.png';
import rightMoveButton from '../../../../assets/Feed_icon/right_move_button.png';

interface Props {
  photoIndex: number;
  postPhotos: string[];
  writerInfoData: {
    profile: string;
    userName: string;
    weather: {
      status: number;
      temp: number;
    };
    date: string;
  };
  getNextIndex: () => void;
  getPrevIndex: () => void;
}

const FeedImg: React.FC<Props> = ({
  postPhotos,
  writerInfoData,
  photoIndex,
  getNextIndex,
  getPrevIndex,
}) => {
  const URL = postPhotos[photoIndex];
  return (
    <S.FeedImageWrapper>
      <S.FeedImage src={URL} />
      <FeedImgMoveBtn ButtonImg={leftMoveButton} moveIndex={getPrevIndex} />
      <FeedImgMoveBtn
        isRight
        ButtonImg={rightMoveButton}
        moveIndex={getNextIndex}
      />
      <WriterInfo writerInfoData={writerInfoData} />
    </S.FeedImageWrapper>
  );
};
export default FeedImg;
