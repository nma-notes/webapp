import { FC } from "react";
import { Editor } from "@tiptap/react";
import Button from "./Button";

const EditorMenuBar: FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <div>
      <Button>bold</Button>
    </div>
  );
};

export default EditorMenuBar;
