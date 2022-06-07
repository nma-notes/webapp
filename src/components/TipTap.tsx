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
    <div>
      {editor && <EditorMenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
