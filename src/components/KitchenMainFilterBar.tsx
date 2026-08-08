function KitchenMainFilterBar() {
  return (
    <section className='w-full flex flex-col '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <div className='titlebar flex flex-row justify-between items-center w-full'>
          <div className='content-wrapper flex flex-col gap-1 items-start justify-start'>
            <h1 className='text-xl font-bold uppercase italic'>
              Chef's Kitchen
            </h1>
            <p className='text-olive-700 text-xs'>42 Recipes</p>
          </div>
          {/* <div className='badges-wrapper flex flex-row items-center justify-end gap-2'>
            <div className='venue-count-badge px-2 py-2 rounded-xl bg-olive-900 text-olive-100 text-md font-semibold'>
              42
              <br />
              <span className='text-xs'>events</span>
            </div>
          </div> */}
        </div>

        <div className='filterbar flex flex-row justify-start items-center gap-2 w-full'>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
            All
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Seafood
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Meat & Poultry
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Desserts
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Sauces
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Sides
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Soups
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Salads
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Beverages
          </button>
          <button className='font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
            Other
          </button>
        </div>
      </div>
    </section>
  )
}
export default KitchenMainFilterBar
