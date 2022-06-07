import { FC } from "react";
import { PencilAltIcon } from "@heroicons/react/outline";

const NoteListItem: FC = () => (
  <div className={"flex"}>
    <PencilAltIcon />
    <span>Some notes name</span>
  </div>
);

export default NoteListItem;
