import { Action, Actions } from '../types/action';
import { Contributions, ContributionFormData } from '../types/contribution';

const defaultState = {}

const contributions = (state: Contributions = defaultState, action: Action) => {
    console.log(state)
    switch (action.type) {
        case Actions.CONTRIBUTION_UPDATE: {
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
        }
        case Actions.CONTRIBUTION_DELETE: {
            const uuid = action.payload
            const newState = { ...state }
            delete newState[uuid]
            return newState
        }
        default:
            return state;
    }
}

export default contributions;
