import AccountRecipeFilters from '../components/AccountRecipeFilters'
import AccountSavedRestaurants from '../components/AccountSavedRestaurants'
import AccountTasteProfile from '../components/AccountTasteProfile'
import AccountUserBar from '../components/AccountUserBar'

function AccountPage() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-start '>
      <div className='container max-w-[1350px] mx-auto flex flex-col justify-start items-start gap-4 px-1.5 py-4'>
        <h1 className='text-2xl font-bold'>Account</h1>
        <AccountUserBar />
        <AccountTasteProfile />
        <AccountSavedRestaurants />
        <AccountRecipeFilters />
      </div>
    </div>
  )
}
export default AccountPage
