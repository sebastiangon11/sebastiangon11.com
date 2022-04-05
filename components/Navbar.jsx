import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReducer } from 'react';
import { GithubBadge } from './bio/GithubBadge';
import { LinkedinBadge } from './bio/LinkedinBadge';
import { SearchBar } from './SearchBar';
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
    <nav className="bg-transparent border-gray-200 py-2.5 rounded">
      <div className="flex flex-wrap justify-between items-center">
        <div className="justify-between items-center w-auto md:flex md:order-2 mx-2.5">
          <ul className="flex gap-x-4">
            <li>
              <LinkedinBadge />
            </li>
            <li>
              <GithubBadge />
            </li>
          </ul>
        </div>
        {showSearchbar ? (
          <div className="hidden md:flex md:order-2">
            <div className="mr-3 md:mr-0">
              <SearchBar />
            </div>
          </div>
        ) : null}

        <div className="flex md:order-2 md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          >
            <span className="sr-only">Toggle menu</span>
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
                    } block py-2 pr-4 pl-3 border-b  md:border-0  md:p-0 md:hover:text-white text-gray-200 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700`}
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
