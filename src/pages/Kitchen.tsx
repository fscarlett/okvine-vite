import KitchenResults from '../components/KitchenResults'
import KitchenMainFilterBar from '../components/KitchenMainFilterBar'

function KitchenPage() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <KitchenMainFilterBar />
        <KitchenResults />
      </div>
    </div>
  )
}
export default KitchenPage
