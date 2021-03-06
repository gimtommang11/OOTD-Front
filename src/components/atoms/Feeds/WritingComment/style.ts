import styled from 'styled-components';
import { MainColor } from 'src/GlobalStyle';

export const CommentWritingWrapper = styled.div`
  display: flex;
  width: inherit;
  height: 3.25rem;
  border-top: 1px solid #ddcfeb;
  flex-direction: row;
`;

export const WritingCommentInput = styled.input`
  width: 28.31rem;
  font-size: 0.75rem;
  border: none;
`;

export const PostingCommentButton = styled.button<{ comment: string }>`
  width: 2.938rem;
  height: inherit;
  font-size: 0.75rem;
  color: ${(props) =>
    props.comment.length > 0 ? MainColor : `rgba(85, 16, 155, 0.2)`};
`;
