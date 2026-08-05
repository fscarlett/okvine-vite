function Footer() {
  return (
    <footer className='footer relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-t border-[#e0e0e0] py-4'>
      <div className='footer-container w-full max-w-[1400px] mx-auto flex flex-col items-start justify-start gap-4 px-1.5'>
        <div className='logo text-l font-semibold my-2'>OKVine</div>
        <nav className='my-2'>
          <div className='links flex flex-row items-center justify-start gap-4'>
            <a href='#' className='text-xs'>
              Privacy Policy
            </a>
            <a href='#' className='text-xs'>
              Terms of Use
            </a>
            <a href='#' className='text-xs'>
              Support
            </a>
            <a href='#' className='text-xs'>
              Cookie Management
            </a>
          </div>
        </nav>
        <div className='copyright text-xs my-2'>
          &copy; 2026 OKVine. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
