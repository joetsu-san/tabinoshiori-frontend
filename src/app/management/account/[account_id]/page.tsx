import Link from "next/link";

const AccountEdit = () => {
  return (
    <div>
      <p>観光地編集</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href={"/management/official_spot"}>戻る</Link>
        <Link href={"/management/"}>トップへ戻る</Link>
      </div>
    </div>
  );
};

export default AccountEdit;
