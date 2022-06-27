import { FC } from "react";
import { FolderIcon } from "@heroicons/react/outline";
import { IFolder } from "../services/folder";

const FolderListItem: FC<{ folder: IFolder }> = ({ folder }) => (
  <div className={"flex items-center p-3"}>
    <FolderIcon className={"h-5 w-5"} />
    <span>{folder.name}</span>
  </div>
);

export default FolderListItem;
