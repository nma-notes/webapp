import { FC } from "react";
import { useParams } from "react-router-dom";
import FolderListItem from "../components/FolderListItem";
import NoteListItem from "../components/NoteListItem";
import TipTap from "../components/TipTap";

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
      <div className={"flex-1 pt-20"}>
        <TipTap />
      </div>
    </div>
  );
};

export default Note;
