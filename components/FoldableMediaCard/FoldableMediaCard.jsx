import React, { createContext, useContext, useReducer } from 'react';
import { Chevron } from '../icons/Chevron';

import { FoldableContent } from './FoldableContent';
import { FixedContent } from './FixedContent';
import { CARD_ACTIONS, CARD_STATES, cardReducer } from './reducer';

const FoldableContext = createContext();

export const useFoldableContext = () => useContext(FoldableContext);

const FoldableMediaCard = ({ children, className, imageSrc }) => {
  const [state, dispatch] = useReducer(cardReducer, CARD_STATES.FOLDED);

  const isFolded = state === CARD_STATES.FOLDED;
  const isUnfolded = state === CARD_STATES.UNFOLDED;

  const fixedContent = React.Children.toArray(children).find((child) => child.type === FixedContent);
  const foldableContent = React.Children.toArray(children).find((child) => child.type === FoldableContent);

  let imageClassNames =
    'absolute inset-0 max-h-[150px] min-h-100 transition-[background-size] duration-[500ms] ease-out bg-top bg-no-repeat ';

  if (isFolded) {
    imageClassNames += 'brightness-50 blur-[2px] bg-[length:100%]';
  } else {
    imageClassNames += 'brightness-[0.8] blur-none bg-[length:110%]';
  }

  return (
    <FoldableContext.Provider value={{ isFolded, isUnfolded, dispatch }}>
      <div className={`${className} relative shadow-md rounded-xl overflow-hidden`}>
        <div style={{ backgroundImage: `url('${imageSrc}')` }} className={imageClassNames}></div>

        {fixedContent}
        {foldableContent}

        <button
          className="block w-full box-content py-2 relative cursor-pointer"
          aria-label="toggle content"
          onClick={() => dispatch({ type: CARD_ACTIONS.TOGGLE })}
        >
          <Chevron
            className={`m-auto h-[16px] transition-transform duration-500 stroke-2 hover:stroke-[3] ${
              isUnfolded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
    </FoldableContext.Provider>
  );
};

FoldableMediaCard.FoldableContent = FoldableContent;
FoldableMediaCard.FixedContent = FixedContent;

export { FoldableMediaCard };
