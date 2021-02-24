import { Action, Actions } from '../types/action';
import { VisibleDialogs, Dialogs } from '../types/dialog';

const defaultState = {
  [Dialogs.contributionEdit]: false,
  [Dialogs.contributionCancel]: false
};

const dialogs = (state: VisibleDialogs = defaultState, action: Action) => {
  switch (action.type) {
    case Actions.CONTRIBUTION_EDIT:
      return {
        ...state,
        [Dialogs.contributionEdit]: true,
      };
    case Actions.CONTRIBUTION_EDIT_DISMISS:
      return {
        ...state,
        [Dialogs.contributionEdit]: false,
      };
    case Actions.CONTRIBUTION_CANCEL:
      return {
        ...state,
        [Dialogs.contributionCancel]: true
      }
    case Actions.CONTRIBUTION_CANCEL_DISMISS:
      return {
        ...state,
        [Dialogs.contributionCancel]: false,
      };
    default:
      return state;
  }
};

export default dialogs;
