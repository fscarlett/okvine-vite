import EventsCard from './EventsCard'

function EventsResults() {
  return (
    <section className='events-wrapper w-full flex flex-col '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </section>
  )
}
export default EventsResults
