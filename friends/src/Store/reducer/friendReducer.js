const initialState = {
    friends:[],
    isFetching:false,
    error:'',
    addingFriends:false
}

export const friendReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'FETCH_FRIENDS_START':
            return{
                ...state,
                isFetching:true
            }

        case 'FETCH_FRIENDS_SUCCESS':
            return{
                ...state,
                friends:action.payload,
                isFetching:false,
                error:''
            }
        

        case 'FETCH_FRIENDS_FAIL':
            return{
                ...state,
                isFetching:false,
                error:action.payload
            }
        case 'NEW_FRIENDS_SUCCESS':
            const newFriend ={
                name:action.payload.name,
                age:action.payload.age,
                email:action.payload.email,
                id:action.payload.id
            }
            return{
                ...state,
                friends:[...state.friends, newFriend],
                error:''
            }
        case 'NEW_FRIENDS_FAIL':
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }

        default:
            return state;
    }
}