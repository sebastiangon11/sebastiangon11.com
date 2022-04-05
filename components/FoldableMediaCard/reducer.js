export const CARD_STATES = {
  FOLDED: 'folded',
  UNFOLDED: 'unfolded',
};

export const CARD_ACTIONS = {
  FOLD: 'fold_card',
  UNFOLD: 'unfold_card',
  TOGGLE: 'toggle_card',
};

export const cardReducer = (state, action) => {
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
