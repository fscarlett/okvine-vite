function KreweCard() {
  return (
    <div className='flex flex-col w-full rounded-2xl shadow-sm bg-olive-50 text-olive-900 border border-olive-200'>
      <div className='rest-card-top flex flex-row justify-start items-start gap-0 '>
        <div className='r-card-image-wrapper  w-[190px] rounded-2xl bg-olive-50'>
          {' '}
          krewe icon
        </div>
        <div className='r-card-content-wrapper flex flex-col justify-start items-start gap-1 px-4 py-4'>
          <h3 className='font-bold text-sm'>Krewe Name</h3>
          <p className='text-xs'>Number of members</p>
          <p className='text-xs'>members list</p>
        </div>
        <div className='rest-card-bottom flex flex-row justify-between items-center p-4 gap-2'>
          Go to krewe button{' '}
        </div>
      </div>
    </div>
  )
}
export default KreweCard
