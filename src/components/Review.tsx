import { FC } from "react";

interface IReviewProps {
  name: string;
  text: string;
  avatarUrl: string;
}

const Review: FC<IReviewProps> = ({ name, text, avatarUrl }) => (
  <div>
    <img src={avatarUrl} alt={name} />
    <div>{text}</div>
    <div>{name}</div>
  </div>
);

export default Review;
