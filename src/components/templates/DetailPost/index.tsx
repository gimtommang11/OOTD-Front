import React, { useState, useEffect } from 'react';
import * as S from './style';
import {
  FeedImg,
  WritingComment,
  TagCommentCount,
  PostLikeButton,
  DetailPostWriterProfile,
} from '../../atoms/Feeds';
import usePost from '../../../hooks/usePost';
import CommentWrapper from '../../modules/CommentWrapper/index';

interface Props {}

const DetailPost: React.FC<Props> = () => {
  const { onGetPostId, feedList, postId } = usePost();
  const postData = feedList[postId];
  const writerInfoData = {
    profile: postData.profile,
    userName: postData.userId,
    weather: postData.weather,
    date: postData.date,
  };
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const numberOfPhoto = postData.pictures.length;
  const getPhotoIndex = (index: number): void => {
    setPhotoIndex(index);
  };
  const getNextIndex = (): void => {
    if (photoIndex !== numberOfPhoto - 1) {
      setPhotoIndex(photoIndex + 1);
    } else setPhotoIndex(0);
  };
  const getPrevIndex = (): void => {
    if (photoIndex !== 0) {
      setPhotoIndex(photoIndex - 1);
    } else setPhotoIndex(numberOfPhoto - 1);
  };
  useEffect(() => {
    console.log(postId);
  }, []);

  return (
    <S.DetailPostContainer>
      <S.DetailPostWrapper>
        <FeedImg
          isDetail={true}
          postPhotos={postData.pictures}
          writerInfoData={writerInfoData}
          photoIndex={photoIndex}
          getNextIndex={getNextIndex}
          getPrevIndex={getPrevIndex}
        />
        <S.DetailPostContentWrapper>
          <S.ScrollArea>
            <DetailPostWriterProfile
              profilePhoto={postData.profile}
              name={postData.userId}
              writeDate={postData.date}
              weather={postData.weather}
            />
            <S.DetailWriting>{postData.content}</S.DetailWriting>
            <CommentWrapper />
          </S.ScrollArea>
          <div>
            <S.DetailPostInfoWrapper>
              <PostLikeButton width="1.125rem" height="1.563rem" />
              <TagCommentCount
                likeCount={1223}
                commentCount={456}
                fontSize={'0.625rem'}
              />
            </S.DetailPostInfoWrapper>
            <WritingComment />
          </div>
        </S.DetailPostContentWrapper>
      </S.DetailPostWrapper>
    </S.DetailPostContainer>
  );
};

export default DetailPost;