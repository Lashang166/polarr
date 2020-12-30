

const toastReducer = (state, action) => {
    switch(action.type){
        case "ALERT_OPEN": 
            return {
                ...state, 
                open: true,
                msg: action.payload
            }
        case "ALERT_CLOSE":
            return {
                ...state,
                open: false,
                msg: ""
            }
        

        default:
            return state;
        
    }
}


export default toastReducer;