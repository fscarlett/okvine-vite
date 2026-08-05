function Header() {
  return (
    <>
      <div className='topbar relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-b border-[#e0e0e0] h-[50px] --color-olive-800'>
        <div className='h-full w-full mx-auto flex items-center justify-center bg-olive-800 text-olive-100'>
          <div className='topbar-container flex flex-row justify-between items-center h-full w-full max-w-[1350px] py-0.5 px-1.5'>
            <div className='logo flex items-center'>
              <a href='/'>
                <span className='font-semibold text-xl'>OKVine</span>
              </a>
            </div>
            <div className='items-center flex '>
              <div className='search px-2'>search</div>
              <div className='login px-2'>login button</div>
              <div className='burger py-3'>burger menu ?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
