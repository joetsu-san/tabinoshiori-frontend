import { Editor } from "@tiptap/react";
import * as Y from "yjs";
import { useEffect, useRef, useState } from "react";
import { WebsocketProvider } from "y-websocket";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
// import Highlight from "@tiptap/extension-highlight";

const useEditor = () => {
  const YdocRef = useRef<Y.Doc | null>();
  const YWebSocketProviderRef = useRef<WebsocketProvider | null>();
  const [editor, setEditor] = useState<Editor | null>(null);
  const cursorElementsRef = useRef<Record<string, HTMLDivElement>>({});

  useEffect(() => {
    YdocRef.current = new Y.Doc();
    YWebSocketProviderRef.current = new WebsocketProvider("ws://localhost:1234", "roomname", YdocRef.current);
    setEditor(
      new Editor({
        extensions: [
          StarterKit.configure({
            history: false,
          }),
          Collaboration.configure({
            document: YdocRef.current,
          }),
          CollaborationCursor.configure({
            provider: YWebSocketProviderRef.current,
            render: (user) => {
              const { left, top, color, name } = user;
              const cursorElement = document.createElement("div");
              cursorElement.style.display = "inline";
              cursorElement.style.position = "absolute";
              cursorElement.style.right = `0px`;
              cursorElement.style.top = `${top}px`;
              cursorElement.style.background = color;
              cursorElement.style.padding = "2px 4px";
              cursorElement.style.borderRadius = "4px";
              cursorElement.style.color = "#ffffff";
              cursorElement.style.fontSize = "12px";
              cursorElement.style.pointerEvents = "none";
              cursorElement.textContent = name;
              return cursorElement;
            },
          }),
        ],
        onUpdate: ({ editor }) => {
          // console.log(editor.getHTML());
        },
      })
    );
    return () => {
      YdocRef.current!.destroy();
      YWebSocketProviderRef.current!.destroy();
    };
  }, []);

  return editor;
};

export default useEditor;
