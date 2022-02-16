import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReducer } from 'react';
import { GithubBadge } from './bio/GithubBadge';
import { LinkedinBadge } from './bio/LinkedinBadge';
import { ColorThemeButton } from './theming/ThemeButton';
import MagnifyingGlassIcon from '../icons/magnifying-glass.svg';
import MenuIcon from '../icons/menu.svg';
import CrossIcon from '../icons/cross.svg';

const navLinks = [
  { title: 'Bio', path: '/' },
  { title: 'Blog', path: '/blog' },
];

export const Navbar = ({ showSearchbar = false }) => {
  const router = useRouter();
  const [showMenu, toggleMenu] = useReducer((show) => !show, false);
  return (
    <nav className="bg-white dark:bg-gray-800 border-gray-200 py-2.5 rounded ">
      <div className="flex flex-wrap justify-between items-center">
        <ColorThemeButton />
        <div onClick={toggleMenu} className={`justify-between items-center w-auto md:flex md:order-2`}>
          <ul className="flex gap-x-4">
            <li>
              <LinkedinBadge />
            </li>
            <li>
              <GithubBadge />
            </li>
          </ul>
        </div>
        <div className="flex md:order-2">
          <div className="hidden relative mr-3 md:mr-0 md:block">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              id="email-adress-icon"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            {showMenu ? <CrossIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        <div
          onClick={toggleMenu}
          className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${showMenu ? null : 'hidden'} `}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} passHref>
                  <a
                    className={`${
                      router.pathname === link.path ? 'font-semibold' : null
                    } block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                    aria-current="page"
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
