import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchFriends} from '../Store/actions/friendActions';
import {authorize} from '../utils/authorize';

const FriendsList = props =>{
    useEffect(() => {
        props.fetchFriends();
    },[])

   

    return (
        <div className="mainList">
            {props.friends.map(char =>{ 
            console.log(char);
            return(
                <div key={char.id}>
                    <h2>Name: {char.name}</h2>
                    <h4>age:{char.age}</h4>
                    <p>email:{char.email}</p>
                </div>   
            )})}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        friends:state.friends,
        isFetching:state.isFetching,
        error:state.error
    }
}

export default connect(mapStateToProps,
    {fetchFriends})(FriendsList);