import { useReducer } from 'react';

import { Chevron } from '../icons/Chevron';

export const OpacityHidder = ({ children }) => {
  const [open, toggleHidden] = useReducer((prev) => !prev, false);
  return (
    <div
      style={open ? null : { '-webkit-text-fill-color': 'transparent' }}
      className={open ? null : 'bg-light-down dark:bg-dark-down bg-clip-text h-14'}
      onClick={toggleHidden}
    >
      {children}

      <Chevron
        className={`box-content py-1 w-full relative -top-0.5 inline-block cursor-pointer ${
          open ? 'rotate-180' : '-mt-2'
        }`}
        width="16px"
        height="16px"
      />
    </div>
  );
};
