import "./Comment.css";
import star1 from "../../../assets/stars/stars.1.svg";
import star2 from "../../../assets/stars/stars.2.svg";
import star3 from "../../../assets/stars/stars.3.svg";
import star4 from "../../../assets/stars/stars.4.svg";
import star5 from "../../../assets/stars/stars.5.svg";

const stars = new Map([
  [1, star1],
  [2, star2],
  [3, star3],
  [4, star4],
  [5, star5],
]);

export function Comment({
  title,
  description,
  rating,
}: {
  title: string;
  description: string;
  rating: number;
}) {
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