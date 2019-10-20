import * as actionTypes from '../actionTypes';

export const login_loading = ()=>({
    type:actionTypes.LOGIN_LOADING
})

export const login_failed = (errMess)=>({
    type:actionTypes.LOGIN_FAILED,
    errMess
})

export const login_success = (user)=>({
    type:actionTypes.LOGIN_SUCCESS,
    user
})

export const logout_success = (user)=>({
    type:actionTypes.LOGOUT_SUCCESS,
})





export const food_success = (food)=>({
    type:actionTypes.FOOD_SUCCESS,
    food
   
})

export const food_add = (food)=>({
    type:actionTypes.FOOD_ADD,
    food
   
})
export const food_remove = (food)=>({
    type:actionTypes.FOOD_REMOVE,
    food
   
})

export const food_update = (food)=>({
    type:actionTypes.FOOD_UPDATE,
    food
   
})


