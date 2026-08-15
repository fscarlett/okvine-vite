import KreweCard from '../components/KreweCard'

function KrewePage() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <h1 className='text-xl font-bold uppercase italic'>Krewe Chat</h1>
        <p>Plan your group experience</p>
        <div className='krewe-buttons-wrapper w-full flex flex-row justify-start items-start gap-4 px-1.5 py-4 border-y border-olive-400'>
          <button className='font-semibold w-1/3 py-3 px-8 rounded-lg bg-olive-100 text-olive-900 text-sm border border-olive-900 cursor-pointer'>
            New Krewe
          </button>
          <button className='font-semibold w-1/3 py-3 px-8 rounded-lg bg-olive-400 text-olive-900 text-sm border border-olive-900 cursor-pointer'>
            Join By ID
          </button>
          <button className='font-semibold w-1/3 py-3 px-8 rounded-lg bg-olive-800 text-olive-100 text-sm border border-olive-900 cursor-pointer'>
            Compass
          </button>
        </div>
        <div className='krewe-cards-wrapper w-full flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
          <KreweCard />
          <KreweCard />
          <KreweCard />
        </div>
      </div>
    </div>
  )
}
export default KrewePage
