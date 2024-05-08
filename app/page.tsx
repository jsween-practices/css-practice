import "./globals.css"
import Banner from "@/app/Banner";

export default function Home() {
  return (<>
      <div className={"flex-col"}>
        <header>
          <h2 className="text-4xl font-semibold">이번 주 신규 등록 체험</h2>
          <section className={"banners"}>
            <Banner/>
          </section>
        </header>
        <main>
          <section>
            <p className="text-2xl">전 세계 현지 호스트의 도움을 받아 여행을 계획해보세요</p>
          </section>
          <section>
            <p className="text-2xl">베스트셀러 체험</p>
          </section>
          <section><p className="text-2xl">6시간 이내 시작</p></section>
          <section><p className="text-2xl">단체로 즐기기에 적합</p></section>
          <section><p className="text-2xl">이번 주말에 즐길 수 있는 체험</p></section>
        </main>
        <footer></footer>
      </div>

    </>

  );
}
