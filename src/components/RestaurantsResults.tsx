import RestaurantCard from './RestaurantCard'

function RestaurantsResults() {
  return (
    <section className='restaurants-wrapper w-full flex flex-col '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </section>
  )
}
export default RestaurantsResults
