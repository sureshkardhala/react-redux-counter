import {createStore} from 'redux';

const reducerFun = (state = {counter :0} , action) => {
    //Should be a synchronus function
    //Orignal state can not be modified

    if(action.type === "INC"){ 
        return {counter : state.counter +1};
    }
    if(action.type === "DEC"){
        return {counter : state.counter-1};
    }
    if(action.type === "ADD"){
        return {counter : state.counter + action.payload};
    }
    if(action.type === "SUB"){
        return {counter : state.counter - action.payload};
    }
    return state;
}

const store = createStore (reducerFun);
export default store;