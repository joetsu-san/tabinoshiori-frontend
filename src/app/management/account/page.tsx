import Link from "next/link";

const Account = () => {
  return (
    <div>
      <p>管理者アカウント一覧</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href={"/management/"}>戻る</Link>
        <Link href={`/management/account/${1}`}>アカウント編集</Link>
      </div>
    </div>
  );
};

export default Account;
