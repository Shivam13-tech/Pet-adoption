// function depositMoney(amount){
//     return function(dispatch) {      //To create a action and dispatch it we need to return another function with dispatch as a parameter
//         return (
//             dispatch({               //The action we pass is an object
//                 type: "deposit",
//                 payload: amount
//             })
//         )
//     }                            
// }

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}

