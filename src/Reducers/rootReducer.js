import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import deviceReducer from './deviceReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    device: deviceReducer,
    auth: authReducer
});

export default rootReducer;