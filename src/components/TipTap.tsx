import { FC } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenuBar from "./EditorMenuBar";

const TipTap: FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello world!</p>",
  });

  return (
    <div className={"flex flex-col p-3"}>
      {editor && <EditorMenuBar editor={editor} />}
      <EditorContent editor={editor} className={"p-3"} />
    </div>
  );
};

export default TipTap;
