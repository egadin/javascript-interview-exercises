import { locations } from '../Companies';
import { CHANGE_VISIBILITY } from '../actions/ChangeVisibility';
let defaultState = {};

for (let location of locations.entries()) {
    defaultState[location[0]] = true;
}

function visible(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_VISIBILITY:
            return {
                ...state,
                [action.location]: action.visible
            };
        
        default:
            return state;
    }
}

export default visible;