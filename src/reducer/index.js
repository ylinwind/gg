
const initalState = {
    isRuning:false,
    name:'right'
}

export const reducer = (state = initalState,action)=>{
    switch (action.type){
        case 'wrong':
            return {
                isRuning:true,
                name:'wrong'
            };
        case 'right':
            return {
                isRuning:false,
                name:'right'
            };
        default:
            return state;
    }
}