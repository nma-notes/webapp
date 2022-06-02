import { FC } from "react";

interface IReviewProps {
  name: string;
  text: string;
  avatarUrl: string;
}

const Review: FC<IReviewProps> = ({ name, text, avatarUrl }) => (
  <div
    className={
      "bg-gray-400 opacity-80 rounded-2xl p-5 flex m-5 drop-shadow-2xl"
    }
  >
    <img src={avatarUrl} alt={name} className={"h-16 m-5 rounded-full"} />
    <div className={"flex flex-col ml-0 m-5"}>
      <div className={"w-full"}>{text}</div>
      <div className={"text-black"}>{name}</div>
    </div>
  </div>
);

export default Review;
