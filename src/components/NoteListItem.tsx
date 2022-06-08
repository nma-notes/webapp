import { FC } from "react";
import { PencilAltIcon } from "@heroicons/react/outline";

const NoteListItem: FC = () => (
  <div className={"flex items-center p-3"}>
    <PencilAltIcon className={"h-5 w-5"} />
    <span>Some notes name</span>
  </div>
);

export default NoteListItem;
