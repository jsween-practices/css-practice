import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"h-full bg-slate-100"}>
      {/* navbar */}
      <main className={"pt-40 pb-20 bg-slate-100"}>{children}</main>
      {/** footer */}
    </div>
  );
}
