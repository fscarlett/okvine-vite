import ExploreMainFilterBar from '../components/ExploreMainFilterBar'
import ExploreTopFilterBar from '../components/ExploreTopFilterBar'
import RestaurantsResults from '../components/RestaurantsResults'

function ExplorePage() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        Explore Page
      </div>
      <ExploreTopFilterBar />
      <ExploreMainFilterBar />
      <RestaurantsResults />
    </div>
  )
}
export default ExplorePage
