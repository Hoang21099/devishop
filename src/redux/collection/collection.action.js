import { CollectionActionTypes } from './collection.types';

export const setCollection = (collection) => ({
    type: CollectionActionTypes.SET_COLLECTION,
    payload: collection
})