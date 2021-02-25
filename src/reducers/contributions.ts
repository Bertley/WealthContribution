import { Action, Actions } from '../types/action';
import { Contributions, ContributionFormData } from '../types/contribution';

const defaultState = {}

const contributions = (state: Contributions = defaultState, action: Action) => {
    switch (action.type) {
        case Actions.CONTRIBUTION_UPDATE:
            const { uuid, tfsa, rrsp }: ContributionFormData = action.payload
            return {
                ...state,
                [uuid]: {
                    ...state[uuid],
                    tfsa: tfsa,
                    rrsp: rrsp,
                    total: tfsa + rrsp
                }
            }
        default:
            return state;
    }
}

export default contributions;
