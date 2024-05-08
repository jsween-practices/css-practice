const url = "https://www.airbnb.co.kr/s/experiences/online?refinement_paths%5B%5D=%2Fexperiences%2Fsection%2FEXPERIENCES_TOP_BOOKED_ONLINE_GROUPING%3ATOP_BOOKED&search_type=section_navigation"
const imageUrl = "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1440"
export default function Banner() {
  return (
    <a href={url}>
      <article className={"relative"}>
        <img className={"relative w-[590px] overflow-hidden"} src={imageUrl} alt={"사진"}/>
        <div className={""}>
          <p className={"relative top-50 text-xs"}>컬렉션</p>
          <p className={"text-2xl font-semibold"}>전 세계 인기 체험</p>
        </div>
      </article>
    </a>
  )
}