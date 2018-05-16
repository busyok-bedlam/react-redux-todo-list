import { ADD_TODO,DEL_TODO,COMPLETE_TODO} from "../constants";

const initialState = [{ id: 100,done: false,text: "gggg"}]


const todos = (state = initialState,action) => {
    switch(action.type){
        case ADD_TODO: {
            let { text,id,done } = action;
            return [...state, {id,done,text}];
        }
        case DEL_TODO: {
            const { id } = action;
            return [...state.filter( item => item.id !== id )]
        }
        case COMPLETE_TODO: {
            const { id } = action;
            const elem = state.find(item => item.id === id);
            const index = state.indexOf(elem);
            return [
                ...state.slice(0,index),
                {
                    ...state[index],
                    done: !state.index.done
                },
                ...state.slice(index+1)
            ]
        }
        default: return state;
    }
    
}
export default todos;