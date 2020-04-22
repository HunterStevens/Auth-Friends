import React, {useState} from 'react';
import {connect} from 'react-redux';
import {authorize} from '../utils/authorize';
import {newFriends} from '../Store/actions/friendActions'

const initialValue ={
    id:'',
    name:'',
    age:'',
    email:''
}

const FriendsForm = props =>{
    const [friend, setFriend] = useState(initialValue);

    const inputChange = event =>{
        event.preventDefault();
        setFriend({...friend, [event.target.name]:event.target.value
        });
    }

    const formSubmit = event =>{
        props.newFriends(friend);
    }

    return(
        <div>
            <h1>New Friend</h1>
           <form onSubmit = {formSubmit}>
            <input type = 'text' placeholder = 'Name' name = 'name' value = {friend.name} onChange = {inputChange} required />
            <input type = 'text' placeholder = 'Email' name = 'email' value = {friend.email} onChange = {inputChange} required />
            <input type = 'text' placeholder = 'Age' name = 'age' value = {friend.age} onChange = {inputChange} required/>
            <button type = 'submit'>Create New friend!</button>
        </form> 
        </div>
    )
}

const mapStateToProps = state =>{
}

export default connect(
    null,
    {newFriends}
)(FriendsForm)