import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchFriends} from './store/actions/friendsAction';
import Loader from 'react-loader-spinner';

const friendsList = props =>{
    useEffect(() => {
        props.fetchFriends();
    },[])

   if(props.isFetching){
       return<Loader/>
   }

    return (
        <div className="mainList">
            {props.characters.map(char =>{ 
            console.log(char);
            return(
                <div key={char.id}>
                    <h2>Name: {char.name}</h2>
                    <h4>age:{char.age}</h4>
                    <p>height:{char.height}</p>
                </div>   
            )})}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        characters:state.characters,
        isFetching:state.isFetching,
        error:state.error
    }
}

export default connect(mapStateToProps,
    {fetchFriends})(friendsList);