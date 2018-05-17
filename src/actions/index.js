import { v4 } from "node-uuid";
import { ADD_TODO,DEL_TODO,COMPLETE_TODO,TOGGLE_EDIT } from "../constants";

export const addAction = text => ({
    type: ADD_TODO,
    text,
    done: false,
    activeEdit: false,
    id: v4()
});
export const changeFlagAction = id => ({
    type: COMPLETE_TODO,
    id
})
export const deleteItemAction = id => ({
    type: DEL_TODO,
    id
})

export const toggleEditAction = id => ({
    type: TOGGLE_EDIT,
    id
})