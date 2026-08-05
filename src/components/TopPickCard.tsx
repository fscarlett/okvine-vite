function TopPickCard() {
  return (
    <div className='w-[400px] bg-olive-300 rounded-xl min-h-50 border border-olive-700 flex flex-col items-center justify-start gap-2'>
      <div className='w-full bg-olive-400 rounded-t-xl h-22'>
        {' '}
        image wrapper
      </div>
      <div className='w-full '>
        {' '}
        <h3 className='font-bold'>Name of venue</h3>
      </div>
      <div className='w-full '>
        <p className='text-xs'>district</p>
        <p className='text-xs'>match %</p>
        <p className='text-xs'>food style</p>
      </div>
      <button className='bg-olive-700 text-white px-4 py-2 rounded-4xl mb-2 text-sm'>
        Reserve A Table
      </button>
    </div>
  )
}
export default TopPickCard
