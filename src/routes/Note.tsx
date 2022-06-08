import { FC } from "react";
import { useParams } from "react-router-dom";
import FolderListItem from "../components/FolderListItem";
import NoteListItem from "../components/NoteListItem";
import TipTap from "../components/TipTap";
import Button from "../components/Button";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/outline";
import MD5 from "crypto-js/md5";

const Note: FC = () => {
  const { uid } = useParams();
  console.log(uid);
  const hash = MD5("m.navrotskiy@gmail.com").toString();

  return (
    <div className={"flex w-full justify-evenly p-3 min-h-screen"}>
      <div className={"flex flex-col"}>
        <div
          className={"flex flex-col flex-1 overflow-auto"}
          style={{ maxHeight: "calc(100vh - 138px)" }}
        >
          {[...Array(1000)].map((_, i) => (
            <FolderListItem key={i} />
          ))}
        </div>
        <div className={"flex py-3"}>
          <Button title={"Add Folder"} className={"flex items-center"}>
            <PlusIcon className={"h-5 w-5"} />
            Add Folder
          </Button>
        </div>
        <div className={"flex py-3 justify-center"}>
          <img
            src={`https://www.gravatar.com/avatar/${hash}`}
            className={"rounded-full h-10 w-10"}
            alt={"Avatar"}
          />
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div
          className={"flex flex-col flex-1 overflow-auto"}
          style={{ maxHeight: "calc(100vh - 70px)" }}
        >
          {[...Array(1000)].map((_, i) => (
            <NoteListItem />
          ))}
        </div>
        <div className={"flex"}>
          <Button title={"Add Note"} className={"flex items-center"}>
            <PlusCircleIcon className={"h-5 w-5"} />
            Add Note
          </Button>
        </div>
      </div>
      <div className={"flex-1 p-3"}>
        <TipTap />
      </div>
    </div>
  );
};

export default Note;
