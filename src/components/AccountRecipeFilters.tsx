function AccountRecipeFilters() {
  return (
    <div className='account-user-bar flex flex-row justify-start items-center gap-4 w-full p-4 bg-olive-50 border border-olive-200 rounded-2xl'>
      <details className='w-full'>
        <summary>
          <h2> Recipe Filters </h2>
        </summary>
        <div className='taste-profile-wrapper pt-4'>
          <div className='filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
            <h3 className='font-bold text-sm uppercase'>Cuisines</h3>
            <div className='buttons-wrapper flex flex-row flex-wrap justify-start items-center gap-2 w-full'>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
                Italian
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Mexican
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Chinese
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Indian
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Thai
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                French
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Japanese
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Korean
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                BBQ
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                American
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Mediterranean
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Vegetarian
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Other
              </button>
            </div>
          </div>

          <div className='filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
            <h3 className='font-bold text-sm uppercase'>Difficulty</h3>
            <div className='buttons-wrapper flex flex-row flex-wrap justify-start items-center gap-2 w-full'>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
                Easy
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Medium
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Hard
              </button>
            </div>
          </div>

          <div className='filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
            <h3 className='font-bold text-sm uppercase'>Cook Time</h3>
            <div className='buttons-wrapper flex flex-row flex-wrap justify-start items-center gap-2 w-full'>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
                Under 30 min
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                30-60 min
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                1-2 hours
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Over 2 hours
              </button>
            </div>
          </div>

          <div className='save-wrapper flex flex-row justify-center items-center gap-2 w-full p-4'>
            <button className='font-semibold py-2 px-6 rounded-2xl bg-green-700 text-olive-100 text-sm border border-olive-900 cursor-pointer'>
              Save
            </button>
          </div>
        </div>
      </details>
    </div>
  )
}
export default AccountRecipeFilters
