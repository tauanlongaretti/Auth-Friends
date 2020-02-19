import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import NewFriendForm from "./NewFriendForm";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res);
            this.setState({ ...this.state, friendsList: res.data })
        })
        .catch(err => console.error(err));
    };

    render() {
        return (
            <div>
                <h1>Friends</h1>
                <div className="friends">
                    {this.state.friendsList.map(friend => (
                        <div key={friend.id} className="friend">
                            <h2>{friend.name}</h2>
                            <p><span>Age:</span> {friend.age}</p>
                            <p><span>Email:</span> {friend.email}</p>
                        </div>    
                    ))}
                </div>
                <NewFriendForm />
            </div>
        )
    }    
}

export default FriendsList;