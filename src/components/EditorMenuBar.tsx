import { FC } from "react";
import { Editor } from "@tiptap/react";
import { Level } from "@tiptap/extension-heading";
import EditorMenuBarButton from "./EditorMenuBarButton";

const EditorMenuBar: FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <div className={"flex p-3 flex-wrap"}>
      <EditorMenuBarButton onClick={editor.chain().focus().toggleBold().run}>
        bold
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().toggleItalic().run}>
        italic
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().toggleStrike().run}>
        strike
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().toggleCode().run}>
        code
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().unsetAllMarks().run}>
        clear marks
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().clearNodes().run}>
        clear nodes
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().setParagraph().run}>
        paragraph
      </EditorMenuBarButton>
      {[...Array(6)].map((_, i) => (
        <EditorMenuBarButton
          key={i}
          onClick={
            editor
              .chain()
              .focus()
              .toggleHeading({ level: (i + 1) as Level }).run
          }
        >
          h {i + 1}
        </EditorMenuBarButton>
      ))}
      <EditorMenuBarButton
        onClick={editor.chain().focus().toggleBulletList().run}
      >
        bullet list
      </EditorMenuBarButton>
      <EditorMenuBarButton
        onClick={editor.chain().focus().toggleOrderedList().run}
      >
        ordered list
      </EditorMenuBarButton>
      <EditorMenuBarButton
        onClick={editor.chain().focus().toggleCodeBlock().run}
      >
        code block
      </EditorMenuBarButton>
      <EditorMenuBarButton
        onClick={editor.chain().focus().toggleBlockquote().run}
      >
        blockquote
      </EditorMenuBarButton>
      <EditorMenuBarButton
        onClick={editor.chain().focus().setHorizontalRule().run}
      >
        horizontal rule
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().setHardBreak().run}>
        hard break
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().undo().run}>
        undo
      </EditorMenuBarButton>
      <EditorMenuBarButton onClick={editor.chain().focus().redo().run}>
        redo
      </EditorMenuBarButton>
    </div>
  );
};

export default EditorMenuBar;
