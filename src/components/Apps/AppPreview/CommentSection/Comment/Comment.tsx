import { UUID } from "crypto";
import "./Comment.css";

const stars = new Map([
  [1, "/images/stars/stars.1.svg"],
  [2, "/images/stars/stars.2.svg"],
  [3, "/images/stars/stars.3.svg"],
  [4, "/images/stars/stars.4.svg"],
  [5, "/images/stars/stars.5.svg"],
]);

export interface Comment {
  id: UUID;
  title: string;
  description: string;
  rating: number;
}

export function CommentBox({ title, description, rating }: Comment) {
  return (
    <div className={"comment-box"}>
      <p className="text-xl font-semibold">{title}</p>
      <img
        src={stars.get(rating)}
        alt="stars"
        style={{ marginTop: "6px", width: "70px" }}
      />
      <p
        className="font-light hidden-text"
        style={{ color: "grey", marginTop: "12px" }}
      >
        {description}
      </p>
    </div>
  );
}
