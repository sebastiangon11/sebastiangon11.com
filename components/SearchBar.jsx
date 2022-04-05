import MagnifyingGlassIcon from '../icons/magnifying-glass.svg';

export const SearchBar = () => (
  <div className="relative">
    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
    </div>
    <input
      type="text"
      className="block p-2 pl-10 w-full rounded-lg border sm:text-sm  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      placeholder="Search..."
    />
  </div>
);
