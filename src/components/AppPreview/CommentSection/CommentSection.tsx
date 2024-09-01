import "./CommentSection.css";
import { CommentBox, Comment } from "./Comment/Comment";

export function CommentSection({ comments }: { comments: Comment[] }) {
  return (
    <div className={"commentSection"}>
      {comments.map((comment, _) => (
        <CommentBox
          title={comment.title}
          description={comment.description}
          rating={comment.rating}
        />
      ))}
    </div>
  );
}
