function AccountNotifications() {
  return (
    <div className='account-user-bar flex flex-row justify-start items-center gap-4 w-full p-4 bg-olive-50 border border-olive-200 rounded-2xl'>
      <details className='w-full'>
        <summary>
          <h2> Notifications Settings </h2>
        </summary>
        <div className=' filterbar flex flex-col justify-start items-start gap-2 w-full mb-6'>
          <div className='settings-toggle-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='setting-text flex flex-col justify-start items-start gap-1'>
              <h3 className='font-bold text-sm '>New Restaurants</h3>
              <p className='text-xs'>When new spots are added</p>
            </div>
            <div className='setting-toggle'>
              <input
                type='checkbox'
                checked
                name='new-restaurants'
                className='toggle toggle-primary w-8 h-4'
              />
            </div>
          </div>

          <div className='settings-toggle-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='setting-text flex flex-col justify-start items-start gap-1'>
              <h3 className='font-bold text-sm '>Krewe Invites</h3>
              <p className='text-xs'>When someone adds you to a session</p>
            </div>
            <div className='setting-toggle'>
              <input
                type='checkbox'
                checked
                name='krewe-invites'
                className='toggle toggle-primary w-8 h-4'
              />
            </div>
          </div>

          <div className='settings-toggle-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='setting-text flex flex-col justify-start items-start gap-1'>
              <h3 className='font-bold text-sm '>Event Reminders</h3>
              <p className='text-xs'>Day-of reminders for saved events</p>
            </div>
            <div className='setting-toggle'>
              <input
                type='checkbox'
                name='event-reminders'
                className='toggle toggle-primary w-8 h-4'
              />
            </div>
          </div>

          <div className='settings-toggle-item flex flex-row justify-between items-center gap-2 w-full mb-6 pt-4'>
            <div className='setting-text flex flex-col justify-start items-start gap-1'>
              <h3 className='font-bold text-sm '>Weekly Digest</h3>
              <p className='text-xs'>Top picks and events every Sunday</p>
            </div>
            <div className='setting-toggle'>
              <input
                type='checkbox'
                name='weekly-digest'
                className='toggle toggle-primary w-8 h-4'
              />
            </div>
          </div>
        </div>
      </details>
    </div>
  )
}
export default AccountNotifications
