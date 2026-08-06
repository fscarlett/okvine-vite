import { NavLink } from 'react-router'

function Footer() {
  return (
    <footer className='footer relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen border-t border-[#e0e0e0] py-4 bg-olive-800 text-olive-100'>
      <div className='footer-container w-full max-w-[1350px] mx-auto flex flex-col items-start justify-start gap-4 px-1.5'>
        <div className='logo text-l font-semibold my-2'>OKVine</div>
        <nav className='my-2'>
          <div className='links flex flex-row items-center justify-start gap-4'>
            <NavLink to='/privacy-policy' className='text-s'>
              Privacy Policy
            </NavLink>
            <NavLink to='/terms-of-use' className='text-s'>
              Terms of Use
            </NavLink>
            <a href='#' className='text-s'>
              Support
            </a>
            <a href='#' className='text-s'>
              Cookie Management
            </a>
          </div>
        </nav>
        <div className='copyright text-xs my-2'>
          &copy; 2026 NthTrip LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
