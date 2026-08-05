function EventCard() {
  return (
    <div className='w-[210px] bg-white rounded-xl h-50'>
      <div className='w-full rounded-t-2xl bg-amber-500 h-22'>
        {' '}
        image wrapper
      </div>
      <div className='p-1'>
        <h3 className='font-semibold'>Event Title</h3>
        <p className='text-sm text-olive-600'>Location</p>
        <p className='text-sm text-olive-600'>date - time</p>
        <button className='text-xs bg-olive-800 text-olive-100 px-3 py-1 rounded-2xl mt-2'>
          Get Tickets
        </button>
      </div>
    </div>
  )
}
export default EventCard
