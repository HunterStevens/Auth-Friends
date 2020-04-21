import React, {useState} from 'react';
import {connect} from 'react-redux';
import {authorize} from '../utils/authorize';

const initialValue ={
    id:'',
    name:'',
    age:'',
    height:''
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
           <form onSubmit = {formSubmit}>
            <input type = 'text' placeholder = 'Name' name = 'name' value = {friend.name} onChange = {inputChange} required />
            <input type = 'text' placeholder = 'Height' name = 'height' value = {friend.height} onChange = {inputChange} required />
            <input type = 'text' placeholder = 'Age' name = 'age' value = {friend.age} onChange = {inputChange} required/>
            <button type = 'submit'>Create New friend!</button>
        </form> 
        </div>
    )
}

export default connect(
    
)(FriendsForm)