export const amountReducer=(state=0,action)=>{
    console.warn("inside amountreducer")
    if(action.type==='withdraw'){
        console.warn("inside withdraw");
        return state - action.money;
    }
    else if(action.type === 'deposit'){
        console.warn("inside deposit");
        return state + action.money;
    }
    else{
        return state;
    }
}