import { FC } from "react";
import { FolderIcon } from "@heroicons/react/outline";

const FolderListItem: FC = () => (
  <div className={"flex"}>
    <FolderIcon />
    <span>Some name</span>
  </div>
);

export default FolderListItem;
