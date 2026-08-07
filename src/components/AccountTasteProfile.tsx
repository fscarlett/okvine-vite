function AccountTasteProfile() {
  return (
    <div className='account-user-bar flex flex-row justify-start items-center gap-4 w-full p-4 bg-olive-50 border border-olive-200 rounded-2xl'>
      <details className='w-full'>
        <summary>
          <h2> Taste Profile </h2>
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
            <h3 className='font-bold text-sm uppercase'>Dining Style</h3>
            <div className='buttons-wrapper flex flex-row flex-wrap justify-start items-center gap-2 w-full'>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
                Casual
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Fine Dining
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Food Trucks
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Late Night
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Outdoor
              </button>
            </div>
          </div>

          <div className='filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
            <h3 className='font-bold text-sm uppercase'>Budget</h3>
            <div className='buttons-wrapper flex flex-row flex-wrap justify-start items-center gap-2 w-full'>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
                $
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                $$
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                $$$
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                $$$$
              </button>
            </div>
          </div>

          <div className='filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
            <h3 className='font-bold text-sm uppercase'>Values</h3>
            <div className='buttons-wrapper flex flex-row flex-wrap justify-start items-center gap-2 w-full'>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
                Food Quality
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Atmosphere
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Service
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Live Music
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Outdoor Seating
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Local
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
export default AccountTasteProfile
