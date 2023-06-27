"use client";

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>管理者ページ</h1>
      {children}
    </>
  );
}
