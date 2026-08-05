import TopPickCard from './TopPickCard'

function TopPicks() {
  return (
    <section className='flex flex-col items-start w-full mx-auto justify-start gap-1 px-2 py-4 bg-olive-100 text-olive-800'>
      <div className='container max-w-[1350px] mx-auto px-2 min-h-7 flex flex-col gap-2 items-start justify-start'>
        <h2>Tonight's Top Picks</h2>
        <p>Personalized for you</p>
        <div className='w-full flex flex-row items-start justify-start gap-2 flex-wrap'>
          <TopPickCard />
          <TopPickCard />
          <TopPickCard />
          <TopPickCard />
          <TopPickCard />
          <TopPickCard />
          <TopPickCard />
          <TopPickCard />
          <TopPickCard />
        </div>
      </div>
    </section>
  )
}
export default TopPicks
