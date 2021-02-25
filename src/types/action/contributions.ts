import { Actions } from '../action';
import { WithContribution, ContributionFormData } from '../contribution';

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

export interface ContributionUpdate {
  payload: ContributionFormData
  type: Actions.CONTRIBUTION_UPDATE;
}

export interface ContributionDelete {
  payload: string
  type: Actions.CONTRIBUTION_DELETE;
}