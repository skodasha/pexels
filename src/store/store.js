import getPhotos from './api';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const ADD_PHOTO = 'ADD_PHOTO';
const SHOW_PHOTOS = 'SHOW_PHOTOS';
const UPDATE_PHOTO = 'UPDATE_PHOTO';

const reducerPhotos = (state = [], action) => {
    switch (action.type) {
		case ADD_PHOTO:
			return [...state, ...action.payload];
        case UPDATE_PHOTO:
            return [...state, action.payload];
		case SHOW_PHOTOS:
            return [...action.payload];
		default:
			return state;
	}
}

let store = createStore(reducerPhotos, applyMiddleware(thunkMiddleware));

export function showPhotos (photos) {    
    return {
        type: SHOW_PHOTOS,
        payload: photos,
    }
}

export function fetchPhotos (page) { 
	return (dispatch) => {
		getPhotos(page).then((res) => {
            dispatch(showPhotos(res.photos));          
        });
	} 
}

export function addToStore(photos) {
	return {
		type: ADD_PHOTO,
		payload: photos
	}
}

export function addPhotos (page) {
    return (dispatch) => {
		getPhotos(page).then((res) => {
            dispatch(addToStore(res.photos))
        });
	}
}

export function updatePhoto (item, photos) {
    item.liked = !item.liked
    return showPhotos (photos)
}

export default store;