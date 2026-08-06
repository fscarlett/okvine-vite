function ExploreMainFilterBar() {
  return (
    <section className='w-full flex flex-col '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <div className='titlebar flex flex-row justify-between items-center w-full'>
          <div className='content-wrapper flex flex-col gap-1 items-start justify-start'>
            <h2 className='text-xl font-semibold text-olive-900'>
              Restaurants
            </h2>
            <p className='text-olive-700 text-xs'>
              Dining matched to your krewe
            </p>
          </div>
          <div className='badges-wrapper flex flex-row items-center justify-end gap-2'>
            <div className='venue-count-badge'>some info</div>
            <div className='venue-count-badge px-2 py-2 rounded-xl bg-olive-900 text-olive-100 text-md font-semibold'>
              42
              <br />
              <span className='text-xs'>places</span>
            </div>
          </div>
        </div>

        <div className='filterbar flex flex-row justify-start items-center gap-2 w-full'>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-sm border border-olive-900'>
            Curated Picks
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-sm border border-olive-900'>
            Every Restaurant
          </button>
        </div>

        <div className='filterbar flex flex-row justify-start items-center gap-2 w-full'>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
            All
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Restaurant
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Brunch
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Bar
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Cafe
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Food Truck
          </button>
        </div>
        <div className='filterbar flex flex-row justify-start items-center gap-2 w-full bg-olive-100 border border-olive-900 rounded-xl p-2'>
          <p>Near Me bar: default off, when engaged shows distance filters</p>
        </div>
        <div className='filterbar flex flex-row justify-start items-center gap-2 w-full'>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
            All
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            $
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            $$
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            $$$
          </button>
        </div>
      </div>
    </section>
  )
}
export default ExploreMainFilterBar
