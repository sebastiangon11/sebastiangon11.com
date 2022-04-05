import { useReducer } from 'react';

import ChevronIcon from '../icons/chevron.svg';

export const OpacityHidder = ({ children }) => {
  const [open, toggleHidden] = useReducer((prev) => !prev, false);

  let className = 'transition-[max-height] duration-300 ease-out ';

  if (open) {
    className += 'max-h-screen';
  } else {
    className += 'bg-dark-down bg-clip-text max-h-14';
  }

  return (
    <div style={open ? null : { WebkitTextFillColor: 'transparent' }} className={className} onClick={toggleHidden}>
      <div style={{ maxHeight: 'inherit' }}>{children}</div>

      <ChevronIcon
        className={`box-content py-1 w-full relative -top-0.5 inline-block cursor-pointer ${
          open ? 'rotate-180' : '-mt-2'
        }`}
        width="16px"
        height="16px"
      />
    </div>
  );
};
