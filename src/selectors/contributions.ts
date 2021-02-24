import { State } from '../types/store';
import { Contribution, Status } from '../types/contribution';
import { createSelector } from 'reselect'

export const get = ({ contributions }: State) => contributions;

export const getList = (state: State) => Object.values<Contribution>(get(state));

export const getSelected = ({ selectedContribution }: State) => selectedContribution;

export const getIsSelectedDisabled = createSelector([getSelected], (selected) => {
    if (selected == null) return true

    switch (selected.status) {
        case Status.Pending:
            return false
        default:
            return true
    }
})