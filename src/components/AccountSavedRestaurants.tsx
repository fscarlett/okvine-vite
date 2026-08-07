function AccountSavedRestaurants() {
  return (
    <div className='account-user-bar flex flex-row justify-start items-center gap-4 w-full p-4 bg-olive-50 border border-olive-200 rounded-2xl'>
      <details className='w-full'>
        <summary>
          <h2> Saved Restaurants </h2>
        </summary>
        <div className='saved-restaurants-wrapper pt-4'>
          <p>No saved restaurants yet</p>
        </div>
      </details>
    </div>
  )
}
export default AccountSavedRestaurants
