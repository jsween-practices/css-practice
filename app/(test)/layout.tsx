import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"h-full"}>
      <div>This is a navbar</div>
      {children}
    </div>
  );
}
