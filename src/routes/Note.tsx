import { FC } from "react";
import { useParams } from "react-router-dom";
import FolderListItem from "../components/FolderListItem";
import NoteListItem from "../components/NoteListItem";
import TipTap from "../components/TipTap";

const Note: FC = () => {
  const { uid } = useParams();
  console.log(uid);

  return (
    <div className={"flex w-full justify-evenly p-3 min-h-screen"}>
      <div className={"flex flex-col"}>
        <div className={"flex flex-col flex-1"}>
          <FolderListItem />
        </div>
        <div className={"flex"}>Add button</div>
        <div className={"flex"}>Login</div>
      </div>
      <div className={"flex flex-col"}>
        <div className={"flex flex-col flex-1"}>
          <NoteListItem />
        </div>
        <div className={"flex"}>Add button</div>
      </div>
      <div className={"flex-1 p-3"}>
        <TipTap />
      </div>
    </div>
  );
};

export default Note;
