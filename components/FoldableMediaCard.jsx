import React, { createContext, useContext, useReducer } from 'react';
import { Chevron } from './Chevron';

const CARD_STATES = {
  FOLDED: 'folded',
  UNFOLDED: 'unfolded',
};

const CARD_ACTIONS = {
  FOLD: 'fold_card',
  UNFOLD: 'unfold_card',
  TOGGLE: 'toggle_card',
};

const cardReducer = (state, action) => {
  switch (action.type) {
    case CARD_ACTIONS.FOLD:
      return CARD_STATES.FOLDED;
    case CARD_ACTIONS.UNFOLD:
      return CARD_STATES.UNFOLDED;
    case CARD_ACTIONS.TOGGLE:
      return state === CARD_STATES.FOLDED ? CARD_STATES.UNFOLDED : CARD_STATES.FOLDED;
    default: {
      throw new Error(`Unknown action ${action.type} for card reducer`);
    }
  }
};

const FoldableContext = createContext();

const useFoldableContext = () => useContext(FoldableContext);

const FoldableMediaCard = ({ children, className, imageSrc }) => {
  const [state, dispatch] = useReducer(cardReducer, CARD_STATES.FOLDED);

  const isFolded = state === CARD_STATES.FOLDED;
  const isUnfolded = state === CARD_STATES.UNFOLDED;

  const fixedContent = React.Children.toArray(children).find((child) => child.type === FixedContent);
  const foldableContent = React.Children.toArray(children).find((child) => child.type === FoldableContent);

  let imageClassNames =
    'absolute inset-0 max-h-[150px] min-h-100 transition-[background-size] duration-[5000ms] ease-out bg-top bg-no-repeat';
  imageClassNames += ' ';

  if (isFolded) {
    imageClassNames += 'brightness-50 blur-[2px] bg-[length:100%]';
  } else {
    imageClassNames += 'brightness-[0.8] blur-[1px] bg-[length:130%]';
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

const FoldableContent = ({ children, className }) => {
  const { isFolded } = useFoldableContext();

  const style = isFolded
    ? { transitionDuration: '300ms', maxHeight: '0', overflow: 'hidden' }
    : {
        transitionDuration: '1000ms',
        maxHeight: 'min-content',
      };

  return (
    <div style={style} className={`${className} relative transition-[max-height] ease-out`}>
      {children}
    </div>
  );
};

const FixedContent = ({ children, className }) => {
  const { isUnfolded } = useFoldableContext();

  return (
    <div className={`${className} relative transition-[margin] duration-500 ${isUnfolded ? 'mt-[150px]' : 'mt-0'}`}>
      {children}
    </div>
  );
};

FoldableMediaCard.FoldableContent = FoldableContent;
FoldableMediaCard.FixedContent = FixedContent;

export { FoldableMediaCard };
