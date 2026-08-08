import KitchenRecipeCard from './KitchenRecipeCard'

function KitchenResults() {
  return (
    <section className='events-wrapper w-full flex flex-col '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <KitchenRecipeCard />
        <KitchenRecipeCard />
        <KitchenRecipeCard />
        <KitchenRecipeCard />
        <KitchenRecipeCard />
        <KitchenRecipeCard />
        <KitchenRecipeCard />
        <KitchenRecipeCard />
        <KitchenRecipeCard />
      </div>
    </section>
  )
}
export default KitchenResults
