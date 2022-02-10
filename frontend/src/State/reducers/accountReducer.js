
//The banker ie reducer gets and action type and perform certain action to our basic state

function reducer(state = 0, action){
    switch(action.type){
        case "deposit":
            return state + action.payload;
        default: 
            return state
    }
}

export default reducer