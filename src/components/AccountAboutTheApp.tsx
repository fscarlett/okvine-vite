function AccountAboutTheApp() {
  return (
    <div className='account-user-bar flex flex-row justify-start items-center gap-4 w-full p-4 bg-olive-50 border border-olive-200 rounded-2xl'>
      <details className='w-full'>
        <summary>
          <h2> About the App </h2>
        </summary>
        <div className=' filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
          <div className='about-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='about-text flex flex-col justify-start items-start gap-1'>
              <p className='text-sm'>App</p>
            </div>
            <div className='about-value '>
              <p className='text-sm'>OKVine</p>
            </div>
          </div>

          <div className='about-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='about-text flex flex-col justify-start items-start gap-1'>
              <p className='text-sm'>Version</p>
            </div>
            <div className='about-value '>
              <p className='text-sm'>0.1.0</p>
            </div>
          </div>

          <div className='about-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='about-text flex flex-col justify-start items-start gap-1'>
              <p className='text-sm'>Platform</p>
            </div>
            <div className='about-value '>
              <p className='text-sm'>OKVine Web</p>
            </div>
          </div>

          <div className='about-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='about-text flex flex-col justify-start items-start gap-1'>
              <p className='text-sm'>Developer</p>
            </div>
            <div className='about-value '>
              <p className='text-sm'>NthTrip LLC</p>
            </div>
          </div>

          <div className='about-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='about-text flex flex-col justify-start items-start gap-1'>
              <p className='text-sm'>Restaurants</p>
            </div>
            <div className='about-value '>
              <p className='text-sm'>42 curated Vinedale spots</p>
            </div>
          </div>
        </div>
      </details>
    </div>
  )
}
export default AccountAboutTheApp
