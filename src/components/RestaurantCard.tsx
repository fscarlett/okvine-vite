function RestaurantCard() {
  return (
    <div className='flex flex-col w-full rounded-2xl shadow-sm min-h-[150px] bg-olive-50 text-olive-900 border border-olive-200'>
      <div className='rest-card-top flex flex-row justify-start items-start gap-0'>
        <div className='r-card-image-wrapper h-[100px] w-[150px] rounded-tl-2xl bg-olive-600'>
          {' '}
          image
        </div>
        <div className='r-card-content-wrapper flex flex-col justify-start items-start gap-1 px-4 py-4'>
          <h3 className='font-bold text-sm'>Restaurant Name</h3>
          <p className='text-xs'>Cuisine Type</p>
          <p className='text-xs'>Price - Distance</p>
        </div>
      </div>
      <div className='rest-card-bottom flex flex-row justify-between items-center p-4 gap-2'>
        up/down, start a krewe button{' '}
      </div>
    </div>
  )
}
export default RestaurantCard
