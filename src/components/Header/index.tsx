import Link from 'next/link'
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi'

export const Header: React.FC = () => {
  return (
    <header>
      <nav className='px-2 py-3 bg-zinc-800 sm:px-4 '>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <Link href='/' className='flex items-center '>
            <span className='self-center text-2xl font-semibold text-white uppercase cursor-pointer whitespace-nowrap'>
              Shopcart
            </span>
          </Link>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <FiMenu className='text-xl' />
          </button>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='flex flex-col p-3 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700'>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-2 py-1 pl-3 pr-4 text-white uppercase rounded md:bg-transparent md:p-0 dark:text-white'
                  aria-current='page'
                >
                  <FiShoppingCart />
                  Cart
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center gap-2 py-2 pl-3 pr-4 text-white uppercase md:hover:bg-transparent md:border-0 md:p-0'
                >
                  <FiUser />
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
