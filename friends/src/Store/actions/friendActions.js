import axios from 'axios';
import {authorize} from '../../utils/authorize'

export const fetchFriends = () =>{
    return dispatch =>{
        dispatch({type:'FETCH_FRIENDS_START'})
        authorize().get('/api/friends')
        .then(res =>{
            console.log("fetched API: ", res.data);
            //dispatch({type:'FETCH_FRIENDS_SUCCESS', payload:res.data});
        })
        .catch(err => {
            console.log('fetched API ERROR: ', err);
           // dispatch({type:'FETCH_FRIENDS_FAIL', payload:err})
        })
    }
}

export const newFriends = item =>{
    return (dispatch) =>{
        authorize().post('/api/friends', item)
        .then(res =>{
            console.log("New Friend API: ", res);
            //dispatch({type:"NEW_FRIENDS_SUCCESS", payload: res.data})
        })
        .catch(err =>{
            console.log("New Friend ERROR: ", err);
            //dispatch({type:"NEW_FRIENDS_FAIL", payload:err.response})
        })
    }

}