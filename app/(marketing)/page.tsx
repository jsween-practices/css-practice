import { Medal } from "lucide-react";

export default function page() {
  return (
    <div className={"flex items-center justify-center flex-col"}>
      <div className={"flex items-center justify-center flex-col"}>
        <div
          className={
            "mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full "
          }
        >
          <Medal className={"h-6 w-6 mr-2"} />
          No.1 작업 관리 SaaS
        </div>
        <h1
          className={"text-3xl md:text-6xl text-center text-neutral-800 mb-6"}
        >
          Todii와 함께
        </h1>
        <div
          className={
            "text-3xl md:text-6xl bg bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit"
          }
        >
          목표를 달성하세요!
        </div>
      </div>
      <div
        className={
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
        }
      >
        협업, 프로젝트 관리, 생산성 향상을 한번에! 재택근무 효율 향상을 Todii를
        통해 달성하시고 당신의 프로젝트를 성공적으로 성취하세요.
      </div>
    </div>
  );
}
