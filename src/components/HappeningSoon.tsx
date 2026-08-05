import EventCard from './EventCard'

function HappeningSoon() {
  return (
    <section className='flex flex-col items-start w-full mx-auto justify-start gap-1 px-2 py-4 bg-olive-100 text-olive-800'>
      <div className='container max-w-[1350px] mx-auto px-1.5 min-h-7 flex flex-col gap-2 items-start justify-start'>
        <div className='w-full flex flex-row items-start justify-between gap-1'>
          <h2>Happening Soon</h2>
          <p>See all events</p>
        </div>
        <div className='w-full flex flex-row items-start justify-start gap-2'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  )
}
export default HappeningSoon
