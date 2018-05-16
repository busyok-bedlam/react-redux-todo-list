let id = 0;
export const addAction = text => ({
    type: "ADD_TODO",
    text,
    done: false,
    id: id++
});