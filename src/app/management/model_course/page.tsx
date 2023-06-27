"use client";

import Link from "next/link";

const ModelCourse = () => {
  return (
    <div>
      <p>モデルコース一覧</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href={"/management/"}>戻る</Link>
        <Link href={`/management/model_course/${1}`}>モデルコース編集</Link>
      </div>
    </div>
  );
};

export default ModelCourse;
