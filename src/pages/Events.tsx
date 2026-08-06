import EventsMainFilterBar from '../components/EventsMainFilterBar'
import EventsResults from '../components/EventsResults'

function EventsPage() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <EventsMainFilterBar />
        <EventsResults />
      </div>
    </div>
  )
}
export default EventsPage
