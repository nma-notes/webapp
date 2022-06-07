import { FC } from "react";
import { useParams } from "react-router-dom";

const Note: FC = () => {
  const { uid } = useParams();
  console.log(uid);

  return (
    <div className={"flex"}>
      <div>folders</div>
      <div>notes</div>
      <div>note</div>
    </div>
  );
};

export default Note;
