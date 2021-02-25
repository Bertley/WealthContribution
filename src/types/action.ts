import {
  ContributionSelect,
  ContributionEdit, 
  ContributionEditDismiss, 
  ContributionCancel, 
  ContributionCancelDismiss, 
  ContributionUpdate
} from './action/contributions';

export enum Actions {
  CONTRIBUTION_EDIT = 'CONTRIBUTION_EDIT',
  CONTRIBUTION_EDIT_DISMISS = 'CONTRIBUTION_EDIT_DISMISS',
  CONTRIBUTION_SELECT = 'CONTRIBUTION_SELECT',
  CONTRIBUTION_CANCEL = 'CONTRIBUTION_CANCEL',
  CONTRIBUTION_CANCEL_DISMISS = 'CONTRIBUTION_CANCEL_DISMISS',
  CONTRIBUTION_UPDATE = 'CONTRIBUTION_UPDATE'
}


export type Action = ContributionEdit
  | ContributionEditDismiss
  | ContributionSelect
  | ContributionCancel
  | ContributionCancelDismiss
  | ContributionUpdate
  ;
