import "./CommentSection.css";
import { CommentBox, Comment } from "./Comment/Comment";

export function CommentSection({
  comments,
  speed,
}: {
  comments: Comment[];
  speed: number;
}) {
  return (
    <div className={"comment-section"}>
      <div className={"wrapper"}>
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {comments.map((comment) => (
            <div key={crypto.randomUUID()}>
              <CommentBox
                id={comment.id}
                title={comment.title}
                description={comment.description}
                rating={comment.rating}
              ></CommentBox>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {comments.map((comment) => (
            <div className={"image"} key={crypto.randomUUID()}>
              <CommentBox
                id={comment.id}
                title={comment.title}
                description={comment.description}
                rating={comment.rating}
              ></CommentBox>
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` } as React.CSSProperties}>
          {comments.map((comment) => (
            <div className={"image"} key={crypto.randomUUID()}>
              <CommentBox
                id={comment.id}
                title={comment.title}
                description={comment.description}
                rating={comment.rating}
              ></CommentBox>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
