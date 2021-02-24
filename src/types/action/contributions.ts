import { Actions } from '../action';
import { WithContribution } from '../contribution';

export interface ContributionSelect extends WithContribution {
  type: Actions.CONTRIBUTION_SELECT;
}

export interface ContributionEdit {
  type: Actions.CONTRIBUTION_EDIT;
}

export interface ContributionEditDismiss {
  type: Actions.CONTRIBUTION_EDIT_DISMISS;
}

export interface ContributionCancel {
  type: Actions.CONTRIBUTION_CANCEL;
}

export interface ContributionCancelDismiss {
  type: Actions.CONTRIBUTION_CANCEL_DISMISS;
}