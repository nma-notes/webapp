import { FC } from "react";
import { FolderIcon } from "@heroicons/react/outline";

const FolderListItem: FC = () => (
  <div className={"flex items-center p-3"}>
    <FolderIcon className={"h-5 w-5"} />
    <span>Some folder name</span>
  </div>
);

export default FolderListItem;
