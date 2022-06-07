import { FC } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TipTap: FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello world!</p>",
  });

  return <EditorContent editor={editor} />;
};

export default TipTap;
