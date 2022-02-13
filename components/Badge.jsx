export const BADGES = {
  BLUE: 'BLUE',
  DARK: 'DARK',
  RED: 'RED',
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
  INDIGO: 'INDIGO',
  PURPLE: 'PURPLE',
  PINK: 'PINK',
};

const classNames = {
  [BADGES.BLUE]: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800">',
  [BADGES.DARK]: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">',
  [BADGES.RED]: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900">',
  [BADGES.GREEN]: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900">',
  [BADGES.YELLOW]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900">',
  [BADGES.INDIGO]: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900">',
  [BADGES.PURPLE]: 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900">',
  [BADGES.PINK]: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900">',
};

export const Badge = ({ children, type }) => (
  <span className={`inline-block text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${classNames[type]}`}>
    {children}
  </span>
);
