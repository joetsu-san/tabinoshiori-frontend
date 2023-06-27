import Link from "next/link";

const ModelCourseEdit = () => {
  return (
    <div>
      <p>モデルコース編集</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href={"/management/model_course"}>戻る</Link>
        <Link href={"/management/"}>トップへ戻る</Link>
      </div>
    </div>
  );
};

export default ModelCourseEdit;
