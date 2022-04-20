export const initialState=null

export const reducer=(state,action)=>{
    if(action.type==="USER" || action.type==="ADMIN"){
        return action.payload
    }
    else if(action.type==="CLEAR"){
        return null
    }
    else{
return state
    }
    
}