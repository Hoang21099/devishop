import { CollectionActionTypes } from './collection.types';
const INITIAL_STATE = {
    item: null
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CollectionActionTypes.SET_COLLECTION:
            return {
                ...state,
                item: action.payload,
            }
        default:
            return state;
    }
}


export default collectionReducer;