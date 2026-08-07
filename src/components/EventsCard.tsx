function EventsCard() {
  return (
    <div className='flex flex-row w-full rounded-2xl shadow-sm min-h-[150px] bg-olive-50 text-olive-900 border border-olive-200'>
      <div className='rest-card w-full flex flex-row justify-between items-center gap-2 '>
        <div className='eventcard-left-wrapper flex flex-row justify-start items-center gap-2'>
          <div className='event-date-wrapper w-[100px] flex flex-col justify-center items-center gap-1 h-full bg-olive-100 text-olive-800 p-2'>
            <p className='text-xs uppercase'>dow</p>
            <p className='text-med font-bold'>DATE</p>
            <p className='text-xs uppercase'>Month</p>
          </div>
          <div className='r-card-content-wrapper flex flex-col justify-start items-start gap-1 px-4 py-4'>
            <p className='text-xs px-3 py-1 rounded-xl bg-olive-700 text-olive-100'>
              Genre
            </p>
            <h3 className='font-bold text-sm'>Event Title</h3>
            <p className='text-xs'>Venue</p>
            <p className='text-xs'>Time - City - Ticket Price</p>
          </div>
        </div>
      </div>
      <div className='e-card-image-wrapper h-[150px] w-[180px] rounded-xl bg-olive-600'>
        {' '}
        image
      </div>
    </div>
  )
}
export default EventsCard
