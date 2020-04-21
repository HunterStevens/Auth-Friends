import axios from 'axios';

export const fetchFriends = () =>{
    return dispatch =>{
        dispatch({type:'FETCH_friendS_START'})
        axios.get('http://localhost:5000/api/friends')
        .then(res =>{
            console.log("fetched API: ", res.data);
            dispatch({type:'FETCH_friendS_SUCCESS', payload:res.data});
        })
        .catch(err => {
            console.log('fetched API ERROR: ', err);
            dispatch({type:'FETCH_friendS_FAIL', payload:err})
        })
    }
}

export const newFriends = item =>{
    return dispatch =>{
        axios.post('http://localhost:5000/api/friends', item)
        .then(res =>{
            console.log("New Friend API: ", res);
            dispatch({type:"NEW_friend_SUCCESS", payload: res.data})
        })
        .catch(err =>{
            console.log("New Friend ERROR: ", err);
            dispatch({type:"NEW_friend_FAIL", payload:err.response})
        })
    }

}