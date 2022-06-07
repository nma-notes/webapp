import { FC } from "react";
import { useParams } from "react-router-dom";
import FolderListItem from "../components/FolderListItem";
import NoteListItem from "../components/NoteListItem";

const Note: FC = () => {
  const { uid } = useParams();
  console.log(uid);

  return (
    <div className={"flex w-full justify-evenly"}>
      <div>
        <FolderListItem />
      </div>
      <div>
        <NoteListItem />
      </div>
      <div className={"flex-1"}>note</div>
    </div>
  );
};

export default Note;
