function AccountSignoutBar() {
  return (
    <div className='account-user-bar flex flex-row justify-center items-center gap-4 w-full p-4 bg-olive-50 border border-olive-200 rounded-2xl'>
      <button className='signout-button py-1 px-12 text-md rounded-4xl text-olive-900 bg-amber-300'>
        Sign Out
      </button>
    </div>
  )
}
export default AccountSignoutBar
