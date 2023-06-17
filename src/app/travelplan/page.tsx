"use client";
import type { NextPage } from "next";
import { TimeLineWrapper } from "./TimeLineWrapper";

const Page: NextPage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1>旅のしおり</h1>
      <h2>上越旅行</h2>
      <textarea />
      <TimeLineWrapper />
      {/* <EditorContent style={{ width: "100%", height: "100%", border: "1px solid #000" }} editor={editor} /> */}
    </main>
  );
};

export default Page;
