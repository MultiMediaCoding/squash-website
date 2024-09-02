import "./Comment.css";
import star1 from "/images/stars/stars.1.svg";
import star2 from "/images/stars/stars.2.svg";
import star3 from "/images/stars/stars.3.svg";
import star4 from "/images/stars/stars.4.svg";
import star5 from "/images/stars/stars.5.svg";

const stars = new Map([
  [1, star1],
  [2, star2],
  [3, star3],
  [4, star4],
  [5, star5],
]);

export interface Comment {
  title: string;
  description: string;
  rating: number;
}

export function CommentBox({ title, description, rating }: Comment) {
  return (
    <div className={"commentBox"}>
      <p className="text-xl font-semibold">{title}</p>
      <img src={stars.get(rating)} alt="stars" style={{ marginTop: "6px" }} />
      <p className="font-light" style={{ color: "grey", marginTop: "12px" }}>
        {description}
      </p>
    </div>
  );
}
