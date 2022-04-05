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
  [BADGES.BLUE]: 'bg-blue-200 text-blue-800',
  [BADGES.DARK]: 'bg-gray-700 text-gray-300',
  [BADGES.RED]: 'bg-red-200 text-red-900',
  [BADGES.GREEN]: 'bg-green-200 text-green-900',
  [BADGES.YELLOW]: 'bg-yellow-200 text-yellow-900',
  [BADGES.INDIGO]: 'bg-indigo-200 text-indigo-900',
  [BADGES.PURPLE]: 'bg-purple-200 text-purple-900',
  [BADGES.PINK]: 'bg-pink-200 text-pink-900',
};

export const Badge = ({ children, type }) => (
  <span className={`inline-block text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${classNames[type]}`}>
    {children}
  </span>
);
