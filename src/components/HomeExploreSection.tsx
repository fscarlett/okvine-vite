import { NavLink } from 'react-router'

function HomeExploreSection() {
  return (
    <section className='flex flex-col items-start w-full mx-auto justify-start gap-1 px-2 py-4 bg-olive-100 text-olive-800'>
      <div className='container max-w-[1350px] mx-auto px-2 min-h-7 flex flex-col gap-2 items-start justify-start'>
        <h2>Explore</h2>
        <div className='w-full mx-auto py-1.5 flex flex-row items-start justify-start gap-2 flex-wrap'>
          <NavLink
            to='/kitchen'
            className='bg-amber-200 w-64 flex flex-col items-start justify-start gap-1 px-2 py-2 rounded-lg'
          >
            <p>kitchen</p>
            <h3 className='text-lg font-semibold'># of recipes</h3>
            <p className='text-xs'>wine country cookbook</p>
          </NavLink>
          <NavLink
            to='/events'
            className='bg-amber-200 w-64 flex flex-col items-start justify-start gap-1 px-2 py-2 rounded-lg'
          >
            <p>events</p>
            <h3 className='text-lg font-semibold'># of events</h3>
            <p className='text-xs'>food, music, culture</p>
          </NavLink>
        </div>
      </div>
    </section>
  )
}
export default HomeExploreSection
