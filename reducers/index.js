import {combineReducers} from 'redux';
import counter from './countReducer';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;