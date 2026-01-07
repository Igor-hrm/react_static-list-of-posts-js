import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ post, comments }) => {
  const postComments = post
    ? comments.filter(comment => comment.postId === post.id)
    : comments;

  return (
    <div>
      {postComments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
