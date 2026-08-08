function AccountDietaryFilters() {
  return (
    <div className='account-user-bar flex flex-row justify-start items-center gap-4 w-full p-4 bg-olive-50 border border-olive-200 rounded-2xl'>
      <details className='w-full'>
        <summary>
          <h2> Dietary Filters </h2>
        </summary>
        <div className='taste-profile-wrapper pt-4'>
          <div className='filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
            <p className='text-xs text-olive-900'>
              Your dietary preferences are completely private and never visible
              to other krewe members.
            </p>
            <h3 className='font-bold text-sm uppercase'>Restrictions</h3>
            <div className='buttons-wrapper flex flex-row flex-wrap justify-start items-center gap-2 w-full'>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
                Vegetarian
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Vegan
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Gluten-Free
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Dairy-Free
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Nut-Free
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Halal
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Kosher
              </button>
            </div>
          </div>

          <div className='filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
            <h3 className='font-bold text-sm uppercase'>Allergies</h3>
            <div className='buttons-wrapper flex flex-row flex-wrap justify-start items-center gap-2 w-full'>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-900 text-olive-100 text-xs border border-olive-900'>
                Shellfish
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Fish
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Tree Nuts
              </button>

              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Peanuts
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Soy
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Eggs
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Wheat
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Sesame
              </button>
              <button className=' cursor-pointer font-semibold py-1 px-6 rounded-2xl bg-olive-100 text-olive-900 text-xs border border-olive-900'>
                Dairy
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
export default AccountDietaryFilters
