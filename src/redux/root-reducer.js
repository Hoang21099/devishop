import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import collectionReducer from './collection/collection.reducer';

export default combineReducers({
    user: userReducer,
    collection: collectionReducer
})