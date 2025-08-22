import styled from 'styled-components';

import Button from '@/components/common/Button';
import { TextStyle } from '@/utils/styled';


type PostType = 'title' | 'content';
type ContentDirection = 'normal' | 'reverse';

type PostProps = {
  title: string;
  description: string;
  backgroundColor: string;
  image: string;
  buttonTitle?: string;
  onButtonClick?: () => void;
  postType?: PostType;
  contentDirection?: ContentDirection;
};

const PostWrapper = styled.article<Pick<PostProps, 'postType' | 'backgroundColor'>>`
  width: 100%;
  height: ${({ postType: type }) => (type === 'title' ? '720px' : '640px')};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div<Pick<PostProps, 'contentDirection'>>`
  width: 1240px;
  height: 100%;
  display: flex;
  flex-direction: ${({ contentDirection }) =>
    contentDirection === 'normal' ? 'row' : 'row-reverse'};
  justify-content: space-between;
  align-items: center;
`;

const Intro = styled.div<Pick<PostProps, 'contentDirection'>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ contentDirection }) =>
    contentDirection === 'normal' ? 'flex-start' : 'flex-end'};
  gap: 48px;
`;

const HeadlineGroup = styled.div<Pick<PostProps, 'contentDirection'>>`
  text-align: ${({ contentDirection }) => (contentDirection === 'normal' ? 'start' : 'end')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const Title = styled.h1<Pick<PostProps, 'postType'>>`
  font-size: ${({ postType }) => (postType === 'title' ? '4rem' : '3rem')};
  font-weight: 700;
  line-height: ${({ postType }) => (postType === 'title' ? '76px' : '57px')};
  white-space: pre-line;
  color: ${({ theme, postType }) =>
    postType === 'title' ? theme.color.white : theme.color.gray[700]};
`;

const Description = styled.p<Pick<PostProps, 'postType'>>`
  ${TextStyle.bodyLarge}
  white-space: pre-line;
  color: ${({ theme, postType }) =>
    postType === 'title' ? theme.color.white : theme.color.gray[700]};
`;

const ImageArea = styled.div`
  width: 512px;
  height: 100%;
  position: relative;
`;

const Image = styled.img<Pick<PostProps, 'postType'>>`
  width: 512px;
  height: 512px;
  position: absolute;
  bottom: ${({ postType }) => (postType === 'title' ? '40px' : '64px')};
  object-fit: fill;
`;

function Post({
  title,
  description,
  backgroundColor,
  image,
  buttonTitle = '',
  onButtonClick = () => {},
  postType = 'content',
  contentDirection = 'normal',
}: PostProps) {
  return (
    <PostWrapper postType={postType} backgroundColor={backgroundColor}>
      <Container contentDirection={contentDirection}>
        <Intro contentDirection={contentDirection}>
          <HeadlineGroup contentDirection={contentDirection}>
            <Title postType={postType}>{title}</Title>
            <Description postType={postType}>{description}</Description>
          </HeadlineGroup>
          {postType === 'content' && <Button onClick={onButtonClick}>{buttonTitle}</Button>}
        </Intro>
        <ImageArea>
          <Image src={image} alt={title} postType={postType} />
        </ImageArea>
      </Container>
    </PostWrapper>
  );
}

export default Post;
