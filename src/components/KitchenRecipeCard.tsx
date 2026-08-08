function KitchenRecipeCard() {
  return (
    <div className='flex flex-row w-full rounded-2xl shadow-sm min-h-[150px] bg-olive-50 text-olive-900 border border-olive-200'>
      <div className='rest-card w-full flex flex-row justify-between items-center gap-2 '>
        <div className='eventcard-left-wrapper flex flex-row justify-start items-center gap-2 p-2'>
          <div className='e-card-image-wrapper h-[150px] w-[180px] rounded-xl bg-olive-600'>
            {' '}
            image
          </div>
          <div className='r-card-content-wrapper flex flex-col justify-start items-start gap-1 px-4 py-4'>
            <h3 className='font-bold text-sm'>Recipe Title</h3>
            <p className='text-xs'>Difficulty - Time - # Served</p>
            <p className='text-xs px-2 py-1 rounded-xl bg-amber-200 text-amber-900'>
              Category
            </p>
          </div>
        </div>
        {/* <div className='event-date-wrapper w-[100px] flex flex-col justify-center items-center gap-1 h-full bg-olive-100 text-olive-800 p-2'>
            <p className='text-xs uppercase'>dow</p>
            <p className='text-med font-bold'>DATE</p>
            <p className='text-xs uppercase'>Month</p>
          </div> */}
      </div>
    </div>
  )
}
export default KitchenRecipeCard
